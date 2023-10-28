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
        Schema::create('beasiswas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title')->nullable();
            $table->string('nama_beasiswa')->nullable();
            $table->foreignId('category_id')->nullable();
            $table->string('slug')->unique()->nullable();
            $table->string('penyelenggara_beasiswa')->nullable();
            $table->date('tanggal_mulai_b')->nullable();
            $table->date('tanggal_berakhir_b')->nullable();
            $table->longText('body')->nullable();
            $table->longText('excerpt')->nullable();
            $table->string('poster')->nullable();;
            $table->string('sertif')->nullable();;
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beasiswas');
    }
};