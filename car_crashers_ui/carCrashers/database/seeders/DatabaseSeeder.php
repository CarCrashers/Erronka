<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            DesguazeaSeeder::class,
            KotxeaSeeder::class,
            PiezaSeeder::class,
            ProduktuSeeder::class,
            SaskiaSeeder::class,
            SaskiaItemSeeder::class,
            ErosketaSeeder::class,
            ErosketaItemSeeder::class,
            PeritutzaEskaeraseeder::class,
            SalerosketaHistorikoSeeder::class,
            ProduktuArgazkiSeeder::class,
        ]);
    }
}
