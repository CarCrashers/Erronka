<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Desguazea;

class DesguazeaSeeder extends Seeder
{
    public function run(): void
    {
        $desguazeak = [
            [
                'izena'      => 'CarCrashers Donostia',
                'helbidea'   => 'Polígono Zuatzu 12, 20018 Donostia-San Sebastián',
                'telefonoa'  => '943111001',
                'email'      => 'donostia@carcrashers.eus',
                'arduradun_id' => null,
            ],
            [
                'izena'      => 'CarCrashers Bilbo',
                'helbidea'   => 'Polígono Industrial Txorierri 8, 48150 Sondika',
                'telefonoa'  => '944111002',
                'email'      => 'bilbo@carcrashers.eus',
                'arduradun_id' => null,
            ],
            [
                'izena'      => 'CarCrashers Gasteiz',
                'helbidea'   => 'Pol. Ind. Ali-Gobeo 3, 01013 Vitoria-Gasteiz',
                'telefonoa'  => '945111003',
                'email'      => 'gasteiz@carcrashers.eus',
                'arduradun_id' => null,
            ],
            [
                'izena'      => 'CarCrashers Iruña',
                'helbidea'   => 'Pol. Ind. Landaben C/A, 31012 Pamplona',
                'telefonoa'  => '948111004',
                'email'      => 'iruña@carcrashers.eus',
                'arduradun_id' => null,
            ],
        ];

        foreach ($desguazeak as $d) {
            Desguazea::create($d);
        }
    }
}
