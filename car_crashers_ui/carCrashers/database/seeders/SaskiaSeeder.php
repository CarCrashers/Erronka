<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Saskia;

class SaskiaSeeder extends Seeder
{
    public function run(): void
    {
        // Cestas activas para 5 clientes (user_ids 6..20, clientes empiezan en 6)
        $saskiak = [
            ['erab_id' => 6],
            ['erab_id' => 7],
            ['erab_id' => 8],
            ['erab_id' => 9],
            ['erab_id' => 10],
        ];

        foreach ($saskiak as $s) {
            Saskia::create($s);
        }
    }
}
