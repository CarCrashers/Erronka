<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('erabiltzaileak', function (Blueprint $table) {
            $table->id();                                  // ID
            $table->string('izena');               // izena
            $table->string('pasahitza');           // password hash
            $table->string('mota');                // admin, langile...
            $table->string('telefono')->nullable();
            $table->string('korreoa')->unique();   // email
            $table->unsignedBigInteger('zuzendari_id')->nullable(); // FK pendiente
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('erabiltzaileak');
    }
};
