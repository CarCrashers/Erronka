<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('peritutza_eskaerak', function (Blueprint $table) {
            $table->id();
            $table->foreignId('erab_id')->constrained('users');
            $table->foreignId('langile_id')->nullable()->constrained('langileak');
            $table->boolean('desguazatzeko');           // true = desguazatu
            $table->string('matrikula');
            $table->string('marka');
            $table->string('modelo');
            $table->integer('urtea');
            $table->text('egoera_kotxe')->nullable();
            $table->text('desk')->nullable();
            $table->decimal('prezioa', 10, 2)->nullable();
            $table->string('eskaera_egoera')->default('zain');
            $table->string('kotxe_matrikula')->nullable();
            $table->foreignId('produktu_id')->nullable()->constrained('produktuak');
            $table->timestamps();

            $table->foreign('kotxe_matrikula')
                ->references('matrikula')->on('kotxeak')
                ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('peritutza_eskaerak');
    }
};
