<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('peritutza_eskaerak', function (Blueprint $table) {
            $table->json('argazkiak')->nullable()->after('desk');
        });
    }

    public function down(): void
    {
        Schema::table('peritutza_eskaerak', function (Blueprint $table) {
            $table->dropColumn('argazkiak');
        });
    }
};
