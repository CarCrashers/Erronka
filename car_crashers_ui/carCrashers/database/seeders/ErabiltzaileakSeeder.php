<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ErabiltzaileakSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('erabiltzaileak')->insert([
            [
                'izena'        => 'Admin Proba',
                'pasahitza'    => Hash::make('secret123'), // contraseña
                'mota'         => 'admin',
                'telefono'     => '600000000',
                'korreoa'      => 'admin@carcrashers.test',
                'zuzendari_id' => null,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
        ]);
    }
}
