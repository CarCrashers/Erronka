<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kotxea extends Model
{
    use HasFactory;

    protected $table = 'kotxeak';
    protected $primaryKey = 'matrikula';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'matrikula',
        'marka',
        'modeloa',
        'urtea',
        'desguazea_id',
    ];

    public function desguazea()
    {
        return $this->belongsTo(Desguazea::class, 'desguazea_id');
    }

    public function piezak()
    {
        return $this->hasMany(Pieza::class, 'matrikula', 'matrikula');
    }

    public function produktuak()
    {
        return $this->hasMany(Produktua::class, 'matrikula', 'matrikula');
    }

    public function peritutzaEskaerak()
    {
        return $this->hasMany(PeritutzaEskaera::class, 'kotxe_matrikula', 'matrikula');
    }
}
