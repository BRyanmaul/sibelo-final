<?php

namespace Database\Seeders;

use App\Models\Beasiswa;
use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BeasiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Beasiswa::factory(20)->create();

        // Beasiswa::factory()->create([
        //     'title' => 'Contoh Beasiswa',
        //     'nama_beasiswa' => 'admin1',
        //     'penyelenggara_beasiswa' => 1,
        //     'tanggal_mulai_b' => "",
        //     'tanggal_berakhir_b' => "",
        //     'syarat' => "",
        //     'poster' => "",      
        // ]);

        Beasiswa::factory()->create([
            'title' => ' Program Indonesa Pintar(PIP) & KIP Kuliah Merdeka',
            'nama_beasiswa' => 'KIP Kuliah Merdeka',
            'category_id' => 11,
            'slug' => 'kip-pip',
            'penyelenggara_beasiswa' => "Pemerintah dan Kampus Merdeka",
            'tanggal_mulai_b' => "2023-05-27",
            'tanggal_berakhir_b' => "2024-10-20",
            'body' => "Lalu apa saja Persyaratan Umum penerima KIP-K Merdeka? Pertama, penerima KIP-K Merdeka adalah lulusan Sekolah Menengah Atas (SMA), Sekolah Menengah Kejuruan (SMK), atau bentuk lain yang sederajat yang lulus pada tahun berjalan atau maksimal lulus 2 (dua) tahun sebelumnya. Kedua, telah lulus seleksi penerimaan mahasiswa baru melalui semua jalur masuk Perguruan Tinggi Akademik dan Perguruan Tinggi Vokasi dan diterima di PTN atau PTS pada Program Studi yang telah terakreditasi A, B, dan C dan tercatat pada sistem akreditasi nasional perguruan tinggi. Ketiga, memiliki potensi akademik baik tetapi memiliki keterbatasan ekonomi atau berasal dari keluarga miskin/rentan miskin dan/atau dengan pertimbangan khusus yang didukung bukti dokumen yang sah.

            Ada prioritas khusus untuk para penerima KIP-K Merdeka, yaitu:
            
            Kepemilikan program bantuan pendidikan nasional dalam bentuk Kartu Indonesia Pintar (KIP); atau
            Berasal dari keluarga peserta Program Keluarga Harapan (PKH); atau
            Keluarga pemegang Kartu Keluarga Sejahtera (KKS); atau
            Mahasiswa dari panti sosial/panti asuhan; atau
            Mahasiswa dari keluarga yang masuk pada Data Terpadu Kesejahteraan Sosial (DTKS).
            Jika calon penerima tidak memenuhi salah satu dari 5 kriteria di atas, maka dapat tetap mendaftar untuk mendapatkan KIP Kuliah Merdeka selama memenuhi persyaratan tidak mampu secara ekonomi sesuai dengan ketentuan, yang dibuktikan dengan pendapatan kotor gabungan orang tua/wali:
            
            Paling banyak Rp4.000.000,- (empat juta rupiah) setiap bulan; atau
            Pendapatan kotor gabungan orang tua/wali dibagi jumlah anggota keluarga paling banyak Rp750.000,-(tujuh ratus lima puluh ribu rupiah).
            Mekanisme pendaftaran dan informasi lebih lanjut mengenai KIP-K Merdeka bisa diakses langsung di laman https://kip-kuliah.kemdikbud.go.id/",
            'excerpt' => "Lalu apa saja Persyaratan Umum penerima KIP-K Merdeka? Pertama, penerima KIP-K Merdeka adalah lulusan Sekolah Menengah Atas (SMA), Sekolah Menengah Kejuruan (SMK), atau bentuk lain yang sederajat yang lulus pada tahun berjalan atau maksimal lulus 2 (dua) tahun sebelumnya. Kedua, telah lulus seleksi penerimaan mahasiswa baru melalui semua jalur masuk Perguruan Tinggi Akademik dan Perguruan Tinggi Vokasi dan diterima di PTN atau PTS pada Program Studi yang telah terakreditasi A, B, dan C dan tercatat pada sistem akreditasi nasional perguruan tinggi. Ketiga, memiliki potensi akademik baik tetapi memiliki keterbatasan ekonomi atau berasal da"
            // 'poster' => "",
        ]);

        Beasiswa::factory()->create([
            'title' => 'Dibuka!, Djarum Beasiswa Plus Tahun 2019/2020',
            'nama_beasiswa' => 'Djarum Beasiswa Plus',
            'category_id' => 11,
            'slug' => 'djarum-beasiswa-plus',
            'penyelenggara_beasiswa' => "Djarum",
            'tanggal_mulai_b' => "2023-07-17",
            'tanggal_berakhir_b' => "2025-05-12",
            'body' => "Syarat dan ketentuan :
                Pendaftaran yang bisa melakukan regsitrasi adalah mahasiswa/i yang ada di seluruh Indonesia
                Pendaftar adanya mahasiswa yang menempuh pendidikan S1 ataupun D4 dari kampus Negri ataupun Swasta
                Setiap peserta yang mendaftar dalam Djarum Beasiswa Plus ini haruslah aktif dalam melakukan organisasi, baik di dalam kampus at            
                aupun organisasi di luar kampus
                Pendaftar yang bisa melakukan regsitrasi juga haruslah memiliki IPK minimalnya adalah 3.00
                Mahasiswa/i yang bisa mendaftar tentusa tidak menerima beasiswa dari pihak lainnya
                Pendaftaran dibuka pada saat postingan ini sampai dengan batas akhirnya sampai dengan tanggal 20 Mei tahun 2019
                Setiap peserta haruslah mengisi formulir pendaftaran dan melengkapi syarat dan ketentuan yang berlaku
                Oh iya alamat link untuk melakukan regsitrasi dalam pemberian beasiswa ini bisa kalian klik disini
                Untuk kalian yang hobi ikutan acara, baik beasiswa, seminar, ataupun lomba di tahun 2019 bisa juga klik disini
                Keputusan untuk yang lolos dan berhak mendapatkan beasiswa ini sendiri tidak dapat dianggu gugat",
            'excerpt' => "Syarat dan ketentuan :
            Pendaftaran yang bisa melakukan regsitrasi adalah mahasiswa/i yang ada di seluruh Indonesia
            Pendaftar adanya mahasiswa yang menempuh pendidikan S1 ataupun D4 dari kampus Negri ataupun Swasta
            Setiap peserta yang mendaftar dalam Djarum Beasiswa Plus ini haruslah aktif dalam melakukan organisasi, baik di dalam kampus at            
            aupun organisasi di luar kampus"
            // 'poster' => "",
        ]);
    }
}