<?php

namespace App\Http\Controllers;

use App\Models\Kotxea;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class KotxeaController extends Controller
{
    // Mostrar todos los kotxeak
     public function index()
    {
        $kotxeak = Kotxea::latest()->get()->map(function ($k) {
            $paths = $k->argazkiak ?? [];

            // Por si viniera como JSON string
            if (is_string($paths)) {
                $paths = json_decode($paths, true) ?? [];
            }
            if (!is_array($paths)) $paths = [];

            $urls = collect($paths)
                ->filter(fn ($p) => is_string($p) && $p !== '')
                ->map(function ($p) {
                    // Si por error guardaste "/storage/..." o "storage/..."
                    $p = preg_replace('#^/storage/#', '', $p);
                    $p = preg_replace('#^storage/#', '', $p);

                    return Storage::disk('public')->url($p); // => "/storage/..."
                })
                ->values()
                ->all();

            return [
                ...$k->toArray(),
                'argazki_urls' => $urls,
            ];
        });

        return Inertia::render('kotxeak', [
            'kotxeak' => $kotxeak,
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
