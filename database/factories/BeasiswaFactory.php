<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Beasiswa>
 */
class BeasiswaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'nama_beasiswa' => fake()->sentence(),
            'category_id' => fake()->numberBetween(11, 17),
            'slug' => fake()->slug(2, false),
            'penyelenggara_beasiswa' => fake()->sentence(),
            'tanggal_mulai_b' => fake()->date(),
            'tanggal_berakhir_b' => fake()->date(),
            'body' => fake()->sentence(60),
            'excerpt' => fake()->sentence(4),
            // 'poster' => "",
        ];
    }
}