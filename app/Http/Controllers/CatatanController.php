<?php

namespace App\Http\Controllers;

use App\Events\MyEvent;
use App\Models\Catatan;
use App\Models\Lomba;
use App\Models\User;
use App\Notifications\CatatanNotif;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Notification;


class CatatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $catatan = Catatan::all();
        return Inertia::render('Dashboard', [
            'title' => "Pencatatan Diri",
            'catatan' => $catatan,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */



    public function show(Catatan $catatan, User $user)
    {
        // Catatan

        $catatan = DB::table('catatans')
            ->where('mahasiswa', auth()->user()->name)
            ->where('validitas', true)
            ->get();


        // $count = auth()->user()->unreadNotifications->count();
        // if ($count > 0) {
        //     $list = auth()->user()->unreadNotifications->limit(5)->get();
        // }

        // $notifications = array(
        //     'count' => $count,
        //     'list' => $count > 0 ? auth()->user()->unreadNotifications->limit(5)->get() : null
        // );

        // Notification::send($user, new CatatanNotif(auth()->user()->id));

        // event(new MyEvent('test'));

        // return json(json_encode($notifications));

        return Inertia::render('Dashboard', [
            'title' => "Catatan Beasiswa ",
            // 'catatan' => $validated,
            'catatan' => $catatan,
            // 'notifications' => json_encode($notifications)
        ]);
    }

    public function create()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     */



    public function store_beasiswa(Request $request, Catatan $catatan)
    {
        //
        // ddd($request);

        $validatedData = $request->validate([
            'nama_beasiswa' => 'required|max:255',
            'penyelenggara_beasiswa' => 'required|max:255',
            'tanggal_mulai_b' => 'required|max:45',
            'tanggal_berakhir_b' => 'required|max:45',
            'poster' => 'image|file|max:8000'
        ]);
        // Mengambil data user
        // $validatedData['mahasiswa'] = auth()->user()->name;
        $validatedData['user_id'] = auth()->user()->id;
        $validatedData['mahasiswa'] = $catatan->mahasiswa();
        // Logika Image
        if ($request->file('poster')) {
            $imageName = $validatedData['mahasiswa'] . '-' . $request->nama_beasiswa . '-' . now() . '.' . $request->file('poster')->getClientOriginalExtension();
            $validatedData['poster'] = $request->file('poster')->storeAs('poster_catatan', $imageName);
            Catatan::create($validatedData);
        }

        Catatan::create($validatedData);
        return redirect()->back()->with('message', 'Data Berhasil Diajukan');
    }




    public function store_lomba(Request $request, Catatan $catatan)
    {
        //
        $validatedData = $request->validate([
            'nama_lomba' => 'required|max:255',
            'jenis' => 'required|max:255',
            'penyelenggara_lomba' => 'required|max:255',
            'tanggal_mulai_l' => 'required|max:45',
            'tanggal_berakhir_l' => 'required|max:45',
            'prestasi' => 'required|max:255',
            'dosen_pembimbing' => 'nullable|max:255',
            'sertif' => 'image|file|max:8000',
            'bukti' => 'image|file|max:8000',
        ]);



        // Logika Image Poster
        $validatedData['user_id'] = auth()->user()->id;
        $validatedData['mahasiswa'] = $catatan->mahasiswa();
        // ddd($request);


        if ($request->file('sertif')) {
            $imageName = $validatedData['mahasiswa'] . '-' . $request->nama_lomba . '-' . $request->prestasi . '.' . $request->file('sertif')->getClientOriginalExtension();

            $validatedData['sertif'] = $request->file('sertif')->storeAs('sertif', $imageName);
        }

        if ($request->file('bukti')) {
            $imageName = $imageName = $validatedData['mahasiswa'] . '-' . $request->nama_lomba . '-' . $request->prestasi . '.' . $request->file('bukti')->getClientOriginalExtension();
            $validatedData['bukti'] = $request->file('bukti')->storeAs('bukti', $imageName);
        }

        Catatan::create($validatedData);


        return redirect()->back()->with('message', 'Pengajuan Berhasil Diajukan');
    }







    /**
     * Display the specified resource.
     */


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Catatan $catatan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Catatan $catat)
    {
        // ddd($request->id, $request->user_id);
        Catatan::whereIn('id', $request->id)
            ->update(['validitas' => 1]);
        $catatans = Catatan::find($request->id);
        $users = User::find($request->user_id);

        foreach ($users as $user) {
            foreach ($catatans as $catatan)
                if ($user->name == $catatan->mahasiswa)
                    Notification::send($user, new CatatanNotif($catatan));
            event(new MyEvent('Catatan Berhasil di Terima || Pengajuan Berhasil Di setujui', $catatan));
        }



        return redirect()->back()->with('message', 'Pengajuan Berhasil Disetujui');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Catatan $catatan)
    {
        Catatan::destroy($request->id);
        return redirect()->back()->with('message', 'Pengajuan Berhasil Di Tolak');
    }
}