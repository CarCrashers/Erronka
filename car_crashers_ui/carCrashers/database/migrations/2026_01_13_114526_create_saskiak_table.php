<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('saskiak', function (Blueprint $table) {
            $table->id();
            $table->foreignId('erab_id')->constrained('users');
            $table->timestamps(); // created_at already here
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('saskiak');
    }
};
