<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produktua extends Model
{
    use HasFactory;

    protected $table = 'produktuak';

    protected $fillable = [
        'matrikula',
        'pieza_id',
        'egoera',
        'deskribapena',
        'prezioa',
    ];

    public function kotxea()
    {
        return $this->belongsTo(Kotxea::class, 'matrikula', 'matrikula');
    }

    public function pieza()
    {
        return $this->belongsTo(Pieza::class, 'pieza_id');
    }

    public function salerosketaHistorikoak()
    {
        return $this->hasMany(SalerosketaHistorikoa::class, 'produktu_id');
    }

    public function peritutzaEskaerak()
    {
        return $this->hasMany(PeritutzaEskaera::class, 'produktu_id');
    }

    public function saskiaItemak()
    {
        return $this->hasMany(SaskiaItem::class, 'produktu_id');
    }

    public function erosketakItemak()
    {
        return $this->hasMany(ErosketaItem::class, 'produktu_id');
    }
}
