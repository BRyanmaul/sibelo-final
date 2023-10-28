<?php

namespace App\Http\Controllers;

use App\Models\Beasiswa;
use App\Models\Category;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;


class BeasiswaController extends Controller
{
    /**
     * 

     * Display a listing of the resource.
     */
    public function index()
    {
        $beasiswa = Beasiswa::latest();
        $title = 'Terkini';
        if (request('category')) {
            $category = Category::firstWhere('slug', request('category'));
            $title = ' Kategori : ' . $category->name;
        }

        return Inertia::render('Informasi/Beasiswa', [
            "title" => "Beasiswa " . $title,
            "description" => "Berikut Daftar Beasiswa",
            "beasiswa" => $beasiswa->filter(request(['search', 'category']))->paginate(4),
            "search" => request('search'),
            "reqCategory" => request('category')
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $beasiswa = new Beasiswa();
        $beasiswa->title = $request->title;
        $beasiswa->nama_beasiswa = $request->nama_beasiswa;
        $beasiswa->jenis = $request->jenis;
        $beasiswa->sertif = $request->sertif;
        $beasiswa->penyelenggara_beasiswa = $request->penyelenggara_beasiswa;
        $beasiswa->tingkat = $request->tingkat;
        $beasiswa->tanggal_mulai_l = $request->tanggal_mulai_l;
        $beasiswa->tanggal_berakhir_l = $request->tanggal_berakhir_l;
        $beasiswa->body = $request->body;

        // Logika Image
        // 
        $beasiswa->poster = $request->poster;
        $beasiswa->save();
        // $Semuabeasiswa = Beasiswa::all();
        return redirect()->back()->with('message', 'Data Berhasil Diajukan');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // ddd($request);
        $rules = [
            'title' => 'required|max:255',
            'nama_beasiswa' => 'required|max:255',
            'slug' => 'required|max:100',
            'category_id' => 'required',
            'penyelenggara_beasiswa' => 'required|max:255',
            'tanggal_mulai_b' => 'nullable',
            'tanggal_berakhir_b' => 'nullable',
            'sertif' => 'required',
            'body' => 'required|max:255',
            'poster' => 'image|file|max:8000|nullable',
        ];

        $validatedData = $request->validate($rules);
        $validatedData['excerpt'] = Str::limit(strip_tags($request->body), 200);


        // Logika Image Poster
        if ($request->file('poster')) {
            $imageName = $request->nama_beasiswa . '.' . $request->file('poster')->getClientOriginalExtension();
            $validatedData['poster'] = $request->file('poster')->storeAs('poster', $imageName);
        }

        Beasiswa::create($validatedData);
        return redirect()->back()->with('message', 'Postingan Berhasil Dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(Beasiswa $beasiswa)
    {
        return Inertia::render('Informasi/BeasiswaDetail', [
            "title" => $beasiswa->title,
            "beasiswa" => $beasiswa
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Beasiswa $beasiswa)
    {
        return Inertia::render('AdminPage/EditBeasiswa', [
            "title" => "Edit Postingan Beasiswa ",
            "beasiswa" => $beasiswa,
            // "image" => asset('storage/' . $lomba->poster)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Beasiswa $beasiswa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        Beasiswa::destroy($request->id);
        return redirect()->back()->with('message', 'Postingan Berhasil Dihapus');
    }

    public function createSlug(Request $request)
    {
        // dd($request->nama_beasiswa);
        $slug = SlugService::createSlug(Beasiswa::class, 'slug', $request->nama_beasiswa);
        return response()->json(array('slug' => $slug));
    }
}