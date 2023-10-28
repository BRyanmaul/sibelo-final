<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'name' => 'Desain Grafis',
            'slug' => 'desain-grafis',
        ]);

        Category::create([
            'name' => 'Fotografi',
            'slug' => 'fotografi',
        ]);

        Category::create([
            'name' => 'UI Design',
            'slug' => 'ui-design',
        ]);

        Category::create([
            'name' => 'UX Design',
            'slug' => 'ux-desain',
        ]);

        Category::create([
            'name' => 'Bisnis',
            'slug' => 'bisnis',
        ]);

        Category::create([
            'name' => 'Programming',
            'slug' => 'programming',
        ]);

        Category::create([
            'name' => 'Musik',
            'slug' => 'musik',
        ]);

        Category::create([
            'name' => 'Videografi',
            'slug' => 'videografi',
        ]);

        Category::create([
            'name' => 'Karya Ilmiah',
            'slug' => 'karya-ilmiah',
        ]);

        Category::create([
            'name' => 'E-Sport',
            'slug' => 'e-sport',
        ]);

        // Category Beasiswa
        Category::create([
            'name' => 'Pemerintah',
            'slug' => 'pemerintah',
        ]);

        Category::create([
            'name' => 'Swasta',
            'slug' => 'swasta',
        ]);

        Category::create([
            'name' => 'Riset',
            'slug' => 'riset',
        ]);

        Category::create([
            'name' => 'Pertukaran Pelajar',
            'slug' => 'pertukaran-pelajar',
        ]);

        Category::create([
            'name' => 'LPDP',
            'slug' => 'lpdp',
        ]);

        Category::create([
            'name' => 'Ikatan Dinas',
            'slug' => 'ikatan-dinas',
        ]);

        Category::create([
            'name' => 'Lainnya',
            'slug' => 'lainnya',
        ]);
    }
}