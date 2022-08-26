<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $categoryIDs = Category::pluck('id');

        return [
            'title' => $this->faker->text(30),
            'content' => $this->faker->paragraphs(5, true),
            'link' => $this->faker->text(50),
            'category_id' => $categoryIDs->random(),
        ];
    }
}
