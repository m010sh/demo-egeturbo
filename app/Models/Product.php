<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class);
    }

    public function platform()
    {
        return $this->belongsTo(Platform::class);
    }

    public function type()
    {
        return $this->belongsTo(Type::class);
    }
}
