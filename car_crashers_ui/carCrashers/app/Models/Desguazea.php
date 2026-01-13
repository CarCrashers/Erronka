<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Desguazea extends Model
{
    use HasFactory;

    protected $table = 'desguazeak';

    protected $fillable = [
        'izena',
        'helbidea',
        'telefonoa',
        'email',
        'arduradun_id',
    ];

    public function arduraduna()
    {
        return $this->belongsTo(Langilea::class, 'arduradun_id');
    }

    public function kotxeak()
    {
        return $this->hasMany(Kotxea::class, 'desguazea_id');
    }
}
