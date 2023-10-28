<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Cviebrock\EloquentSluggable\Sluggable;

class Beasiswa extends Model
{
    use HasFactory, Sluggable;
    protected $guarded = ['id'];
    protected $with = ['category'];

    // public function tanggal_mulai_l($value)
    // {
    //     $date = Carbon::parse($value);
    //     return $date->format('d/m/Y');
    // }

    // public function tanggal_berakhir_l($value)
    // {
    //     $date = Carbon::parse($value);
    //     return $date->format('d/m/Y');
    // }
    // protected $tanggal_mulai_b = Carbon::createFromFormat('Y/m/d', 'd/m/Y');


    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeFilter($query, array $filters)
    {
        // if (isset($filters['search']) ? $filters['search'] : false) {
        //     return $query->where('title', 'like', '%' . $filters['search'] . '%')
        //         ->orWhere('syarat', 'like', '%' . $filters['search'] . '%');
        // }

        // Sama tapi lebih efisein
        $query->when($filters['search'] ?? false, function ($query, $search) {
            return $query->where('title', 'like', '%' . $search . '%')
                ->orWhere('body', 'like', '%' . $search . '%');
        });

        $query->when($filters['category'] ?? false, function ($query, $category) {
            return $query->whereHas('category', function ($query) use ($category) {
                $query->where('slug', $category);
            });
        });
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'nama_beasiswa',
                'onUpdate'  => true,
            ]
        ];
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}