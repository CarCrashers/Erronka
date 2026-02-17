<?php

namespace App\Http\Controllers;

use App\Http\Requests\SalduRequest;
use App\Models\PeritutzaEskaera;
use Illuminate\Http\Request;  
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Kotxea;
use App\Models\Produktua;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class PeritutzaEskaeraController extends Controller
{

    public function index()
    {
        $peritutza = PeritutzaEskaera::latest()->get()->map(function ($e) {

            $paths = $e->argazkiak ?? [];

            if (is_string($paths)) {
                $paths = json_decode($paths, true) ?? [];
            }

            if (!is_array($paths)) {
                $paths = [];
            }

            $argazkiUrls = collect($paths)
                ->filter(fn ($p) => is_string($p) && $p !== '')
                ->map(fn ($p) => Storage::disk('public')->url($p)) 
                ->values()
                ->all();

            return [
                ...$e->toArray(),
                'argazki_urls' => $argazkiUrls,
            ];
        });

        return Inertia::render('peritutza', [
            'peritutza' => $peritutza,
        ]);
    }


    public function update(Request $request, $id)
    {
        $peritutza = PeritutzaEskaera::findOrFail($id);

        $peritutza->prezioa = $request->prezioa;
        $peritutza->eskaera_egoera = $request->eskaera_egoera;
        $peritutza->desguazatzeko = $request->desguazatzeko ? 1 : 0;
        $peritutza->save();

        if ($request->eskaera_egoera === 'amaituta') {

            DB::transaction(function () use ($peritutza) {

               
                $argazkiak = $peritutza->argazkiak ?? [];

                if (is_string($argazkiak)) {
                    $argazkiak = json_decode($argazkiak, true) ?? [];
                }

                if (!is_array($argazkiak)) {
                    $argazkiak = [];
                }

                $argazkiNagusia = $argazkiak[0] ?? null;

                // 1) KOTXEAK
                Kotxea::updateOrCreate(
                    ['matrikula' => $peritutza->matrikula],
                    [
                        'marka'     => $peritutza->marka ?? 'Ezezaguna',
                        'modeloa'   => $peritutza->modelo ?? 'Ezezaguna',
                        'urtea'     => $peritutza->urtea ?? null,
                        'argazkiak' => $argazkiak,
                    ]
                );


                // 2) PRODUKTUAK (aquí copiamos fotos)
                Produktua::updateOrCreate(
                    ['matrikula' => $peritutza->matrikula],
                    [
                        'pieza_id'         => null,
                        'egoera'           => 'salgai',
                        'deskribapena'     => trim("Ibilgailu peritatua: " . ($peritutza->marka ?? '') . " " . ($peritutza->modelo ?? '')),
                        'prezioa'          => $peritutza->prezioa ?? 0,

                        // >>> FOTOS COPIADAS DESDE PERITUTZA_ESKAERA
                        'argazkiak'        => $argazkiak,        // json (array cast)
                        'argazki_nagusia'  => $argazkiNagusia,   // para la card
                    ]
                );
            });
        }

        return back()->with('success', 'Eskaera eguneratua.');
    }

    public function create()
    {
        //user-a logeatuta ?
        if (!Auth::check()) 
        {
            return redirect()->route('home');
        }

        //logeatzea berifikatu
        $user = Auth::user();
        
        return Inertia::render('saldu', [ 
        'erabiltzailea' => [
            'emaila' => Auth::user()->email,
            'izenAbizena' => Auth::user()->name,
            'telefonoa' => Auth::user()->telefono ?? '+34 600 000 000',
            ]
        ]);

    }


    //Behin formularioa bete ondoren, bidaliko den informazioa
    public function store(SalduRequest $request)
    {
        $data = $request->validated();

        //Argazkiak
        $argazkiPaths = [];
        if ($request->hasFile('argazkiak')) {
            foreach ($request->file('argazkiak') as $argazkia) {
                // Tamaina eta mota balidatu
                if ($argazkia->getSize() > 5 * 1024 * 1024 || !in_array($argazkia->getMimeType(), ['image/jpeg', 'image/png', 'image/webp'])) {
                    throw ValidationException::withMessages(['argazkiak' => 'Argazkiak 5MB baino txikiagoak eta JPG/PNG/WEBP bakarrik.']);
                }
                
                $path = $argazkia->store('peritutza_argazkiak', 'public');
                $argazkiPaths[] = $path;
            }
        }

        
        // hemen mapatu form-eko eremuak taulara
        PeritutzaEskaera::create([
            'erab_id'          => Auth::id(),
            'langile_id'       => null,           // Nork peritatu du?
            'desguazatzeko'    => false,          // desguazatzeko edo saltzeko?
            'kotxe_matrikula'  => null,           // NULL - PERITU GABE oraindik
            'matrikula'        => $data['matrikula'],
            'marka'            => $data['marka'],
            'modelo'           => $data['modelo'],
            'urtea'            => $data['urtea'],
            'egoera_kotxe'     => $data['egoera'],
            'desk'             => $data['deskribapena'] ?? 'Deskribapenik ez.',
            'argazkiak'        => json_encode($argazkiPaths),
            'prezioa'          => null,           // Perituak jarriko du
            'eskaera_egoera'   => 'zain',         // Hasierako egoera: zain
            'produktu_id'      => null,
        ]);

        // argazkien kudeaketa
        


        return back()->with('Ongi!', 'Eskaera ongi bidalia.');
    }


    /*public function index()
    {
        $user = auth()->user();
        
        $eskaerak = PeritutzaEskaera::where('erab_id', $user->id)
            ->where('eskaera_egoera', 'zain')  
            ->with(['kotxea'])
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('dashboard', ['eskaerak' => $eskaerak]);
    }*/


    public function destroy(PeritutzaEskaera $eskaera)
    {
        //$this->authorize('delete', $eskaera); 
        
        $eskaera->delete();
        
        return redirect()->route('eskaerak.index')
                    ->with('success', 'Eskaera ezabatu da arrakastaz!');
    }

}
