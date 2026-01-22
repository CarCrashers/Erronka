<?php

use App\Http\Requests\SalduRequest;
use App\Models\PeritutzaEskaera;

class PeritutzaEskaeraController extends Controller
{

    


    public function store(SalduRequest $request)
    {
        $data = $request->validated();

        // hemen mapatu form-eko eremuak taulara
        PeritutzaEskaera::create([
            'erab_id'       => auth()->id(),
            'desguazatzeko' => $data['options-outlined'],  // bool
            'matrikula'     => $data['matrikula'],
            'marka'         => $data['marka'],
            'modelo'        => $data['modelo'],
            'urtea'         => $data['urtea'],
            'egoera_kotxe'  => $data['egoera'],
            'desk'          => $data['deskribapena'] ?? null,
            // gainerako eremuak zure logikaren arabera


        ]);

        // argazkien kudeaketa aparte (Storage, erlazio taula, etab.)

        return back()->with('success', 'Eskaera ongi bidalia.');
    }



}
