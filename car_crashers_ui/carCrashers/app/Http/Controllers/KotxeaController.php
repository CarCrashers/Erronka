<?php

namespace App\Http\Controllers;

use App\Models\Kotxea;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KotxeaController extends Controller
{
    // Mostrar todos los kotxeak
    public function index()
    {
        return Inertia::render('kotxeak', [
            'kotxeak' => Kotxea::latest()->get(),
        ]);
    }

    // Crear nuevo kotxea
    public function store(Request $request)
    {
        $validated = $request->validate([
            'matrikula' => 'required|string|unique:kotxeak,matrikula',
            'marka' => 'required|string',
            'modeloa' => 'required|string',
            'urtea' => 'required|integer|min:1900|max:' . date('Y'),
        ]);

        Kotxea::create($validated);

        return redirect()->route('kotxeak')->with('success', 'Kotxea sortu da ondo.');
    }

    // Actualizar kotxea
    public function update(Request $request, $matrikula)
    {
        $kotxea = Kotxea::findOrFail($matrikula);

        $validated = $request->validate([
            'marka' => 'required|string',
            'modeloa' => 'required|string',
            'urtea' => 'required|integer|min:1900|max:' . date('Y'),
        ]);

        $kotxea->update($validated);

        return redirect()->route('kotxeak')->with('success', 'Kotxea eguneratu da ondo.');
    }

    // Eliminar kotxea
    public function destroy($matrikula)
    {
        $kotxea = Kotxea::findOrFail($matrikula);
        $kotxea->delete();

        return redirect()->route('kotxeak')->with('success', 'Kotxea ezabatu da ondo.');
    }
}
