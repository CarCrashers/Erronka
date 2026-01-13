<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalerosketaHistorikoa extends Model
{
    use HasFactory;

    protected $table = 'salerosketa_historikoak';

    protected $fillable = [
        'mota',
        'prezioa',
        'data',
        'erabiltzaile_id',
        'produktu_id',
    ];

    protected $casts = [
        'data' => 'datetime',
    ];

    public function erabiltzailea()
    {
        return $this->belongsTo(User::class, 'erabiltzaile_id');
    }

    public function produktua()
    {
        return $this->belongsTo(Produktua::class, 'produktu_id');
    }
}
