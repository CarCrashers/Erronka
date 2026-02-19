<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kotxea;

class KotxeaSeeder extends Seeder
{
    public function run(): void
    {
        $kotxeak = [
            // --- Donostia (desguazea_id=1) ---
            ['matrikula'=>'4321ABC','marka'=>'Volkswagen','modeloa'=>'Golf',    'urtea'=>2015,'kilometroak'=>120000,'egoera'=>'ongi',   'deskribapena'=>'Golf TDI, motor diésel en buen estado.',           'dokumentua'=>true, 'desguazea_id'=>1],
            ['matrikula'=>'8765BCD','marka'=>'Seat',      'modeloa'=>'Ibiza',   'urtea'=>2012,'kilometroak'=>180000,'egoera'=>'nahikoa','deskribapena'=>'Ibiza con algún golpe en la carrocería.',          'dokumentua'=>true, 'desguazea_id'=>1],
            ['matrikula'=>'1122CDE','marka'=>'Ford',      'modeloa'=>'Focus',   'urtea'=>2018,'kilometroak'=>95000, 'egoera'=>'bikaina','deskribapena'=>'Focus gasolina, pocos kilómetros.',               'dokumentua'=>true, 'desguazea_id'=>1],
            ['matrikula'=>'3344DEF','marka'=>'Renault',   'modeloa'=>'Megane',  'urtea'=>2010,'kilometroak'=>210000,'egoera'=>'nahikoa','deskribapena'=>'Megane diésel, motor funciona bien.',             'dokumentua'=>false,'desguazea_id'=>1],
            ['matrikula'=>'5566EFG','marka'=>'Toyota',    'modeloa'=>'Corolla', 'urtea'=>2019,'kilometroak'=>60000, 'egoera'=>'bikaina','deskribapena'=>'Corolla híbrido, excelente estado.',             'dokumentua'=>true, 'desguazea_id'=>1],
            ['matrikula'=>'7788FGH','marka'=>'Peugeot',   'modeloa'=>'308',     'urtea'=>2014,'kilometroak'=>145000,'egoera'=>'ongi',   'deskribapena'=>'308 diésel, mantenimiento al día.',              'dokumentua'=>true, 'desguazea_id'=>1],
            ['matrikula'=>'9900GHI','marka'=>'Opel',      'modeloa'=>'Astra',   'urtea'=>2011,'kilometroak'=>195000,'egoera'=>'nahikoa','deskribapena'=>'Astra con desgaste normal para su edad.',        'dokumentua'=>true, 'desguazea_id'=>1],
            // --- Bilbo (desguazea_id=2) ---
            ['matrikula'=>'2233HIJ','marka'=>'BMW',       'modeloa'=>'Serie 3', 'urtea'=>2016,'kilometroak'=>110000,'egoera'=>'ongi',   'deskribapena'=>'Serie 3 320d, equipamiento completo.',           'dokumentua'=>true, 'desguazea_id'=>2],
            ['matrikula'=>'4455IJK','marka'=>'Audi',      'modeloa'=>'A4',      'urtea'=>2017,'kilometroak'=>98000, 'egoera'=>'bikaina','deskribapena'=>'A4 2.0 TDI, como nuevo.',                       'dokumentua'=>true, 'desguazea_id'=>2],
            ['matrikula'=>'6677JKL','marka'=>'Mercedes',  'modeloa'=>'Clase C', 'urtea'=>2013,'kilometroak'=>165000,'egoera'=>'ongi',   'deskribapena'=>'Clase C diésel, interior impecable.',           'dokumentua'=>true, 'desguazea_id'=>2],
            ['matrikula'=>'8899KLM','marka'=>'Honda',     'modeloa'=>'Civic',   'urtea'=>2020,'kilometroak'=>35000, 'egoera'=>'bikaina','deskribapena'=>'Civic gasolina, garantía vigente.',             'dokumentua'=>true, 'desguazea_id'=>2],
            ['matrikula'=>'1023LMN','marka'=>'Nissan',    'modeloa'=>'Qashqai', 'urtea'=>2018,'kilometroak'=>88000, 'egoera'=>'ongi',   'deskribapena'=>'Qashqai SUV, 4x2, bien mantenido.',             'dokumentua'=>true, 'desguazea_id'=>2],
            // --- Gasteiz (desguazea_id=3) ---
            ['matrikula'=>'3045MNO','marka'=>'Hyundai',   'modeloa'=>'i30',     'urtea'=>2016,'kilometroak'=>130000,'egoera'=>'ongi',   'deskribapena'=>'i30 diésel, revisiones en concesionario.',      'dokumentua'=>true, 'desguazea_id'=>3],
            ['matrikula'=>'5067NOP','marka'=>'Kia',       'modeloa'=>'Ceed',    'urtea'=>2021,'kilometroak'=>28000, 'egoera'=>'bikaina','deskribapena'=>'Ceed gasolina, casi nuevo.',                    'dokumentua'=>true, 'desguazea_id'=>3],
            ['matrikula'=>'7089OPQ','marka'=>'Skoda',     'modeloa'=>'Octavia', 'urtea'=>2015,'kilometroak'=>155000,'egoera'=>'ongi',   'deskribapena'=>'Octavia TDI, espacioso y fiable.',             'dokumentua'=>true, 'desguazea_id'=>3],
            ['matrikula'=>'9012PQR','marka'=>'Citroen',   'modeloa'=>'C4',      'urtea'=>2013,'kilometroak'=>175000,'egoera'=>'nahikoa','deskribapena'=>'C4 con detalles de carrocería.',               'dokumentua'=>false,'desguazea_id'=>3],
            // --- Iruña (desguazea_id=4) ---
            ['matrikula'=>'1234QRS','marka'=>'Fiat',      'modeloa'=>'Punto',   'urtea'=>2009,'kilometroak'=>220000,'egoera'=>'nahikoa','deskribapena'=>'Punto con motor revisado.',                    'dokumentua'=>false,'desguazea_id'=>4],
            ['matrikula'=>'3456RST','marka'=>'Dacia',     'modeloa'=>'Logan',   'urtea'=>2017,'kilometroak'=>105000,'egoera'=>'ongi',   'deskribapena'=>'Logan diésel, muy económico.',                 'dokumentua'=>true, 'desguazea_id'=>4],
            ['matrikula'=>'5678STU','marka'=>'Mitsubishi','modeloa'=>'ASX',     'urtea'=>2014,'kilometroak'=>148000,'egoera'=>'ongi',   'deskribapena'=>'ASX SUV 4x4, todo terreno.',                   'dokumentua'=>true, 'desguazea_id'=>4],
            ['matrikula'=>'7890TUV','marka'=>'Mazda',     'modeloa'=>'CX-5',    'urtea'=>2019,'kilometroak'=>72000, 'egoera'=>'bikaina','deskribapena'=>'CX-5 SKYACTIV-D, eficiencia alta.',           'dokumentua'=>true, 'desguazea_id'=>4],
        ];

        foreach ($kotxeak as $k) {
            Kotxea::create($k);
        }
    }
}
