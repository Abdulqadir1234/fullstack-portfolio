<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image_url',
        'project_url',
        'github_url',
        'tech_stack',
        'featured',
        'sort_order',
    ];

    protected $casts = [
        'tech_stack' => 'array',
        'featured' => 'boolean',
    ];

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    public function scopeFeatured($query)
    {
        return $query->where('featured', true);
    }
}
