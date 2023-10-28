<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Foundation\Auth\User;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;


class Catatan extends Model

{
    use HasFactory;
    protected $guarded = [
        'id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mahasiswa()
    {
        return auth()->user()->name;
    }

    // public function accepted()
    // {
    //     return $this->where('validitas', 1);
    // }


    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'options' => AsArrayObject::class,
    ];
}