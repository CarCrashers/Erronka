<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PeritutzaEskaeraController;
use App\Http\Controllers\KotxeaController;
use App\Http\Controllers\PiezaController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Kotxea;
use App\Models\Pieza;

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

// peritutza eskaera bidaltzen

Route::post('/saldu', [PeritutzaEskaeraController::class, 'store'])
    ->middleware('auth')
    ->name('saldu.store');

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
/*Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});*/

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