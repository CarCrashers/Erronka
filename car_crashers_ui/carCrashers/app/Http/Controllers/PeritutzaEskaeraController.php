<?php

use App\Http\Requests\SalduRequest;
use App\Models\PeritutzaEskaera;
use App\Http\Controllers\Controller;


class PeritutzaEskaeraController extends Controller
{

    public function store(SalduRequest $request)
    {
        $data = $request->validated();

        //Argazkiak
        $argazkiPaths = [];

        if ($request->hasFile('argazkiak'))
        {
            foreach ($request->file('argazkiak') as $argazkia)
            {
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
            'desk'             => $data['deskribapena'] ?? 'Deskribapenik ez.', // Default testua
            'prezioa'          => null,           // Perituak jarriko du
            'eskaera_egoera'   => 'zain',         // Hasierako egoera: zain
            'produktu_id'      => null,
        ]);

        // argazkien kudeaketa



        return back()->with('success', 'Eskaera ongi bidalia.');
    }



}
