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
        Schema::create('catatans', function (Blueprint $table) {

            //Lomba
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id')->nullable();
            $table->string('mahasiswa')->references('name')->on('users')->nullable();
            $table->string('nama_lomba')->nullable();
            $table->string('jenis')->nullable();
            $table->string('penyelenggara_lomba')->nullable();
            $table->string('tingkat_kegiatan')->nullable();
            $table->date('tanggal_mulai_l')->nullable();
            $table->date('tanggal_berakhir_l')->nullable();
            $table->string('prestasi')->nullable();
            $table->string('dosen_pembimbing')->nullable();
            $table->string('sertif')->nullable();
            $table->string('bukti')->nullable();
            // $table->mediumblob('sertif');
            // $table->mediumblob('bukti');

            //Beasiswa
            $table->string('nama_beasiswa')->nullable();
            $table->string('penyelenggara_beasiswa')->nullable();
            $table->date('tanggal_mulai_b')->nullable();
            $table->date('tanggal_berakhir_b')->nullable();
            $table->string('poster')->nullable();;
            // $table->mediumblob('poster');

            //Validitas
            $table->boolean('validitas')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catatans');
    }
};