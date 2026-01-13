<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pieza extends Model
{
    use HasFactory;

    protected $table = 'piezak';

    protected $fillable = [
        'zatia',
        'matrikula',
    ];

    public function kotxea()
    {
        return $this->belongsTo(Kotxea::class, 'matrikula', 'matrikula');
    }

    public function produktuak()
    {
        return $this->hasMany(Produktua::class, 'pieza_id');
    }
}
