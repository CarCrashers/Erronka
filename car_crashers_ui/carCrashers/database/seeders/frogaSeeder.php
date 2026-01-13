<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Langilea;
use App\Models\Desguazea;
use App\Models\Kotxea;
use App\Models\Pieza;
use App\Models\Produktua;
use App\Models\PeritutzaEskaera;
use App\Models\Saskia;
use App\Models\SaskiaItem;
use App\Models\Erosketa;
use App\Models\ErosketaItem;
use App\Models\SalerosketaHistorikoa;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class frogaSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Usuarios
        $admin = User::create([
            'name'     => 'Admin Proba',
            'email'    => 'admin@carcrashers.test',
            'password' => Hash::make('secret123'),
            'mota'     => 'admin',
            'telefono' => '600000000',
        ]);

        $user = User::create([
            'name'     => 'Bezero Proba',
            'email'    => 'user@carcrashers.test',
            'password' => Hash::make('secret123'),
            'mota'     => 'user',
            'telefono' => '600000001',
        ]);

        // 2. Langileak
        $zuzendari = Langilea::create([
            'izena'          => 'Zuzendari Nagusia',
            'rola'           => 'zuzendari',
            'telefono'       => '600000010',
            'erabiltzaile_id'=> $admin->id,
            'zuzendari_id'   => null,
        ]);

        $langile = Langilea::create([
            'izena'          => 'Langile Proba',
            'rola'           => 'peritu',
            'telefono'       => '600000011',
            'erabiltzaile_id'=> $admin->id,
            'zuzendari_id'   => $zuzendari->id,
        ]);

        // 3. Desguazea
        $desguazea = Desguazea::create([
            'izena'       => 'CarCrashers Desguazea',
            'helbidea'    => 'Poligonoa 1, Irun',
            'telefonoa'   => '943000000',
            'email'       => 'desguazea@carcrashers.test',
            'arduradun_id'=> $zuzendari->id,
        ]);

        // 4. Kotxeak
        $kotxe1 = Kotxea::create([
            'matrikula'    => '1234ABC',
            'marka'        => 'Opel',
            'modeloa'      => 'Corsa',
            'urtea'        => 2015,
            'desguazea_id' => $desguazea->id,
        ]);

        $kotxe2 = Kotxea::create([
            'matrikula'    => '5678DEF',
            'marka'        => 'Ford',
            'modeloa'      => 'Focus',
            'urtea'        => 2018,
            'desguazea_id' => $desguazea->id,
        ]);

        // 5. Piezak
        $pieza1 = Pieza::create([
            'zatia'    => 'Motorra',
            'matrikula'=> $kotxe1->matrikula,
        ]);

        $pieza2 = Pieza::create([
            'zatia'    => 'Aurreko Bumperra',
            'matrikula'=> $kotxe1->matrikula,
        ]);

        // 6. Produktuak
        $produktuaKotxeOsoa = Produktua::create([
            'matrikula'    => $kotxe2->matrikula,
            'pieza_id'     => null,
            'egoera'       => 'salgai',
            'deskribapena' => 'Ford Focus 2018, egoera onean.',
            'prezioa'      => 7500,
        ]);

        $produktuaPieza1 = Produktua::create([
            'matrikula'    => $kotxe1->matrikula,
            'pieza_id'     => $pieza1->id,
            'egoera'       => 'salgai',
            'deskribapena' => 'Opel Corsa motorra, km gutxirekin.',
            'prezioa'      => 1200,
        ]);

        $produktuaPieza2 = Produktua::create([
            'matrikula'    => $kotxe1->matrikula,
            'pieza_id'     => $pieza2->id,
            'egoera'       => 'salgai',
            'deskribapena' => 'Aurreko bumperra, zuria.',
            'prezioa'      => 250,
        ]);

        // 7. Peritutza eskaera (user -> saldu nahi du kotxea)
        $peritu = PeritutzaEskaera::create([
            'erab_id'        => $user->id,
            'langile_id'     => $langile->id,
            'desguazatzeko'  => false,
            'matrikula'      => '9999XYZ',
            'marka'          => 'Renault',
            'modelo'         => 'Clio',
            'urtea'          => 2012,
            'egoera_kotxe'   => 'Ibilgailuaren egoera ona, baina kolpe txikiak.',
            'desk'           => 'Bezeroak autoa saldu nahi du.',
            'prezioa'        => 3000,
            'eskaera_egoera' => 'zain',
            'kotxe_matrikula'=> null,
            'produktu_id'    => null,
        ]);

        // 8. Saskia eta itemak (user-ak produktuak saskian)
        $saskia = Saskia::create([
            'erab_id' => $user->id,
        ]);

        SaskiaItem::create([
            'saskia_id'    => $saskia->id,
            'produktu_id'  => $produktuaPieza1->id,
            'kopurua'      => 1,
            'prezioa_unit' => $produktuaPieza1->prezioa,
        ]);

        // 9. Erosketa eta itemak (user-ak pieza bat erosi du)
        $erosketa = Erosketa::create([
            'erab_id' => $user->id,
            'data'    => now(),
            'guztira'=> $produktuaPieza2->prezioa,
        ]);

        ErosketaItem::create([
            'erosket_id'   => $erosketa->id,
            'produktu_id'  => $produktuaPieza2->id,
            'kopurua'      => 1,
            'prezioa_unit' => $produktuaPieza2->prezioa,
        ]);

        // 10. Salerosketa historikoa
        SalerosketaHistorikoa::create([
            'mota'           => 'erosketa', // user-ek erosi
            'prezioa'        => $produktuaPieza2->prezioa,
            'data'           => now(),
            'erabiltzaile_id'=> $user->id,
            'produktu_id'    => $produktuaPieza2->id,
        ]);

        SalerosketaHistorikoa::create([
            'mota'           => 'salmenta', // enpresak autoa erosi dio bezeroari
            'prezioa'        => 2800,
            'data'           => now()->subDays(3),
            'erabiltzaile_id'=> $user->id,
            'produktu_id'    => $produktuaKotxeOsoa->id,
        ]);
    }
}
