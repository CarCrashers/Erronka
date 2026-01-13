<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('salerosketa_historikoak', function (Blueprint $table) {
            $table->id();
            $table->string('mota'); // erosketa/salmenta
            $table->decimal('prezioa', 10, 2);
            $table->dateTime('data');
            $table->foreignId('erabiltzaile_id')->constrained('users');
            $table->foreignId('produktu_id')->constrained('produktuak');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('salerosketa_historikoak');
    }
};
