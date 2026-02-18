<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Produktua;

class ProduktuSeeder extends Seeder
{
    public function run(): void
    {
        // === KOTXEAK SALGAI (matrikula, pieza_id=null) ===
        $kotxeSalgai = [
            ['matrikula'=>'1122CDE','egoera'=>'salgai','prezioa'=>12500.00,'deskribapena'=>'Ford Focus gasolina 2018, 95.000km, estado excelente, revisiones al día.'],
            ['matrikula'=>'5566EFG','egoera'=>'salgai','prezioa'=>19800.00,'deskribapena'=>'Toyota Corolla híbrido 2019, 60.000km, garantía 2 años.'],
            ['matrikula'=>'7788FGH','egoera'=>'salgai','prezioa'=>8900.00, 'deskribapena'=>'Peugeot 308 diésel 2014, 145.000km, ITV reciente.'],
            ['matrikula'=>'2233HIJ','egoera'=>'salgai','prezioa'=>16500.00,'deskribapena'=>'BMW Serie 3 320d 2016, 110.000km, full equip.'],
            ['matrikula'=>'4455IJK','egoera'=>'salgai','prezioa'=>21000.00,'deskribapena'=>'Audi A4 2.0 TDI 2017, 98.000km, como nuevo.'],
            ['matrikula'=>'8899KLM','egoera'=>'salgai','prezioa'=>17500.00,'deskribapena'=>'Honda Civic 2020, 35.000km, garantía vigente.'],
            ['matrikula'=>'1023LMN','egoera'=>'salgai','prezioa'=>14200.00,'deskribapena'=>'Nissan Qashqai SUV 2018, 88.000km, muy completo.'],
            ['matrikula'=>'5067NOP','egoera'=>'salgai','prezioa'=>18900.00,'deskribapena'=>'Kia Ceed 2021, 28.000km, prácticamente nuevo.'],
            ['matrikula'=>'7089OPQ','egoera'=>'salgai','prezioa'=>10500.00,'deskribapena'=>'Skoda Octavia TDI 2015, 155.000km, espacioso.'],
            ['matrikula'=>'3456RST','egoera'=>'salgai','prezioa'=>7200.00, 'deskribapena'=>'Dacia Logan diésel 2017, 105.000km, muy económico.'],
            ['matrikula'=>'5678STU','egoera'=>'salgai','prezioa'=>11800.00,'deskribapena'=>'Mitsubishi ASX 4x4 2014, 148.000km, todoterreno.'],
            ['matrikula'=>'7890TUV','egoera'=>'salgai','prezioa'=>22500.00,'deskribapena'=>'Mazda CX-5 SKYACTIV-D 2019, 72.000km, alta eficiencia.'],
            ['matrikula'=>'4321ABC','egoera'=>'salgai','prezioa'=>6500.00, 'deskribapena'=>'VW Golf TDI 2015, 120.000km, motor diésel en buen estado.'],
            ['matrikula'=>'6677JKL','egoera'=>'salgai','prezioa'=>13200.00,'deskribapena'=>'Mercedes Clase C diésel 2013, interior impecable.'],
        ];

        foreach ($kotxeSalgai as $k) {
            Produktua::create(array_merge($k, ['pieza_id' => null]));
        }

        // === PIEZAK SALGAI (matrikula=null, pieza_id) ===
        $piezaSalgai = [
            ['pieza_id'=>1, 'egoera'=>'salgai','prezioa'=>850.00, 'deskribapena'=>'Motor complet VW Golf TDI, funcionando.'],
            ['pieza_id'=>2, 'egoera'=>'salgai','prezioa'=>120.00, 'deskribapena'=>'Aleta delantera izquierda VW Golf.'],
            ['pieza_id'=>3, 'egoera'=>'salgai','prezioa'=>95.00,  'deskribapena'=>'Alternador VW Golf, revisado.'],
            ['pieza_id'=>4, 'egoera'=>'salgai','prezioa'=>380.00, 'deskribapena'=>'Turbo VW Golf 2015, garantía 3 meses.'],
            ['pieza_id'=>5, 'egoera'=>'salgai','prezioa'=>85.00,  'deskribapena'=>'Tapa maletero Seat Ibiza.'],
            ['pieza_id'=>6, 'egoera'=>'salgai','prezioa'=>110.00, 'deskribapena'=>'Paragolpes trasero Seat Ibiza.'],
            ['pieza_id'=>7, 'egoera'=>'salgai','prezioa'=>45.00,  'deskribapena'=>'Espejo retrovisor derecho Seat Ibiza.'],
            ['pieza_id'=>8, 'egoera'=>'salgai','prezioa'=>650.00, 'deskribapena'=>'Transmisión automática Renault Megane.'],
            ['pieza_id'=>9, 'egoera'=>'salgai','prezioa'=>130.00, 'deskribapena'=>'Radiador Renault Megane, sin fugas.'],
            ['pieza_id'=>10,'egoera'=>'salgai','prezioa'=>180.00, 'deskribapena'=>'Parabrisas Renault Megane, sin fisuras.'],
            ['pieza_id'=>11,'egoera'=>'salgai','prezioa'=>200.00, 'deskribapena'=>'Suspensión delantera derecha Opel Astra.'],
            ['pieza_id'=>12,'egoera'=>'salgai','prezioa'=>320.00, 'deskribapena'=>'Módulo ABS Opel Astra.'],
            ['pieza_id'=>13,'egoera'=>'salgai','prezioa'=>95.00,  'deskribapena'=>'Bomba de combustible Opel Astra.'],
            ['pieza_id'=>14,'egoera'=>'salgai','prezioa'=>140.00, 'deskribapena'=>'Puerta delantera izquierda Citroën C4.'],
            ['pieza_id'=>15,'egoera'=>'salgai','prezioa'=>75.00,  'deskribapena'=>'Motor de arranque Citroën C4.'],
            ['pieza_id'=>16,'egoera'=>'salgai','prezioa'=>90.00,  'deskribapena'=>'Amortiguador trasero izquierdo Citroën C4.'],
            ['pieza_id'=>17,'egoera'=>'salgai','prezioa'=>150.00, 'deskribapena'=>'Asiento conductor Fiat Punto.'],
            ['pieza_id'=>18,'egoera'=>'salgai','prezioa'=>220.00, 'deskribapena'=>'Volante con airbag Fiat Punto.'],
            ['pieza_id'=>19,'egoera'=>'salgai','prezioa'=>480.00, 'deskribapena'=>'Caja de cambios Fiat Punto, completa.'],
            ['pieza_id'=>20,'egoera'=>'salgai','prezioa'=>160.00, 'deskribapena'=>'Cuadro de instrumentos Fiat Punto.'],
            ['pieza_id'=>21,'egoera'=>'salgai','prezioa'=>420.00, 'deskribapena'=>'Faro delantero derecho LED Mercedes Clase C.'],
            ['pieza_id'=>22,'egoera'=>'salgai','prezioa'=>590.00, 'deskribapena'=>'ECU motor Mercedes Clase C, programada.'],
            ['pieza_id'=>23,'egoera'=>'salgai','prezioa'=>310.00, 'deskribapena'=>'Kit embrague completo Hyundai i30.'],
        ];

        foreach ($piezaSalgai as $p) {
            Produktua::create(array_merge($p, ['matrikula' => null]));
        }
    }
}
