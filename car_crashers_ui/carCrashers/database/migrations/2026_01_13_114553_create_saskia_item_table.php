<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('saskia_itemak', function (Blueprint $table) {
            $table->id();
            $table->foreignId('saskia_id')->constrained('saskiak')->cascadeOnDelete();
            $table->foreignId('produktu_id')->constrained('produktuak');
            $table->integer('kopurua');
            $table->decimal('prezioa_unit', 10, 2);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('saskia_itemak');
    }
};