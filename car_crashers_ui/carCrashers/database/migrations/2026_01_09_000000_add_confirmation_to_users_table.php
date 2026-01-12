<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (! Schema::hasColumn('users', 'confirmed')) {
                $table->boolean('confirmed')->default(false)->after('email');
            }

            if (! Schema::hasColumn('users', 'confirmation_code')) {
                $table->string('confirmation_code')->nullable()->after('confirmed');
            }
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'confirmation_code')) {
                $table->dropColumn('confirmation_code');
            }

            if (Schema::hasColumn('users', 'confirmed')) {
                $table->dropColumn('confirmed');
            }
        });
    }
};
