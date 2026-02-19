<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Langile;
use App\Models\User;

class LangileSeeder extends Seeder
{
    public function run(): void
    {
        // Langileak users tienen IDs 2,3,4,5 (el 1 es admin)
        $langileDatuak = [
            ['izena' => 'Iker Etxeberria', 'rola' => 'peritatzailea',   'telefono' => '943000002', 'erabiltzaile_id' => 2],
            ['izena' => 'Miren Agirre',    'rola' => 'mekanikaria',     'telefono' => '943000003', 'erabiltzaile_id' => 3],
            ['izena' => 'Josu Zubiaurre',  'rola' => 'peritatzailea',   'telefono' => '943000004', 'erabiltzaile_id' => 4],
            ['izena' => 'Amaia Lazkano',   'rola' => 'administrazioa',  'telefono' => '943000005', 'erabiltzaile_id' => 5],
        ];

        foreach ($langileDatuak as $d) {
            Langile::create($d);
        }
    }
}
