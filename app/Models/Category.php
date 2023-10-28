<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Lomba;
use App\Models\Beasiswa;


class Category extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function lomba()
    {
        return $this->hasMany(Lomba::class);
    }

    public function beasiswa()
    {
        return $this->hasMany(Beasiswa::class);
    }
}