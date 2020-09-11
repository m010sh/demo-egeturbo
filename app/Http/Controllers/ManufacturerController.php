<?php

namespace App\Http\Controllers;

use App\Models\Manufacturer;

class ManufacturerController extends Controller
{
    public function index()
    {
        return Manufacturer::orderBy('name')->get();
    }
}
