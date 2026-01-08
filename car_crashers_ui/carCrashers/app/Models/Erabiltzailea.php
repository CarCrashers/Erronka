<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Nette\SmartObject;
class Erabiltzailea extends Authenticatable
{
    //Hau da notifikazioa bidaltzeko
     use Notifiable;

    protected $table = 'erabiltzailea';

    protected $fillable = [
        'izena',
        'pasahitza',
        'mota',
        'telefono',
        'korreoa',
        'zuzendari_id',
    ];

    protected $hidden = [
        'pasahitza',
        'remember_token',
    ];

    public function getAuthPassword()
    {
        return $this->pasahitza;
    }

    // Dashboard konprobatzeko  
    public function isAdmin(): bool
    {
        return $this->mota === 'admin';
    }
}

