<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('langileak', function (Blueprint $table) {
            $table->id();
            $table->string('izena');
            $table->string('rola');
            $table->string('telefono');
            $table->unsignedBigInteger('zuzendari_id')->nullable();
            $table->foreignId('erabiltzaile_id')->constrained('users');
            $table->timestamps();

            $table->foreign('zuzendari_id')
                ->references('id')->on('langileak')
                ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('langileak');
    }
};
