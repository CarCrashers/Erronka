<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PeritutzaEskaeraController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/norGara', function () {
    return Inertia::render('norGara');
})->name('norGara');

Route::get('/erosi', function () {
    return Inertia::render('erosi');
})->name('erosi');

Route::get('/details', function () {
    return Inertia::render('details');
})->name('details');
 
Route::get('/desguazatu', function () {
    return Inertia::render('desguazatu');
})->name('desguazatu');

// saldu orria

Route::middleware('auth')->group(function () {
    Route::get('/saldu', [PeritutzaEskaeraController::class, 'create'])->name('saldu');
    Route::post('/saldu', [PeritutzaEskaeraController::class, 'store'])->name('saldu.store');
});

Route::get('/saskia', function () {
    return Inertia::render('saskia');
})->name('saskia');

/*Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');*/

Route::get('/error', function () {
    return Inertia::render('ObrasEnMantenimiento');
})->name('error');

Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');

// berifikatuta egon behar zara dashboard-ean sartzeko, bestela ez da sartzen
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Dashboard-etik --> home-ra

Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

// Rutas de autenticación
Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'show'])->name('login');
    Route::post('/login', [LoginController::class, 'login']);

    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
});

Route::middleware('auth')->group(function () {
    // Email verification routes
    Route::get('/email/verify', [AuthController::class, 'verificationNotice'])
        ->name('verification.notice');

    Route::get('/email/verify/{id}/{hash}', [AuthController::class, 'verify'])
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('/email/verification-notification', [AuthController::class, 'resendVerificationEmail'])
        ->middleware('throttle:6,1')
        ->name('verification.send');
});

// Legacy confirmation route (confirmation_code style)
Route::get('/register/verify/{code}', [AuthController::class, 'verifyByCode'])->name('register.verify');

use App\Models\User;
use App\Notifications\VerifyEmailNotification;

Route::get('/test-email', function () {
    // 1. Buscamos un usuario cualquiera para la prueba
    // (Si no tienes usuarios en la base de datos, crea uno falso en memoria)
    $user = User::first() ?? new User(['name' => 'Agoitz', 'email' => 'test@example.com', 'id' => 1]);

    // 2. Iniciamos tu notificación
    $notification = new VerifyEmailNotification();

    // 3. Renderizamos el correo en el navegador
    return $notification->toMail($user);
});