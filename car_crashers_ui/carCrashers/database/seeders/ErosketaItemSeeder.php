<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ErosketaItem;

class ErosketaItemSeeder extends Seeder
{
    public function run(): void
    {
        // Productos salduta: kotxe IDs 13,14 => produktu_id 13,14
        // Piezas salduta: pieza_id 5,12,17 => produktu_id 19,26,31
        $itemak = [
            // Erosketa 1: Mercedes Clase C salduta (produktu_id=14)
            ['erosket_id'=>1,'produktu_id'=>14,'kopurua'=>1,'prezioa_unit'=>13200.00],

            // Erosketa 2: Transmisión Megane (produktu_id=22)
            ['erosket_id'=>2,'produktu_id'=>22,'kopurua'=>1,'prezioa_unit'=>650.00],

            // Erosketa 3: VW Golf salduta (produktu_id=13)
            ['erosket_id'=>3,'produktu_id'=>13,'kopurua'=>1,'prezioa_unit'=>6500.00],

            // Erosketa 4: Turbo VW (produktu_id=18) + Espejo Ibiza (produktu_id=21)
            ['erosket_id'=>4,'produktu_id'=>18,'kopurua'=>1,'prezioa_unit'=>380.00],
            ['erosket_id'=>4,'produktu_id'=>21,'kopurua'=>2,'prezioa_unit'=>45.00],

            // Erosketa 5: ABS Opel (produktu_id=26)
            ['erosket_id'=>5,'produktu_id'=>26,'kopurua'=>1,'prezioa_unit'=>320.00],

            // Erosketa 6: Asiento Fiat (produktu_id=31)
            ['erosket_id'=>6,'produktu_id'=>31,'kopurua'=>1,'prezioa_unit'=>150.00],

            // Erosketa 7: Kit embrague Hyundai (produktu_id=37)
            ['erosket_id'=>7,'produktu_id'=>37,'kopurua'=>1,'prezioa_unit'=>310.00],

            // Erosketa 8: Tapa maletero Ibiza (produktu_id=19)
            ['erosket_id'=>8,'produktu_id'=>19,'kopurua'=>1,'prezioa_unit'=>85.00],

            // Erosketa 9: ECU Mercedes (produktu_id=36)
            ['erosket_id'=>9,'produktu_id'=>36,'kopurua'=>1,'prezioa_unit'=>590.00],

            // Erosketa 10: Caja de cambios Fiat (produktu_id=33)
            ['erosket_id'=>10,'produktu_id'=>33,'kopurua'=>1,'prezioa_unit'=>480.00],
        ];

        foreach ($itemak as $i) {
            ErosketaItem::create($i);
        }
    }
}
