<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Mail\VerifyEmail as VerifyEmailMailable;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function showRegister(): Response
    {
        return Inertia::render('Auth/Register');
    }

    public function register(RegisterRequest $request)
    {
        // Generate confirmation code
        $confirmationCode = bin2hex(random_bytes(16));

        try {
            $user = null;

            DB::transaction(function () use ($request, $confirmationCode, &$user) {
                $user = User::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                    'confirmation_code' => $confirmationCode,
                    'confirmed' => false,
                ]);

                event(new Registered($user));

                try {
                    Mail::to($user->email)->send(new VerifyEmailMailable($user, $confirmationCode));
                } catch (\Throwable $e) {
                    Log::error('Error sending confirmation email: ' . $e->getMessage());
                }
            });

            Auth::login($user);

            // If the request is an Inertia request, return a proper Inertia redirect
            if ($request->header('X-Inertia')) {
                return Inertia::location(url('/'));
            }

            // If it's an AJAX/JSON request, return JSON
            if ($request->wantsJson() || $request->ajax()) {
                return response()->json([
                    'status' => 'registered',
                    'redirect' => url('/'),
                ], 201);
            }

            // Normal web request
            return redirect('/');

        } catch (\Throwable $e) {
            Log::error('Registration failed: ' . $e->getMessage());

            // For Inertia requests return Inertia::location to trigger client redirect handling,
            // otherwise return JSON or back() with errors.
            if ($request->header('X-Inertia')) {
                // show a proper Inertia error page by returning a redirect (client will follow)
                return Inertia::location(url('/'));
            }

            if ($request->wantsJson() || $request->ajax()) {
                return response()->json(['error' => 'Registration failed.'], 500);
            }

            return back()->withErrors(['register' => 'Error al registrar el usuario. Inténtalo de nuevo.']);
        }
    }
    
    // Legacy verify-by-code route (from tutorial)
    public function verifyByCode(string $code): RedirectResponse
    {
        $user = User::where('confirmation_code', $code)->first();

        if (! $user) {
            return redirect('/')->with('error', 'Código inválido.');
        }

        $user->confirmed = true;
        $user->confirmation_code = null;
        $user->email_verified_at = now();
        $user->save();

        return redirect('/')->with('message', 'Has confirmado tu correo.');
    }

    public function verificationNotice(): Response
    {
        return Inertia::render('Auth/VerifyNotice');
    }

    public function verify(EmailVerificationRequest $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect('/');
        }

        $request->fulfill();

        return redirect('/')->with('verified', true);
    }

    public function resendVerificationEmail(\Illuminate\Http\Request $request): RedirectResponse
    {
        $request->user()->sendEmailVerificationNotification();
        return back()->with('status', 'verification-link-sent');
    }

    public function logout(\Illuminate\Http\Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}