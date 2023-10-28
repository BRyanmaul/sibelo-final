<?php

namespace App\Http\Controllers;

use App\Http\Resources\LombaCollection;
use App\Models\Category;
use App\Models\Lomba;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use PHPUnit\Util\Filter;


class LombaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $lomba = Lomba::latest();

        $title = 'Terkini';
        if (request('category')) {
            $category = Category::firstWhere('slug', request('category'));
            $title = ' Kategori : ' . $category->name;
        }

        return Inertia::render('Informasi/Lomba', [
            "title" => "Lomba " . $title,
            "description" => "Berikut Daftar Lomba",
            "lomba" => $lomba->filter(request(['search', 'category']))->paginate(4),
            // "count" => $lomba->count(),
            "search" => request('search'),
            "reqCategory" => request('category')
            // "created_at" => $lomba->created_at->diffForHumans()
        ]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'nama_lomba' => 'required|max:255',
            'slug' => 'required|max:255',
            'category_id' => 'required',
            'sertif' => 'required',
            'penyelenggara_lomba' => 'required|max:255',
            'tingkat' => 'required',
            'tanggal_mulai_l' => 'required',
            'tanggal_berakhir_l' => 'required',
            'body' => 'required',
            'image' => 'nullable|image|file|max:8000',
        ]);

        // Excerpt
        $validatedData['excerpt'] = Str::limit(strip_tags($request->body), 200);

        // Logika Image Poster

        if ($request->file('image')) {
            $imageName = $request->nama_lomba . '.' . $request->file('image')->getClientOriginalExtension();
            $validatedData['poster'] = $request->file('image')->storeAs('poster', $imageName);
        }
        Lomba::create($validatedData);

        return redirect()->back()->with('message', 'Postingan Berhasil Dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(Lomba $lomba)
    {
        return Inertia::render('Informasi/LombaDetail', [
            "title" => 'Informasi Lomba',
            "lomba" => $lomba,
            "category" => $lomba->category
        ]);
    }

    public function view(Lomba $lomba)
    {
        return Inertia::render('AdminPage/ViewLomba', [
            "title" => 'Informasi Lomba',
            "lomba" => $lomba,
            "category" => $lomba->category
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lomba $lomba)
    {
        return Inertia::render('AdminPage/EditLomba', [
            "title" => "Edit Postingan Lomba ",
            "lomba" => $lomba,
            // "image" => asset('storage/' . $lomba->poster)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lomba $lomba)
    {
        // ddd($request->image, $request->file('image'));

        $rules = [
            'title' => 'required|max:255',
            'nama_lomba' => 'required|max:255',
            'slug' => 'required|max:255',
            'category_id' => 'required',
            'sertif' => 'required',
            'penyelenggara_lomba' => 'required|max:255',
            'tingkat' => 'required',
            'tanggal_mulai_l' => 'required',
            'tanggal_berakhir_l' => 'required',
            'body' => 'required',
            'poster' => 'nullable|image|file|max:8000',
        ];

        $validatedData = $request->validate($rules);
        $validatedData['excerpt'] = Str::limit(strip_tags($request->body), 200);
        // Logika Image Poster
        if ($request->file('poster')) {
            $imageName = $request->nama_lomba . '.' . $request->file('poster')->getClientOriginalExtension();
            if ($request->oldImage) {
                Storage::delete($request->oldImage);
            }
            $validatedData['poster'] = $request->file('poster')->storeAs('poster', $imageName);
        }
        // Lomba::create($validatedData);
        Lomba::where('id', $request->id)
            ->update($validatedData);

        return Redirect::route('show.informasi')->with('message', 'Postingan Berhasil Diupdate');;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        // ddd($request->id);
        Lomba::destroy($request->id);
        return redirect()->back()->with('message', 'Postingan Berhasil Dihapus');
    }

    public function createSlug(Request $request)
    {
        // dd($request->nama_lomba);
        $slug = SlugService::createSlug(Lomba::class, 'slug', $request->nama_lomba);
        return response()->json(array('slug' => $slug));
    }
}