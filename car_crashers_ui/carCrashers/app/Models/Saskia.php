<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Saskia extends Model
{
    use HasFactory;

    protected $table = 'saskiak';

    protected $fillable = [
        'erab_id',
    ];

    public function erabiltzailea()
    {
        return $this->belongsTo(User::class, 'erab_id');
    }

    public function itemak()
    {
        return $this->hasMany(SaskiaItem::class, 'saskia_id');
    }
}
