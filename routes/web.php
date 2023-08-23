<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PricingController;

function getSPAfile() {
    if (env('APP_ENV', 'local') === 'local') {
        return public_path('spa.html');
    }
    return base_path('public_html/spa.html');
}

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('spa');
});

Route::get('/desarrollos', function () {
    return view('spa');
});

Route::get('/servicios', function () {
    return view('spa');
});

Route::get('/equipo', function () {
    return view('spa');
});

Route::get('/cotizar', function () {
    return view('spa');
});

Route::post('/send-pricing', [
    PricingController::class,
    'pricing'
]);
