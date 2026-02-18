<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pieza;

class PiezaSeeder extends Seeder
{
    public function run(): void
    {
        // Piezas desmontadas de coches con estado nahikoa/ongi
        $piezak = [
            // De 4321ABC (VW Golf)
            ['zatia' => 'Motor complet', 'matrikula' => '4321ABC'],
            ['zatia' => 'Hesiaren aurreko ezkerrekoa', 'matrikula' => '4321ABC'],
            ['zatia' => 'Alternadorea', 'matrikula' => '4321ABC'],
            ['zatia' => 'Turboa', 'matrikula' => '4321ABC'],

            // De 8765BCD (Seat Ibiza)
            ['zatia' => 'Tapa portamaletas', 'matrikula' => '8765BCD'],
            ['zatia' => 'Paragolpes trasero', 'matrikula' => '8765BCD'],
            ['zatia' => 'Espejo retrovisor derecho', 'matrikula' => '8765BCD'],

            // De 3344DEF (Renault Megane)
            ['zatia' => 'Transmisio automatikoa', 'matrikula' => '3344DEF'],
            ['zatia' => 'Radiadorea', 'matrikula' => '3344DEF'],
            ['zatia' => 'Parabrisas', 'matrikula' => '3344DEF'],

            // De 9900GHI (Opel Astra)
            ['zatia' => 'Suspensio aurreko eskuina', 'matrikula' => '9900GHI'],
            ['zatia' => 'ABS modulua', 'matrikula' => '9900GHI'],
            ['zatia' => 'Erregai ponpa', 'matrikula' => '9900GHI'],

            // De 9012PQR (Citroen C4)
            ['zatia' => 'Puerta delantera izquierda', 'matrikula' => '9012PQR'],
            ['zatia' => 'Motor de arranque', 'matrikula' => '9012PQR'],
            ['zatia' => 'Amortiguador trasero izquierdo', 'matrikula' => '9012PQR'],

            // De 1234QRS (Fiat Punto)
            ['zatia' => 'Asiento conductor', 'matrikula' => '1234QRS'],
            ['zatia' => 'Volante airbag', 'matrikula' => '1234QRS'],
            ['zatia' => 'Caja de cambios', 'matrikula' => '1234QRS'],
            ['zatia' => 'Cuadro de instrumentos', 'matrikula' => '1234QRS'],

            // De 6677JKL (Mercedes Clase C)
            ['zatia' => 'Faro delantero derecho LED', 'matrikula' => '6677JKL'],
            ['zatia' => 'Unidad de control motor ECU', 'matrikula' => '6677JKL'],

            // De 3045MNO (Hyundai i30)
            ['zatia' => 'Embrague completo', 'matrikula' => '3045MNO'],
            ['zatia' => 'Escape completo', 'matrikula' => '3045MNO'],
        ];

        foreach ($piezak as $p) {
            Pieza::create($p);
        }
    }
}
