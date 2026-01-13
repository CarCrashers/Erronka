<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('piezak', function (Blueprint $table) {
            $table->id();
            $table->string('zatia');
            $table->string('matrikula');
            $table->timestamps();

            $table->foreign('matrikula')
                ->references('matrikula')->on('kotxeak')
                ->cascadeOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('piezak');
    }
};
