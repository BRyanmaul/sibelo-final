<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lombas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('title')->nullable();
            $table->string('nama_lomba')->nullable();
            $table->string('slug')->unique()->nullable();
            $table->foreignId('category_id')->nullable();
            $table->string('sertif')->nullable();
            $table->string('penyelenggara_lomba')->nullable();
            $table->string('tingkat')->nullable();
            $table->date('tanggal_mulai_l')->nullable();
            $table->date('tanggal_berakhir_l')->nullable();
            $table->longText('body')->nullable();
            $table->longText('excerpt')->nullable();
            $table->string('poster')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lombas');
    }
};