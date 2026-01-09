<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //

    public function login(Request $request)
    {
        //Balioztatzeko
        $kredentzialak = $request -> validate([
            'korreoa' => 'required|email',
            'pasahitza' => 'required',
        ]);

        if(!Auth::attempt([
            'korreoa' => $kredentzialak['korreoa'],
            'password' => $kredentzialak['pasahitza'],]))
        {
            return back() ->withErrors(['korreoa' => 'Kredentzialak ez dira zuzenak.']) ->onlyInput('korreoa');
        }

        $request->session()->regenerate();

        return redirect('/dashboard');
    }

    public function destroy( Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect() -> route('home');
    }
}
