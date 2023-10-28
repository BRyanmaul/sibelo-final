<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BeasiswaController;
use App\Http\Controllers\CatatanController;
use App\Http\Controllers\CatatanNotifController;
use App\Http\Controllers\LombaController;
use App\Http\Controllers\ProfileController;
use App\Models\Beasiswa;
use App\Models\Catatan;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Auth/Login');
})->middleware(['guest'])->name('logins');

// Home
Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth'])->name('home');

// About
Route::get('/about', function () {
    return Inertia::render('About');
})->middleware(['auth'])->name('about');



// Informasi Beasiswa dan Lomba
//Lomba
Route::get('/lomba', [LombaController::class, 'index'])
    ->middleware(['auth'])->name('lomba');

// Beasiswa
Route::get('/beasiswa', [BeasiswaController::class, 'index'])
    ->middleware(['auth'])->name('beasiswa');


// Single Page Lomba
Route::get('/lomba/{lomba:slug}', [LombaController::class, 'show'])
    ->middleware(['auth'])->name('lomba.show');

// Single Page Beasiswa
Route::get('/beasiswa/{beasiswa:slug}', [BeasiswaController::class, 'show'])
    ->middleware(['auth'])->name('beasiswa.show');

// Category Lomba
Route::get('/lomba/categories/{category:slug}', function (Category $category) {

    $lomba = $category->lomba()->latest()->paginate(5);
    // ddd($lomba);
    return Inertia::render('Informasi/LombaCategory', [
        "title" => "Lomba Berdasarkan Kategori",
        "lomba" => $lomba,
        "category" => $category->name,
        "reqCategory" => request('category')
    ]);
})->middleware(['auth'])->name('lomba.show_category');

// Category Beasiswa
Route::get('/beasiswa/categories/{category:slug}', function (Category $category) {

    $beasiswa = $category->beasiswa()->latest()->paginate(5);
    // ddd($beasiswa);
    return Inertia::render('Informasi/BeasiswaCategory', [
        "title" => "Beasiswa Berdasarkan Kategori",
        "beasiswa" => $beasiswa,
        "category" => $category->name,
        "reqCategory" => request('category')
    ]);
})->middleware(['auth',])->name('beasiswa.show_category');








// Pencatatan Diri
Route::middleware('auth')->group(function () {
    // View
    Route::get('/catatan', [CatatanController::class, 'show'])->name('catatan');
    // Form Tambah Lomba dan Beasiswa
    Route::get('/pengajuan/lomba', function () {
        return Inertia::render('Catatan/TambahLomba');
    })->name('tambah.lomba');
    Route::get('/pengajuan/beasiswa', function () {
        return Inertia::render('Catatan/TambahBeasiswa');
    })->name('tambah.beasiswa');
    // Store
    Route::post('/pengajuan/lomba', [CatatanController::class, 'store_lomba'])->name('ajukan.lomba');
    Route::post('/pengajuan/beasiswa', [CatatanController::class, 'store_beasiswa'])->name('ajukan.beasiswa');

    // Mark as Read
    Route::post('mark-all-as-read', [CatatanNotifController::class, 'mark'])->name('mark.all-read');
});

Route::middleware('auth')->group(function () {
    Route::get('/catatan/notif', [CatatanNotifController::class, 'test'])->name('notif.test');
});


// Admin Page
Route::prefix('administrator')->middleware(['admin'])->group(function () {
    // Dashboard
    Route::get('', [AdminController::class, 'index'])->name('dashboard.admin');

    //Update
    // Setujui Pengajuan
    Route::post('/', [CatatanController::class, 'update'])
        ->name('setuju.pengajuan');
    // Tolak Pengajuan
    Route::delete('/', [CatatanController::class, 'destroy'])
        ->name('tolak.pengajuan');


    // Informasi
    Route::get('/informasi', [AdminController::class, 'show'])
        ->name('show.informasi');

    // Create Postingan Lomba Dan Beasiswa
    Route::get('/lomba/create',  function () {
        return Inertia::render('AdminPage/CreateLomba');
    })->name('create.lomba');
    Route::get('/beasiswa/create', function () {
        return Inertia::render('AdminPage/CreateBeasiswa');
    })->name('create.beasiswa');

    // Store
    Route::post('/lomba/create', [LombaController::class, 'store'])
        ->name('posting.lomba');

    Route::post('/beasiswa/create', [BeasiswaController::class, 'store'])
        ->name('posting.beasiswa');

    // View
    Route::get('/lomba/view/{lomba:slug}', [LombaController::class, 'view'])->name('view.lomba');
    Route::get('/beasiswa/view/{beasiswa:slug}', [BeasiswaController::class, 'view'])->name('view.beasiswa');

    // Edit
    Route::get('/lomba/edit/{lomba:slug}', [LombaController::class, 'edit'])->name('edit.lomba');
    Route::get('/beasiswa/edit/{beasiswa:slug}', [BeasiswaController::class, 'edit'])->name('edit.beasiswa');

    // Update
    Route::post('/informasi/', [LombaController::class, 'update'])->name('update.lomba');
    // Route::patch('/informasi', [BeasiswaController::class, 'update'])->name('update.beasiswa');


    // Delete
    Route::delete('/lomba/delete/{id}', [LombaController::class, 'destroy'])->name('destroy.lomba');
    Route::delete('/beasiswa/delete/{id}', [BeasiswaController::class, 'destroy'])->name('destroy.beasiswa');

    // slug
    Route::get('/lomba/create/createSlug', [LombaController::class, 'createSlug'])->name('create.lomba-slug');
    Route::get('/beasiswa/create/createSlug', [BeasiswaController::class, 'createSlug'])->name('create.beasiswa-slug');
});



// //Dashboard



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::Inertia('/about', 'About');
require __DIR__ . '/auth.php';