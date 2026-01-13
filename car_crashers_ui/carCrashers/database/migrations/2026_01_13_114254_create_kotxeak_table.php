<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('kotxeak', function (Blueprint $table) {
            $table->string('matrikula')->primary();
            $table->string('marka');
            $table->string('modeloa');
            $table->integer('urtea');
            $table->foreignId('desguazea_id')->nullable()->constrained('desguazeak');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kotxeak');
    }
};