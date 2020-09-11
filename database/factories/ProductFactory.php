<?php

/** @var Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'model' => $faker->word(),
        'price' => $faker->randomFloat(null, 0, 70000),
        'type_id' => $faker->boolean() ? 1 : 2,
        'platform_id' => $faker->boolean() ? 1 : 2
    ];
});

$factory->afterCreating(Product::class, function ($product) {
    $product->image = "https://picsum.photos/id/{$product->id}/200/300";
    $product->save();
});
