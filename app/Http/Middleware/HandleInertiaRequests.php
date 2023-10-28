<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Database\Query\Builder;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // if (auth()->user()->unreadNotification) {
        //     $count = auth()->user()->unreadNotification->count();
        // }
        // if (auth()->user()->unreadNotification != null) {
        //     $counts = auth()->user()->unreadNotification;
        //     $list = auth()->user()->unreadNotification->limit(5)->get();
        // }
        // foreach ($request->user()->unreadNotifications as $notification) {
        //     $notification->type;
        // }
        // $count = Auth::user()->unreadNotifications;
        if ($request->user()) {
            $notif = $request->user()->unreadNotifications;
            foreach ($notif as $list);
        }
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],

            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                    'query' => $request->query()
                ]);
            },

            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],

            'unreadNotifications' => $request->user() ? [
                'count' => $notif->count(),
                'list' => $notif->take(5),
                'type' => ''
            ] : null,

            'readedNotifications' => $request->user() ? [
                'count' => $request->user()->readNotifications->count(),
                'list' => $request->user()->readNotifications->take(5),
            ] : null
        ]);
    }
}