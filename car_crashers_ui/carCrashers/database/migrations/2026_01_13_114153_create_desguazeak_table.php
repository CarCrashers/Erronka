<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('desguazeak', function (Blueprint $table) {
            $table->id();
            $table->string('izena');
            $table->string('helbidea');
            $table->string('telefonoa');
            $table->string('email');
            $table->foreignId('arduradun_id')->constrained('langileak');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('desguazeak');
    }
};
