<?php

namespace App\Http\Controllers;

use App\Models\Pieza;
use App\Models\Kotxea;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PiezaController extends Controller
{
    // Mostrar todas las piezas
    public function index()
    {
        return Inertia::render('Piezak', [
            'piezak' => Pieza::latest()->get(),
            'kotxeak' => Kotxea::all(),
        ]);
    }

    // Crear nueva pieza
    public function store(Request $request)
    {
        $validated = $request->validate([
            'zatia' => 'required|string',
            'matrikula' => 'required|string|exists:kotxeak,matrikula',
        ]);

        Pieza::create($validated);

        return redirect()->route('piezak')->with('success', 'Pieza sortu da ondo.');
    }

    // Actualizar pieza
    public function update(Request $request, $id)
    {
        $pieza = Pieza::findOrFail($id);

        $validated = $request->validate([
            'zatia' => 'required|string',
            'matrikula' => 'required|string|exists:kotxeak,matrikula',
        ]);

        $pieza->update($validated);

        return redirect()->route('piezak')->with('success', 'Pieza eguneratu da ondo.');
    }

    // Eliminar pieza
    public function destroy($id)
    {
        $pieza = Pieza::findOrFail($id);
        $pieza->delete();

        return redirect()->route('piezak')->with('success', 'Pieza ezabatu da ondo.');
    }
}
