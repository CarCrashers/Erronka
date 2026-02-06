<?php

namespace App\Http\Controllers;

use App\Http\Requests\SalduRequest;
use App\Models\PeritutzaEskaera;
use Illuminate\Http\Request;  
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class PeritutzaEskaeraController extends Controller
{

    public function index()
    {
        return Inertia::render('peritutza', [
            'peritutza' => PeritutzaEskaera::latest()->get()
        ]);
    }

    public function update(Request $request, $id)
    {
        {/*$validated = $request->validate([
            'prezioa' => 'nullable|numeric',
            'eskaera_egc' => 'required|string',
            'desguazatze' => 'required|boolean',
        ]);

        $peritutza = PeritutzaEskaera::findOrFail($id);

        $peritutza->update($validated);

        return redirect()->back()->with('success', 'Eskaera ondo eguneratu da');*/}

        $peritutza = PeritutzaEskaera::findOrFail($id);
        $peritutza->prezioa = $request->prezioa;
        $peritutza->eskaera_egoera = $request->eskaera_egoera;
        $peritutza->desguazatzeko = $request->desguazatzeko ? 1 : 0; 

        $peritutza->save(); 
        return redirect()->back();
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
            'deskripzioa'      => $data['deskribapena'] ?? 'Deskribapenik ez.',
            'argazkiak'        => $argazkiPaths,
            'prezioa'          => null,           // Perituak jarriko du
            'eskaera_egoera'   => 'zain',         // Hasierako egoera: zain
            'produktu_id'      => null,
        ]);

        // argazkien kudeaketa



        return back()->with('Ongi!', 'Eskaera ongi bidalia.');
    }



}
