<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('kotxeak', function (Blueprint $table) {
            $table->bigInteger('kilometroak')->nullable()->after('urtea');
            $table->enum('egoera', ['bikaina', 'ongi', 'nahikoa'])->nullable()->after('kilometroak');
            $table->text('deskribapena')->nullable()->after('egoera');
            $table->boolean('dokumentua')->default(false)->after('deskribapena');
        });
    }

    public function down(): void
    {
        Schema::table('kotxeak', function (Blueprint $table) {
            $table->dropColumn(['kilometroak', 'egoera', 'deskribapena', 'dokumentua']);
        });
    }
};
