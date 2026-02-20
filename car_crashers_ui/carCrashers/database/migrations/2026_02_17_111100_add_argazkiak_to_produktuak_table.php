<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('produktuak', function (Blueprint $table) 
        {
            $table->json('argazkiak')->nullable()->after('deskribapena');
            $table->string('argazki_nagusia')->nullable()->after('argazkiak');
        });
    }

    public function down(): void
    {
        Schema::table('produktuak', function (Blueprint $table) {
            $table->dropColumn(['argazkiak', 'argazki_nagusia']);
        });
    }
};
