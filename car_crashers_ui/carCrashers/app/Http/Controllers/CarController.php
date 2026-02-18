<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Produktua;
use App\Models\Kotxea;
use App\Models\Pieza;

class CarController extends Controller
{
   public function index()
    {
        $kotxeak = Produktua::whereNull('pieza_id')
            ->where('egoera', 'salgai')
            ->with('kotxea.produktuak')
            ->get()
            ->pluck('kotxea')
            ->unique('matrikula')
            ->values();

        $piezak = Pieza::whereHas('produktuak', function ($q) {
                $q->where('egoera', 'salgai');
            })
            ->with(['produktuak' => function ($q) {
                $q->where('egoera', 'salgai');
            }])
            ->get();

        return Inertia::render('erosi', [
            'kotxeak' => $kotxeak,
            'piezak'  => $piezak,
        ]);
    }


    public function showKotxea($matrikula) {
        $produktua = Produktua::where('matrikula', $matrikula)->whereNull('pieza_id')->get();
        $kotxea = Kotxea::where('matrikula', $matrikula)->get();

        $antzekoKotxeak = Kotxea::with(['produktuak'])->where('matrikula', '!=', $matrikula)->get()->random(2);
        
        $antzekoPiezak = Pieza::with(['produktuak'])->where('matrikula', '!=', $matrikula)->get()->random(2);


        return Inertia::render('kotxeaDetails', compact('produktua', 'kotxea', 'antzekoKotxeak', 'antzekoPiezak'));
    }

    public function showPieza($matrikula, $pieza_id) {
        $produktua = Produktua::where('matrikula', $matrikula)->get();
        $pieza = Pieza::with('produktuak')->where('id', $pieza_id)->get();

        $antzekoKotxeak = Kotxea::with(['produktuak'])->where('matrikula', '!=', $matrikula)->get()->random(1);

        return Inertia::render('piezaDetails', compact('produktua', 'pieza', 'antzekoKotxeak'));
    }
}
