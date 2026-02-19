<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SaskiaItem;

class SaskiaItemSeeder extends Seeder
{
    public function run(): void
    {
        // Productos salgai: kotxeak IDs 1-12, piezak IDs 15-37 aprox
        // Referenciamos produktu_ids directamente (salgai):
        // Kotxeak salgai: produktu_id 1..12
        // Piezak salgai: 15,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37
        $itemak = [
            // Saskia 1 (erab_id=6): quiere un coche y una pieza
            ['saskia_id'=>1,'produktu_id'=>3, 'kopurua'=>1,'prezioa_unit'=>8900.00],
            ['saskia_id'=>1,'produktu_id'=>17,'kopurua'=>1,'prezioa_unit'=>95.00],

            // Saskia 2 (erab_id=7): dos piezas
            ['saskia_id'=>2,'produktu_id'=>19,'kopurua'=>1,'prezioa_unit'=>180.00],
            ['saskia_id'=>2,'produktu_id'=>20,'kopurua'=>2,'prezioa_unit'=>200.00],

            // Saskia 3 (erab_id=8): un coche premium
            ['saskia_id'=>3,'produktu_id'=>5, 'kopurua'=>1,'prezioa_unit'=>21000.00],

            // Saskia 4 (erab_id=9): piezas pequeñas
            ['saskia_id'=>4,'produktu_id'=>23,'kopurua'=>1,'prezioa_unit'=>45.00],
            ['saskia_id'=>4,'produktu_id'=>26,'kopurua'=>1,'prezioa_unit'=>95.00],

            // Saskia 5 (erab_id=10): coche + pieza
            ['saskia_id'=>5,'produktu_id'=>7, 'kopurua'=>1,'prezioa_unit'=>14200.00],
            ['saskia_id'=>5,'produktu_id'=>21,'kopurua'=>1,'prezioa_unit'=>420.00],
        ];

        foreach ($itemak as $i) {
            SaskiaItem::create($i);
        }
    }
}
