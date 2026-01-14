<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Notifications\VerifyEmailNotification;
use Laravel\Fortify\TwoFactorAuthenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'confirmation_code',
        'confirmed',
        'mota',
        'telefono',
        'zuzendari_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'confirmed' => 'boolean',
    ];



    // Dashboard-eko sarbidea konprobatzeko 
    public function isAdmin(): bool
    {
        return $this->mota === 'admin';
    }
    
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmailNotification);
    }

};
