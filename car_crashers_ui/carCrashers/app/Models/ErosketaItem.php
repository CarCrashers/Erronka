<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ErosketaItem extends Model
{
    use HasFactory;

    protected $table = 'erosketa_itemak';

    protected $fillable = [
        'erosket_id',
        'produktu_id',
        'kopurua',
        'prezioa_unit',
    ];

    protected $casts = [
        'prezioa_unit' => 'decimal:2',
    ];

    public function erosket()
    {
        return $this->belongsTo(Erosketa::class, 'erosket_id');
    }

    public function produktua()
    {
        return $this->belongsTo(Produktua::class, 'produktu_id');
    }
}
