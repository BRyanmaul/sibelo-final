<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Lomba;
use App\Models\User;
use Illuminate\Database\Seeder;
use Database\Seeders\LombaSeeder;
use Database\Seeders\BeasiswaSeeder;
use Database\Seeders\CategorySeeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        //  Buat Data Admin
        User::factory()->create([
            'name' => 'Admin 1',
            'nim' => 'admin1',
            'email' => 'adminsibelo@gmail.com',
            'password' => bcrypt("12345678"),
            'is_admin' => 1
        ]);

        User::factory()->create([
            'name' => 'Admin 2',
            'nim' => 'admin2',
            'email' => 'adminsibelo2@gmail.com',
            'password' => bcrypt('admin2'),
            'is_admin' => 1
        ]);


        // Buat Data User
        User::factory()->create([
            'name' => 'Sabrian Maulana',
            'nim' => 'F1E121080',
            'email' => 'sabrian101maulana@gmail.com',
            'password' => bcrypt('Holmes1412'),
        ]);

        User::factory()->create([
            'name' => 'Raihan Ghani Perangin Angin',
            'nim' => 'F1E121081',
            'email' => 'ghanix@gmail.com',
            'password' => bcrypt('f1e121081'),
        ]);

        User::factory()->create([
            'name' => 'Akhdan Al-Wafi',
            'nim' => 'F1E121083',
            'email' => 'danko@gmail.com',
            'password' => bcrypt('f1e121083'),
        ]);

        User::factory()->create([
            'name' => 'Selly Clarisa',
            'nim' => 'F1E121169',
            'email' => 'clarisa@gmail.com',
            'password' => bcrypt('f1e121169'),
        ]);

        User::factory()->create([
            'name' => 'Kesi Aprilia',
            'nim' => 'F1E121225',
            'email' => 'kesiaprilia@gmail.com',
            'password' => bcrypt('f1e121225'),
        ]);


        User::factory()->create([
            'name' => 'M Arif Firdaus',
            'nim' => 'F1E121079',
            'email' => 'arifwibu@gmail.com',
            'password' => bcrypt('f1e121079'),
        ]);

        $this->call([
            CatatanSeeder::class,
            LombaSeeder::class,
            BeasiswaSeeder::class,
            CategorySeeder::class
        ]);
    }
}