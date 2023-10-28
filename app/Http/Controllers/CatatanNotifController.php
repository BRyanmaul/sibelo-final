<?php

namespace App\Http\Controllers;

use App\Events\MyEvent;
use App\Models\Catatan;
use App\Models\User;
use App\Notifications\CatatanNotif;
use Illuminate\Http\Request;
// use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Notification;



class CatatanNotifController extends Controller
{
    use Notifiable;

    public function accepted_notif(Catatan $catatan, User $user)
    {
        // $result = $catatan->accepted()->toggle($catatan->validitas);
        // foreach ($users as $user) {
        //     $user->notify(new CatatanNotif($user->id));
        // }
        // $user = auth()->user(); 
        // if ($user) {
        //     $user->notify((new CatatanNotif($user))->locale('es'));        }
        // foreach ($users as $user) {


        // Notification::send($users, new CatatanNotif($users->name));

        // event(new MyEvent('test'));
        // return back();

        $result = $catatan->accepted;
        dd($result);
        if (count($result['attached'])) {
            $catatan->user->notify(new CatatanNotif($catatan, auth()->user()));
        }
        // return back();

        // event(new CatatanNotif($request))

    }

    public function info()

    {
        $count = auth()->user()->unreadNotification->count();
        $list = auth()->user()->unreadNotification->limit(5)->get();

        $notifications = array(
            'count' => $count,
            'list' => $list
        );

        return response()->json(json_encode($notifications));
    }

    public function test()

    {
        // Notification::send(auth()->user(), new CatatanNotif(auth()->user()->id));
        // event(new MyEvent('testsss'));
        // redirect()->back();
    }

    public function toggle()
    {
        // $result = $catatan->accepted()->toggle($catatan->validitas);



        // if (count($result['attached'])) {
        //     $catatan->user->notify(new CatatanNotif($catatan, auth()->user()));
        // }
        if (auth()->user()) {
            // auth()->user()->not;
        }
    }

    public function mark(Request $request)
    {
        if (auth()->user()) {
            $catatan = auth()->user()->unreadNotifications;
            $catatan->markAsRead();
        }
        $name = auth()->user()->name;
        $nim = auth()->user()->nim;
        $message = 'Semua Notifikasi Catatan dari User/Mahasiswa ' . $name . ' ' . $nim . ' Telah Dibaca';
        event(new MyEvent($message, null));
        return back();
    }
}