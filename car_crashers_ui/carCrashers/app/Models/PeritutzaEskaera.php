<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PeritutzaEskaera extends Model
{
    use HasFactory;

    protected $table = 'peritutza_eskaerak';

    protected $fillable = [
        'erab_id',
        'langile_id',
        'desguazatzeko',
        'matrikula',
        'marka',
        'modelo',
        'urtea',
        'egoera_kotxe',
        'desk',
        'prezioa',
        'eskaera_egoera',
        'kotxe_matrikula',
        'produktu_id',
    ];

    protected $casts = [
        'desguazatzeko' => 'boolean',
        'prezioa'       => 'decimal:2',
    ];

    public function erabiltzailea()
    {
        return $this->belongsTo(User::class, 'erab_id');
    }

    public function langilea()
    {
        return $this->belongsTo(Langilea::class, 'langile_id');
    }

    public function kotxea()
    {
        return $this->belongsTo(Kotxea::class, 'kotxe_matrikula', 'matrikula');
    }

    public function produktua()
    {
        return $this->belongsTo(Produktua::class, 'produktu_id');
    }
}
