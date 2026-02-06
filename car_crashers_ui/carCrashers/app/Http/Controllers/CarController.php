<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Produktua;
use App\Models\Kotxea;
use App\Models\Pieza;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function index() {
        // Carga todos los productos con relaciones (evita N+1)
        $produktuak = Produktua::with(['kotxea', 'pieza'])->get();

        // Variable con coches únicos (de productos o todos si prefieres)
        $kotxeak = Kotxea::whereIn('matrikula', $produktuak->pluck('matrikula'))
                         ->with(['piezak', 'produktuak'])
                         ->get();
        // O si quieres TODOS los coches: $kotxeak = Kotxea::with(['piezak', 'produktuak'])->get();

        // Variable con piezas únicas (de productos)
        $piezak = Pieza::whereIn('id', $produktuak->pluck('pieza_id'))
                       ->with(['kotxea', 'produktuak'])
                       ->get();
        // O si quieres TODAS las piezas: $piezak = Pieza::with(['kotxea', 'produktuak'])->get();

        return Inertia::render('erosi', [
            'kotxeak' => $kotxeak,
            'piezak' => $piezak
        ]);
    }

    public function show($id) {
        $produktua = Produktua::findOrFail($id);

        $antzekoKotxeak = Kotxea::get()->random(2);
        $antzekoPiezak = Pieza::get()->random(2);

        return Inertia::render('details', compact('produktua', 'antzekoKotxeak', 'antzekoPiezak'));
    }

    public function showKotxea($matrikula, $pieza_id) {
        
    }

    public function showPieza($matrikula, $pieza_id) {

    }
}
