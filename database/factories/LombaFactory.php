<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;



/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lomba>
 */
class LombaFactory extends Factory
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
            'nama_lomba' => fake()->sentence(),
            'category_id' => fake()->numberBetween(1, 10),
            'slug' => fake()->slug(2, false),
            'sertif' => "Ada",
            'penyelenggara_lomba' => fake()->sentence(),
            'tingkat' => fake()->sentence(),
            'tanggal_mulai_l' => fake()->date(),
            'tanggal_berakhir_l' => fake()->date(),
            'body' => fake()->sentence(60),
            'excerpt' => fake()->sentence(20),
            'poster' => null,
        ];
    }
}