<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


Route::get('/', function () {
    return Inertia::render('home'); 
});


Route::get('/carcrashers', function () {
    return Inertia::render('home'); // tu Home.jsx
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
