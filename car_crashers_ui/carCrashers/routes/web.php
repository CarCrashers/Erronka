<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
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

Route::get('/saldu', function () {
    return Inertia::render('saldu');
})->name('saldu');

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
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard',  function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


//LOGIN modaletik --> dashboard-era

Route::post('/login',[LoginController::class,'login']);

//Dashboard-etik --> home-ra

Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');


//erregistratu
//Route::post('/register', [RegisterController::class, 'store'])->name('register');


//emaila posta elektroniko bidez berrestea

Route::get('/email/verify', function () {
    return inertia('Auth/VerifyEmail'); 
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect()->route('home');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return back()->with('status', 'verification-link-sent');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

require __DIR__.'/settings.php';
