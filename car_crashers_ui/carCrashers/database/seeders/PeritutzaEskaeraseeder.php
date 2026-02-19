<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PeritutzaEskaera;

class PeritutzaEskaeraseeder extends Seeder
{
    public function run(): void
    {
        $eskaerak = [
            // --- ONARTUTA eta prozesatuta (kotxea stockean) ---
            [
                'erab_id'=>2,'langile_id'=>null,'desguazatzeko'=>false,
                'matrikula'=>'4321ABC','marka'=>'Volkswagen','modelo'=>'Golf','urtea'=>2015,
                'egoera_kotxe'=>'Motor en buen estado, carrocería con pequeños arañazos.',
                'desk'=>'Vendo mi Golf TDI, necesito el dinero.',
                'prezioa'=>6500.00,'eskaera_egoera'=>'onartua','kotxe_matrikula'=>'4321ABC','produktu_id'=>13,
            ],
            [
                'erab_id'=>3,'langile_id'=>null,'desguazatzeko'=>true,
                'matrikula'=>'8765BCD','marka'=>'Seat','modelo'=>'Ibiza','urtea'=>2012,
                'egoera_kotxe'=>'Carrocería dañada, motor funcional.',
                'desk'=>'Para desguace, tiene golpes importantes.',
                'prezioa'=>null,'eskaera_egoera'=>'onartua','kotxe_matrikula'=>'8765BCD','produktu_id'=>null,
            ],
            [
                'erab_id'=>4,'langile_id'=>null,'desguazatzeko'=>false,
                'matrikula'=>'6677JKL','marka'=>'Mercedes','modelo'=>'Clase C','urtea'=>2013,
                'egoera_kotxe'=>'Interior impecable, pequeño golpe en parachoques.',
                'desk'=>'Cambio a vehículo eléctrico.',
                'prezioa'=>13200.00,'eskaera_egoera'=>'onartua','kotxe_matrikula'=>'6677JKL','produktu_id'=>14,
            ],
            // --- ZAIN (pendientes) ---
            [
                'erab_id'=>5,'langile_id'=>null,'desguazatzeko'=>false,
                'matrikula'=>'3344DEF','marka'=>'Renault','modelo'=>'Megane','urtea'=>2010,
                'egoera_kotxe'=>'Motor diésel funcional, algunos problemas eléctricos.',
                'desk'=>'Quiero venderlo, ya tiene muchos km.',
                'prezioa'=>null,'eskaera_egoera'=>'zain','kotxe_matrikula'=>null,'produktu_id'=>null,
            ],
            [
                'erab_id'=>6,'langile_id'=>null,'desguazatzeko'=>true,
                'matrikula'=>'9900GHI','marka'=>'Opel','modelo'=>'Astra','urtea'=>2011,
                'egoera_kotxe'=>'Accidente frontal, airbags disparados.',
                'desk'=>'Para desguace tras accidente.',
                'prezioa'=>null,'eskaera_egoera'=>'zain','kotxe_matrikula'=>null,'produktu_id'=>null,
            ],
            [
                'erab_id'=>7,'langile_id'=>null,'desguazatzeko'=>false,
                'matrikula'=>'1122CDE','marka'=>'Ford','modelo'=>'Focus','urtea'=>2018,
                'egoera_kotxe'=>'Excelente estado general, sin golpes.',
                'desk'=>'Me voy al extranjero, necesito venderlo rápido.',
                'prezioa'=>null,'eskaera_egoera'=>'zain','kotxe_matrikula'=>null,'produktu_id'=>null,
            ],
            [
                'erab_id'=>8,'langile_id'=>null,'desguazatzeko'=>false,
                'matrikula'=>'5566EFG','marka'=>'Toyota','modelo'=>'Corolla','urtea'=>2019,
                'egoera_kotxe'=>'Híbrido en perfecto estado, batería recién revisada.',
                'desk'=>'Compro uno nuevo, vendo este.',
                'prezioa'=>null,'eskaera_egoera'=>'zain','kotxe_matrikula'=>null,'produktu_id'=>null,
            ],
            // --- UKATUTA ---
            [
                'erab_id'=>9,'langile_id'=>null,'desguazatzeko'=>false,
                'matrikula'=>'1234QRS','marka'=>'Fiat','modelo'=>'Punto','urtea'=>2009,
                'egoera_kotxe'=>'Motor gripado, carrocería muy oxidada.',
                'desk'=>'Intento venderlo pero sé que está muy deteriorado.',
                'prezioa'=>null,'eskaera_egoera'=>'ukatua','kotxe_matrikula'=>null,'produktu_id'=>null,
            ],
            [
                'erab_id'=>10,'langile_id'=>null,'desguazatzeko'=>false,
                'matrikula'=>'9012PQR','marka'=>'Citroen','modelo'=>'C4','urtea'=>2013,
                'egoera_kotxe'=>'Sin documentación, bastante oxidado.',
                'desk'=>'Lo heredé de un familiar, no tiene papeles.',
                'prezioa'=>null,'eskaera_egoera'=>'ukatua','kotxe_matrikula'=>null,'produktu_id'=>null,
            ],
        ];

        foreach ($eskaerak as $e) {
            PeritutzaEskaera::create($e);
        }
    }
}
