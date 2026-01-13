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
        DB::table('users')->insert([
            [
                'name' => 'Admin Proba',
                'email' => 'admin@carcrashers.test',
                'password' => Hash::make('secret123'),
                'mota' => 'admin',      
                'telefono' => '600000000',  
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);


    }
}
