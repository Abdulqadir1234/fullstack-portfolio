<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('/resume', function () {
    return view('app');
})->name('resume');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
