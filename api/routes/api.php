<?php

use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(TodoController::class)->prefix('todos')->group(function(){
    Route::get('/', 'index')->name('all');
    Route::get('/{id}', 'show')->name('show');
    Route::post('/', 'store')->name('create');
    Route::put('/{id}', 'update')->name('update');
    Route::delete('/{id}', 'destroy')->name('delete');
});
