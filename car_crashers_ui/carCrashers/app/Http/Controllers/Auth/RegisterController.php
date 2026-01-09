<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required','string','max:255'],
            'email' => ['required','email','max:255','unique:users'],
            'password' => ['required','confirmed','min:8'],
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        // baieztatzeko emaila 
        event(new Registered($user));

        // logeatu behin baieztatu ondoren
        auth()->login($user);

        // redirigir a la ruta que muestre el aviso de verificación
        return redirect()->route('verification.notice');
    }
}
