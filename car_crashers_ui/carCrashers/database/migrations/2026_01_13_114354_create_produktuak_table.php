<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('produktuak', function (Blueprint $table) {
            $table->id();
            $table->string('matrikula')->nullable();    // FK kotxeak
            $table->foreignId('pieza_id')->nullable()->constrained('piezak');
            $table->string('egoera');                   // salgai, salduta...
            $table->text('deskribapena')->nullable();
            $table->decimal('prezioa', 10, 2);
            $table->timestamps();

            $table->foreign('matrikula')
                ->references('matrikula')->on('kotxeak')
                ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('produktuak');
    }
};

