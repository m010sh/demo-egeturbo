<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    const MANUFACTURERS_COUNT = 5;
    const PRODUCTS_COUNT = 6;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Manufacturer::class, self::MANUFACTURERS_COUNT)->create()->each(function($manufacturer) {

            factory(App\Models\Product::class, self::PRODUCTS_COUNT)->create([
                'manufacturer_id' => $manufacturer
            ]);
        });
    }
}
