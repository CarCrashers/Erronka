<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Auth/Login');
    }

    public function store(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        try {
            if (Auth::attempt($credentials, $request->boolean('remember'))) {
                $request->session()->regenerate();

                return redirect()->intended('/');
            }

            // Invalid credentials - return back with errors in an Inertia-friendly way
            if ($request->wantsJson()) {
                return back()->withErrors(['email' => 'Kredentzialak ez dira zuzenak.'])->onlyInput('email');
            }

            return back()->withErrors([
                'email' => 'Kredentzialak ez dira zuzenak.',
            ])->onlyInput('email');
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::error('Login error: ' . $e->getMessage());
            return back()->withErrors(['email' => 'Errore osoa gertatu da. Mesedez, saiatu berriro.']);
        }
    }
}