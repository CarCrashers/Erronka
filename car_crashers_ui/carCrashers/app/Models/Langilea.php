<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Langilea extends Model
{
    use HasFactory;

    protected $table = 'langileak';

    protected $fillable = [
        'izena',
        'rola',
        'telefono',
        'zuzendari_id',
        'erabiltzaile_id',
    ];

    // Langileak => User (erabiltzailea)
    public function erabiltzailea()
    {
        return $this->belongsTo(User::class, 'erabiltzaile_id');
    }

    // Langilearen zuzendaria (beste langile bat)
    public function zuzendaria()
    {
        return $this->belongsTo(Langilea::class, 'zuzendari_id');
    }

    // Zuzendari batek bere langileak
    public function azpikoLangileak()
    {
        return $this->hasMany(Langilea::class, 'zuzendari_id');
    }

    // Langileak kudeatzen dituen peritutza eskaerak
    public function peritutzaEskaerak()
    {
        return $this->hasMany(PeritutzaEskaera::class, 'langile_id');
    }
}
