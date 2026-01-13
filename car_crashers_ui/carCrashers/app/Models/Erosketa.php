<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Erosketa extends Model
{
    use HasFactory;

    protected $table = 'erosketak';

    protected $fillable = [
        'erab_id',
        'data',
        'guztira',
    ];

    protected $casts = [
        'data'    => 'datetime',
        'guztira' => 'decimal:2',
    ];

    public function erabiltzailea()
    {
        return $this->belongsTo(User::class, 'erab_id');
    }

    public function itemak()
    {
        return $this->hasMany(ErosketaItem::class, 'erosket_id');
    }
}
