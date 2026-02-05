<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\PeritutzaEskaeraController;
use App\Http\Controllers\DesguazatuController;
use App\Http\Controllers\SaskiaController;
use App\Http\Controllers\KotxeaController;
use App\Http\Controllers\PiezaController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Kotxea;
use App\Models\Pieza;

/*
* HASIERA ORRIA
*/

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

/* ********************************** */


/*
* NOR GARA ORRIA
*/

Route::get('/norGara', function () {
    return Inertia::render('norGara');
})->name('norGara');

/* ********************************** */

/*
* EROSI ORRIA
*/

Route::get('/erosi', [CarController::class, 'index'])->name('cars.index');

/* ********************************** */

/*
* PRODUKTU XEHETASUNAK
*/

Route::get('/details', function () {
    return Inertia::render('details');
})->name('details');
 
/* ********************************** */


/*
* DESGUAZATU ORRIA
*/

Route::get('/desguazatu', function () {
    return Inertia::render('desguazatu');
})->name('desguazatu');

/* ********************************** */


/*
* DESGUAZATU ESKAERA
*/

Route::post('/desguazatu', [DesguazatuController::class, 'store'])
    ->name('desguazatu.store');

/* ********************************** */


/*
* AUTH BEHARRA DUTEN ORRIAK / ESKAERAK 
*/

Route::middleware('auth')->group(function () 
{
    // SALDU ORRIA
    Route::get('/saldu', [PeritutzaEskaeraController::class, 'create'])->name('saldu');
    /* ************* */

    // SALDU ESKAERA
    Route::post('/saldu', [PeritutzaEskaeraController::class, 'store'])->name('saldu.store');
    /* ************* */

    // SASKIA ORRIA
    Route::get('/saskia', [SaskiaController::class, 'index'])->name('saskia');

    // SASKIA ITEM EZABATU
    Route::delete('/saskia/item/{itemId}', [SaskiaController::class, 'destroyItem'])->name('saskia.item.ezabatu');

});

/* ********************************** */



/*
* MODAL-A IREKITZEKO
*/

Route::get('/login', function () {
    return Inertia::render('saioa');
})->name('login');

/* ********************************** */


/*
* DASHBOARD ORRIA (Auth erabilita)
*/
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


/*
* LOGOUT (Home-era bueltatzen du )
*/

Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

/* ********************************** */


// Autentikazio rutak
Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'show'])->name('login');
    Route::post('/login', [LoginController::class, 'login']);

    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
});

Route::middleware('auth')->group(function () {
    Route::get('/email/verify', [AuthController::class, 'verificationNotice'])
        ->name('verification.notice');

    Route::get('/email/verify/{id}/{hash}', [AuthController::class, 'verify'])
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('/email/verification-notification', [AuthController::class, 'resendVerificationEmail'])
        ->middleware('throttle:6,1')
        ->name('verification.send');
});

Route::get('/register/verify/{code}', [AuthController::class, 'verifyByCode'])->name('register.verify');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('dashboard', [ 
            'kotxeakCount' => Kotxea::count(),
            'piezakCount' => Pieza::count(),
        ]);
    })->name('dashboard');

    Route::get('/kotxeak', [KotxeaController::class, 'index'])->name('kotxeak');
    Route::post('/kotxeak', [KotxeaController::class, 'store'])->name('kotxeak.store');
    Route::put('/kotxeak/{matrikula}', [KotxeaController::class, 'update'])->name('kotxeak.update');
    Route::delete('/kotxeak/{matrikula}', [KotxeaController::class, 'destroy'])->name('kotxeak.destroy');

    Route::get('/piezak', [PiezaController::class, 'index'])->name('piezak');
    Route::post('/piezak', [PiezaController::class, 'store'])->name('piezak.store');
    Route::put('/piezak/{id}', [PiezaController::class, 'update'])->name('piezak.update');
    Route::delete('/piezak/{id}', [PiezaController::class, 'destroy'])->name('piezak.destroy');

    Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::put('/users/{id}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('users.destroy');
});


//Pruebas Agoitz para comprobar el email de verificación desde el exterior
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





//obras
Route::get('/error', function () {
    return Inertia::render('ObrasEnMantenimiento');
})->name('error');
