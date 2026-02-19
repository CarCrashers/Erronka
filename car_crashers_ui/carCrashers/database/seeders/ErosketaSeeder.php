<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Erosketa;

class ErosketaSeeder extends Seeder
{
    public function run(): void
    {
        $erosketak = [
            ['erab_id'=>11,'data'=>'2025-10-05 10:30:00','guztira'=>13200.00],
            ['erab_id'=>12,'data'=>'2025-10-12 12:00:00','guztira'=>650.00],
            ['erab_id'=>13,'data'=>'2025-11-03 09:15:00','guztira'=>6500.00],
            ['erab_id'=>14,'data'=>'2025-11-18 16:45:00','guztira'=>470.00],
            ['erab_id'=>15,'data'=>'2025-12-01 11:00:00','guztira'=>320.00],
            ['erab_id'=>16,'data'=>'2025-12-10 14:30:00','guztira'=>150.00],
            ['erab_id'=>17,'data'=>'2026-01-07 10:00:00','guztira'=>310.00],
            ['erab_id'=>18,'data'=>'2026-01-15 13:20:00','guztira'=>85.00],
            ['erab_id'=>19,'data'=>'2026-02-02 09:45:00','guztira'=>590.00],
            ['erab_id'=>20,'data'=>'2026-02-10 17:00:00','guztira'=>480.00],
        ];

        foreach ($erosketak as $e) {
            Erosketa::create($e);
        }
    }
}
