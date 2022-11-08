<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // User::factory(10)->create();

        User::create(['email' => 'tickets_admin@mail.ru', 'password' => bcrypt(111111), 'name' => 'Admin']);
    }
}
