<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Produktua;

class ProduktuArgazkiSeeder extends Seeder
{
    public function run(): void
    {
        // Ford Focus 2018 — matrikula 1122CDE — produktu_id 1
        Produktua::where('matrikula', '1122CDE')->update([
            'argazkiak'       => json_encode([
                'storage/peritutza_argazkiak/Ford1.jpeg',
                'storage/peritutza_argazkiak/Ford2.jpeg',
            ]),
            'argazki_nagusia' => 'storage/peritutza_argazkiak/Ford1.jpeg',
        ]);

        // Toyota Corolla 2019 — matrikula 5566EFG — produktu_id 2
        Produktua::where('matrikula', '5566EFG')->update([
            'argazkiak'       => json_encode([
                'storage/peritutza_argazkiak/Toy1.jpeg',
                'storage/peritutza_argazkiak/Toy2.jpeg',
            ]),
            'argazki_nagusia' => 'storage/peritutza_argazkiak/Toy1.jpeg',
        ]);

        // Peugeot 308 2014 — matrikula 7788FGH — produktu_id 3
        Produktua::where('matrikula', '7788FGH')->update([
            'argazkiak'       => json_encode([
                'storage/peritutza_argazkiak/Peu1.jpeg',
                'storage/peritutza_argazkiak/Peu2.jpeg',
            ]),
            'argazki_nagusia' => 'storage/peritutza_argazkiak/Peu1.jpeg',
        ]);

        // Bmw Serie 3 2016
        Produktua::where('matrikula','2233HIJ')->update([
             'argazkiak'       => json_encode([
                'storage/peritutza_argazkiak/Bmw1.jpeg',
                'storage/peritutza_argazkiak/Bmw2.jpeg',
            ]),
            'argazki_nagusia' => 'storage/peritutza_argazkiak/Bmw1.jpeg',
        ]);
    }
}
