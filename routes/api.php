<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('api')->group(function () {
    Route::get('/tickets', [\App\Http\Controllers\TicketController::class, 'index']);
//    Route::get('/barcode', [\App\Http\Controllers\TicketController::class, 'barcode']);
});

Route::prefix('auth')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::post('login', [\App\Http\Controllers\AuthController::class, 'login']);
        Route::post('get-user-data', [\App\Http\Controllers\AuthController::class, 'getUserData']);
    });
});
Route::group(['prefix' => 'public', 'middleware' => []], function () {
    Route::post('/barcode/generate', [\App\Http\Controllers\TicketController::class, 'generateBarcode']);
});


