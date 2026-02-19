<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // --- Admin ---
        User::create([
            'name'              => 'Admin CarCrashers',
            'email'             => 'admin@carcrashers.eus',
            'email_verified_at' => now(),
            'password'          => Hash::make('Admin1234!'),
            'mota'              => 'admin',
            'telefono'          => '943000001',
            'confirmed'         => true,
        ]);

        // --- Users ---
        $users = [
            ['name' => 'Aitor Mendizabal',  'email' => 'aitor.mendi@gmail.com',   'telefono' => '622100001'],
            ['name' => 'Leire Iturriaga',   'email' => 'leire.iturri@gmail.com',  'telefono' => '622100002'],
            ['name' => 'Eneko Garmendia',   'email' => 'eneko.garm@hotmail.com',  'telefono' => '655200003'],
            ['name' => 'Nerea Azpeitia',    'email' => 'nerea.azp@gmail.com',     'telefono' => '622100004'],
            ['name' => 'Unai Kortabarria',  'email' => 'unai.korta@gmail.com',    'telefono' => '633100005'],
            ['name' => 'Olatz Beristain',   'email' => 'olatz.beri@outlook.com',  'telefono' => '688200006'],
            ['name' => 'Gorka Aranburu',    'email' => 'gorka.aran@gmail.com',    'telefono' => '622100007'],
            ['name' => 'Ane Urrutia',       'email' => 'ane.urrutia@gmail.com',   'telefono' => '677300008'],
            ['name' => 'Mikel Otegi',       'email' => 'mikel.otegi@gmail.com',   'telefono' => '655100009'],
            ['name' => 'Itsaso Elorza',     'email' => 'itsaso.elo@hotmail.com',  'telefono' => '622100010'],
            ['name' => 'Julen Bilbao',      'email' => 'julen.bilbao@gmail.com',  'telefono' => '644200011'],
            ['name' => 'Izaro Sarasola',    'email' => 'izaro.sara@gmail.com',    'telefono' => '633100012'],
            ['name' => 'Oier Olaetxea',     'email' => 'oier.olae@gmail.com',     'telefono' => '688200013'],
            ['name' => 'Alazne Aldazabal',  'email' => 'alazne.ald@outlook.com',  'telefono' => '655300014'],
            ['name' => 'Haritz Ibarguren',  'email' => 'haritz.ibar@gmail.com',   'telefono' => '622100015'],
            ['name' => 'Saioa Txurruka',    'email' => 'saioa.txurr@gmail.com',   'telefono' => '633200016'],
            ['name' => 'Ibai Zubizarreta',  'email' => 'ibai.zubi@gmail.com',     'telefono' => '644300017'],
            ['name' => 'Marta Villanueva',  'email' => 'marta.villa@hotmail.com', 'telefono' => '655400018'],
            ['name' => 'Jon Aizpurua',      'email' => 'jon.aizp@gmail.com',      'telefono' => '622100019'],
        ];

        foreach ($users as $u) {
            User::create(array_merge($u, [
                'email_verified_at' => now(),
                'password'          => Hash::make('User1234!'),
                'mota'              => 'user',
                'confirmed'         => true,
            ]));
        }
    }
}
