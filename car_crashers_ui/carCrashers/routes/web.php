<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

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

Route::get('/error', function () {
    return Inertia::render('ObrasEnMantenimiento');
})->name('error');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
