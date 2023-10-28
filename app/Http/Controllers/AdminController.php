<?php

namespace App\Http\Controllers;

use App\Models\Beasiswa;
use App\Models\Catatan;
use App\Models\Lomba;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;


class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Melihat Daftar Pengajuan
        $this->authorize('admin');
        $catatan = DB::table('catatans')
            ->where('validitas', 0)
            ->get();
        // dd($catatan);
        return Inertia::render('AdminPage/Index', [
            "title" => "Daftar Pengajuan",
            "pengajuan" => $catatan,


        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('admin');
        return Inertia::render('AdminPage/CreateNews', [
            "title" => "Daftar Postingan",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $this->authorize('admin');
        $lomba = Lomba::all();
        $beasiswa = Beasiswa::all();
        return Inertia::render('AdminPage/Postingan', [
            "title" => "Daftar Postingan",
            "lomba" => $lomba,
            "beasiswa" => $beasiswa,

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update()
    {
        // Logika Menvaliasi Pencatatan Mahasiswa


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($news)
    {
        //
    }
}