<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaskiaItem extends Model
{
    use HasFactory;

    protected $table = 'saskia_itemak';

    protected $fillable = [
        'saskia_id',
        'produktu_id',
        'kopurua',
        'prezioa_unit',
    ];

    protected $casts = [
        'prezioa_unit' => 'decimal:2',
    ];

    public function saskia()
    {
        return $this->belongsTo(Saskia::class, 'saskia_id');
    }

    public function produktua()
    {
        return $this->belongsTo(Produktua::class, 'produktu_id');
    }
}
