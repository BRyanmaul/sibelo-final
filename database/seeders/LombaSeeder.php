<?php

namespace Database\Seeders;

use App\Models\Lomba;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LombaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data Random
        Lomba::factory(14)->create();


        Lomba::factory()->create([
            'title' => 'PEDOMAN(Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi(GEMASTIK) XV',
            'nama_lomba' => 'Lomba GEMASTIK Divisi 1 Pemrograman',
            'slug' => 'gemastikxv-pemrograman',
            'category_id' => 6,
            'sertif' => "Ada",
            'penyelenggara_lomba' => "Balai Pengembangan Talenta
            Indonesia (BPTI), Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
            'tingkat' => "Nasional",
            'tanggal_mulai_l' => "2023-05-07",
            'tanggal_berakhir_l' => "2023-07-12",
            // 'body' => "",
            'body' => "1. Deskripsi
            Lomba pemrograman menguji kemampuan dan nalar peserta dalam menyelesaikan
            program komputer untuk memecahkan permasalahan yang diberikan. Kriteria
            penilaian mencakup kecepatan penulisan program dan ketepatan/efisiensi dari
            program yang dibuat untuk setiap kasus permasalahan terkait.
            Saat pertandingan, peserta akan diberikan deskripsi-deskripsi sejumlah permasalahan
            dan dalam kurun waktu 3-5 jam peserta harus menyusun dan mengumpulkan
            sebanyak mungkin program yang dapat menjawab masing-masing permasalahan
            tersebut.
            Setiap program yang dibuat selain dapat menjawab dengan tepat kasus permasalahan
            yang diberikan, juga harus dapat dijalankan pada setiap kasus dalam waktu yang amat
            terbatas. Sehingga, selain peserta diadu dalam kecepatan penulisan program, peserta
            juga dituntut menemukan/menggunakan algoritma (dan struktur data) yang tepat dan
            efisien. Bahasa pemrograman yang digunakan antara lain: C, C++, dan Java. Materi
            soal yang diberikan pada babak penyisihan maupun babak final meliputi namun tidak
            terbatas pada antara lain: algoritma adhoc; struktur data sederhana; struktur data
            lanjut; pengurutan dan pencarian; rekursi; completed search; string matching; teori
            graf; geometri; pemrograman dinamis; greedy; teori bilangan; aljabar linear;
            kombinatorika; serta algoritma-algoritma dan struktur data pada bahasa dan
            otomata, machine learning, dan natural language processing.

            2. Babak Penyisihan
            a) Bentuk babak penyisihan adalah online test pada laman yang akan diumumkan
            kemudian.
            b) Setiap peserta akan diberikan serangkaian soal yang harus diselesaikan dalam
            bentuk sebuah program.
            16
            c) Lomba akan berlangsung selama 3 jam dan terdiri dari 5-12 soal pemrograman.
            d) Peserta akan diberi kesempatan sebelum babak penyisihan, yaitu tanggal 16 Juli
            2023 untuk melakukan pemanasan dengan tujuan membiasakan diri dengan
            sistem online. Pada tahap ini, peserta akan diberikan beberapa soal untuk
            diselesaikan dan dikirim (unggah). Penilaian pada tahap pemanasan tidak
            mempengaruhi penentuan hasil penyisihan maupun pemenang lomba.
            e) Pada saat online test, peserta diharapkan telah terhubung ke Internet untuk
            mengikuti babak penyisihan. Kegagalan koneksi Internet menjadi tanggung jawab
            peserta sendiri.
            f) Peraturan dan prosedur lengkap mengenai babak penyisihan akan diatur dan
            diberitahukan panitia langsung ke email masing-masing ketua tim.
            g) Babak penyisihan akan dilaksanakan pada tanggal 23 Juli 2023
            h) Tim yang masuk final berjumlah 20 tim dengan ketentuan:
            - 3 tim terbaik berdasarkan scoreboard babak penyisihan yang masing-masing
            merupakan perwakilan dari tiga regional yaitu regional 1 (wilayah Jawa dan
            Sumatera), regional 2 (wilayah Kalimantan, Bali dan Nusa Tenggara), dan
            regional 3 (wilayah Sulawesi, Maluku dan Papua).
            - 10 tim terbaik berdasarkan urutan peringkat scoreboard babak penyisihan di
            luar perwakilan regional.
            - 7 tim terbaik dari 7 Perguruan Tinggi teratas yang belum masuk sebagai
            finalis.
            - Setiap Perguruan Tinggi dibatasi paling banyak 3 tim yang dapat bertanding
            di babak final.
            i) Jika ditemukan indikasi kecurangan/plagiarisme, maka tim bersangkutan akan
            didiskualifikasi dari perlombaan.
            j) Dilarang melakukan penyerangan kepada sistem dalam bentuk apapun.
            k) Setiap submission yang tidak Accepted (AC) mendapatkan penalti 20 menit per
            submission. Total penalti dihitung ketika submission dinyatakan Accepted (AC).
            l) Bahasa pemrograman yang diterima sistem adalah C, C++, Java.
            17
            m) Klarifikasi dilakukan mulai pukul 13.00 WIB sampai dengan 14.00 WIB. Klarifikasi
            di luar waktu tersebut akan diabaikan.
            n) Jawaban klarifikasi adalah sebagai berikut:
            - Ya/Tidak
            - Baca soal lebih teliti
            - Tidak ada komentar
            - Jawaban sesuai konteks pertanyaan (jika diperlukan oleh juri)",
            'excerpt' => "1. Deskripsi
            Lomba pemrograman menguji kemampuan dan nalar peserta dalam menyelesaikan
            program komputer untuk memecahkan permasalahan yang diberikan. Kriteria
            penilaian mencakup kecepatan penulisan program dan ketepatan/efisiensi dari
            program yang dibuat untuk setiap kasus permasalahan terkait.
            Saat pertandingan, peserta akan diberikan deskripsi-deskripsi sejumlah permasalahan
            dan dalam kurun waktu 3-5 jam peserta harus menyusun dan mengumpulkan
            sebanyak mungkin program yang dapat menjawab masing-masing permasalahan
            tersebut."
            // 'poster' => "",
        ]);

        Lomba::factory()->create([
            'title' => 'PEDOMAN(Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi(GEMASTIK) XV Divisi XI',
            'nama_lomba' => 'Lomba GEMASTIK Divisi 11 Pengembangan Bisnis TIK',
            'category_id' => 6,
            'slug' => 'gemastikxv-bisnis',
            'sertif' => "Ada",
            'penyelenggara_lomba' => "Balai Pengembangan Talenta
            Indonesia (BPTI), Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
            'tingkat' => "Nasional",
            'tanggal_mulai_l' => "2023-05-12",
            'tanggal_berakhir_l' => "2023-07-12",
            // 'body' => "",
            'body' => "Referensi literatur untuk proses dalam menjalankan bisnis:
            ● Business Model Generation – Alexander Osterwalder – Wiley
            ● Value Proposition Design – Alexander Osterwalder – Wiley
            ● Testing Business Ideas – Alexander Osterwalder – Wiley
             Pedoman Pitchdeck
            a. Dokumen slide presentasi sebanyak 13 slide dalam format ppt atau pdf (termasuk
            judul presentasi).
            b. Isi dokumen menekankan pada potensi bisnis berbasis produk atau layanan di
            bidang teknologi informasi.
            c. Tim harus menunjukkan ide dan implementasi test pasar yang orisinil (bukan hasil
            karya orang lain) dan baru (belum pernah dipublikasi sebelumnya).
            d. Setiap dokumen ditulis dalam bahasa Indonesia, namun dimungkinkan pemakaian
            beberapa istilah bahasa asing yang lebih mudah dipahami.
            e. Setiap dokumen di bagian depan harus memberikan informasi nama tim, namanama anggota tim termasuk nama universitas dan alamat email (ketua tim).
            f. Presentasi tidak mengandung unsur SARA (Suku, Agama, Ras & Antar golongan)
            72
            maupun politik beserta afiliasinya.
            g. Pitch deck berisi proses validasi dibuat dalam format PDF yang diunggah ke laman
            dengan format penamaan file: “GEMASTIK XVI- Bisnis TIK - <ID-Tim> - <Nama Tim>
            - <Judul Bisnis> - Pitch.pdf.
            Batas pengumpulan seluruh berkas lomba babak penyisihan oleh tim peserta adalah
            tanggal 12 Juli 2023.
            Tim yang lolos Babak Penyisihan untuk maju ke Babak Final akan diumumkan pada
            tanggal 2 Agustus 2023.",
            'excerpt' => 'Referensi literatur untuk proses dalam menjalankan bisnis:
            ● Business Model Generation – Alexander Osterwalder – Wiley
            ● Value Proposition Design – Alexander Osterwalder – Wiley
            ● Testing Business Ideas – Alexander Osterwalder – Wiley
             Pedoman Pitchdeck'
            // 'poster' => "",
        ]);


        Lomba::factory()->create([
            'title' => '[GRATIS] Kompetisi Fotografi Nasional 2023, Hadiah 4 Juta',
            'nama_lomba' => 'Lomba Fotografi Fimon Kish',
            'category_id' => 2,
            'slug' => 'fotografi-fimonkish',
            'sertif' => "Ada",
            'penyelenggara_lomba' => "Fimon Kish",
            'tingkat' => "Nasional",
            'tanggal_mulai_l' => "2023-05-20",
            'tanggal_berakhir_l' => "2023-06-20",
            // 'body' => "",
            'body' => "Syarat dan ketentuan :
            Peserta yang mau mendaftar dalam lomba 2023 ini terbuka bagi masyarakat Indonesia secara umum lho ya
            Semua peserta dalam lombanya juga wajib ya untuk memposting hasil fotonya di media sosial Instagram teman-teman
            Semua yang mau ikutan dalam lomba ini wajib folow akun Instagram @filmonkish dan @filmonkishacademy
            Periode pengambilan foto yang diikutsertakan dalam lomba haruslah dilakukan ditahun 2023
            Editing boleh di lightroom (contrast, exposure, shadow, clarity dan lainnya boleh). Tidak boleh edit foto campuran menggunakan photoshop.
            Peserta wajib mengisi link pendaftaran secara online. Link tersebut tentu saja bisa kalian dapatkan disini saja ya
            Upload Fotomu ke IG feed, Caption berupa Judul dan makna foto. Akhiri dengan #Trueself #lombafilmonkish, tag @filmonkish dan @filmonkishacademy. ( Pastikan IG tidak di private ) 1 peserta hanya boleh submit/upload 1 foto.
            Periode upload yang diikutsertakan dalam lomba ini sendiri bisa kalian lakukan tentu hingga 20 Juni 2023, 23:59 WIB
            Oh iya, teman-teman layout Karya foto bebas ( Portrait maupaun landscape )
            Karya sendiri tentu saja boleh menggunakan kamera Handphone, kamera DSLR, MIRRORLESS dan ANALOG
            Karya yang disubmit adalah HAK CIPTAMU dan pihak @filmonkish TIDAK AKAN menggunakannya untuk kepentingan komersial mapaun non-komersial tanpa seijin fotografer
            Jadwal lomba 2023 bisa juga kalian lihat di akun ini teman-teman",
            'excerpt' => 'Syarat dan ketentuan :
            Peserta yang mau mendaftar dalam lomba 2023 ini terbuka bagi masyarakat Indonesia secara umum lho ya
            Semua peserta dalam lombanya juga wajib ya untuk memposting hasil fotonya di media sosial Instagram teman-teman
            Semua yang mau ikutan dalam lomba ini wajib folow akun Instagram @filmonkish dan @filmonkishacademy
            Periode pengambilan foto yang diikutsertakan dalam lomba haruslah dilakukan ditahun 2023
            Editing boleh di lightroom (contrast, exposure, shadow, clarity dan lainnya boleh). Tidak boleh edit foto campuran menggunakan photoshop.'
            // 'poster' => "",
        ]);
    }
}