<?php

use App\Models\Platform;
use Illuminate\Database\Seeder;

class PlatformSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $names = ['Android', 'IOS'];

        foreach ($names as $name) {
            Platform::create([
                'name' => $name
            ]);
        }
    }
}
