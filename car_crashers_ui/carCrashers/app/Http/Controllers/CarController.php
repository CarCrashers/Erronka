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
        $kotxeak = Kotxea::with(['piezak', 'produktuak'])->get();
        $piezak = Pieza::with(['kotxea', 'produktuak'])->get();

        return Inertia::render('erosi', [
            'kotxeak' => $kotxeak,
            'piezak'  => $piezak,
        ]);
    }
}
