<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SalerosketaHistorikoa;

class SalerosketaHistorikoSeeder extends Seeder
{
    public function run(): void
    {
        $historikoa = [
            // Erosketa historikoak
            ['mota'=>'erosketa','prezioa'=>13200.00,'data'=>'2025-10-05 10:30:00','erabiltzaile_id'=>11,'produktu_id'=>14],
            ['mota'=>'erosketa','prezioa'=>650.00,  'data'=>'2025-10-12 12:00:00','erabiltzaile_id'=>12,'produktu_id'=>22],
            ['mota'=>'erosketa','prezioa'=>6500.00, 'data'=>'2025-11-03 09:15:00','erabiltzaile_id'=>13,'produktu_id'=>13],
            ['mota'=>'erosketa','prezioa'=>380.00,  'data'=>'2025-11-18 16:45:00','erabiltzaile_id'=>14,'produktu_id'=>18],
            ['mota'=>'erosketa','prezioa'=>90.00,   'data'=>'2025-11-18 16:45:00','erabiltzaile_id'=>14,'produktu_id'=>21],
            ['mota'=>'erosketa','prezioa'=>320.00,  'data'=>'2025-12-01 11:00:00','erabiltzaile_id'=>15,'produktu_id'=>26],
            ['mota'=>'erosketa','prezioa'=>150.00,  'data'=>'2025-12-10 14:30:00','erabiltzaile_id'=>16,'produktu_id'=>31],
            ['mota'=>'erosketa','prezioa'=>310.00,  'data'=>'2026-01-07 10:00:00','erabiltzaile_id'=>17,'produktu_id'=>37],
            ['mota'=>'erosketa','prezioa'=>85.00,   'data'=>'2026-01-15 13:20:00','erabiltzaile_id'=>18,'produktu_id'=>19],
            ['mota'=>'erosketa','prezioa'=>590.00,  'data'=>'2026-02-02 09:45:00','erabiltzaile_id'=>19,'produktu_id'=>36],
            ['mota'=>'erosketa','prezioa'=>480.00,  'data'=>'2026-02-10 17:00:00','erabiltzaile_id'=>20,'produktu_id'=>33],
            // Salmenta historikoak (bezeroaren ibilgailuak)
            ['mota'=>'salmenta','prezioa'=>6500.00, 'data'=>'2025-11-03 09:15:00','erabiltzaile_id'=>13,'produktu_id'=>13],
            ['mota'=>'salmenta','prezioa'=>13200.00,'data'=>'2025-10-05 10:30:00','erabiltzaile_id'=>11,'produktu_id'=>14],
        ];

        foreach ($historikoa as $h) {
            SalerosketaHistorikoa::create($h);
        }
    }
}
