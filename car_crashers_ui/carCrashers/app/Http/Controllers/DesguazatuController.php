<?php

namespace App\Http\Controllers;

use App;
use Illuminate\Http\Request;
use App\Http\Requests\DesguazatuRequest;
use App\Models\PeritutzaEskaera;
use Illuminate\Support\Facades\Auth;


class DesguazatuController extends Controller
{
    public function store(DesguazatuRequest $request)
    {
         $data = $request->validated();
        $argazkiPaths = [];

        if ($request->hasFile('argazkiak')) {
            foreach ($request->file('argazkiak') as $argazkia) {
                if ($argazkia->getSize() > 5 * 1024 * 1024 || 
                    !in_array($argazkia->getMimeType(), ['image/jpeg', 'image/png', 'image/webp'])) {
                    throw ValidationException::withMessages([
                        'argazkiak' => 'Fotos <5MB y JPG/PNG/WEBP solamente.'
                    ]);
                }
                
                $path = $argazkia->store('peritutza_argazkiak', 'public');
                $argazkiPaths[] = $path;
            }
        }

        PeritutzaEskaera::create([
            'erab_id'          => Auth::id(),
            'langile_id'       => null,
            'desguazatzeko'    => true, 
            'kotxe_matrikula'  => null,
            'matrikula'        => $data['matrikula'],
            'marka'            => $data['marka'],
            'modelo'           => $data['modelo'],
            'urtea'            => $data['urtea'],
            'egoera_kotxe'     => $data['egoera'],
            'desk'             => $data['deskribapena'] ?? 'Sin descripción.',
            'argazkiak'        => json_encode($argazkiPaths),
            'prezioa'          => null,
            'eskaera_egoera'   => 'zain',
            'produktu_id'      => null,
        ]);

        return back()->with('success', '¡Eskaera desguazatu ongi bidalia!');
    }
    
}
