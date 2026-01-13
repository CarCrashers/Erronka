<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LoginController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

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

    Route::get('/saldu', function () {
        return Inertia::render('saldu');
    })->name('saldu');

    //peritutza eskaera bidaltzen

    Route::post('/saldu', [PeritutzaEskaeraController::class, 'store'])
        ->middleware('auth')
        ->name('saldu.store');

//*********** 

Route::get('/saskia', function () {
    return Inertia::render('saskia');
})->name('saskia');

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');

Route::get('/error', function () {
    return Inertia::render('ObrasEnMantenimiento');
})->name('error');


Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');


// berifikatuta egon behar zara dashboard-ean sartzeko, bestela ez da sartzen
/*Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard',  function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});*/


//LOGIN modaletik --> dashboard-era

Route::post('/login',[LoginController::class,'login']);

//Dashboard-etik --> home-ra

Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

// Rutas de autenticación
Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'show'])->name('login');
    Route::post('/login', [LoginController::class, 'store']);
    
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

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

// require __DIR__.'/settings.php'; // temporarily disabled while debugging missing controllers

// Legacy confirmation route (confirmation_code style)
Route::get('/register/verify/{code}', [AuthController::class, 'verifyByCode'])->name('register.verify');
