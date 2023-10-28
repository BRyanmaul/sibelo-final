<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MyEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public $message, $catatan;
    public function __construct($message, $catatan)
    {

        $this->message = $message;
        $this->catatan = $catatan;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            // new PrivateChannel('channel-name'),
            'my-channel'
        ];
    }

    public function broadcastAs()
    {
        return 'my-event';
    }

    public function broadcastWith(): array
    {
        if ($this->catatan != null) {
            return [
                'id_catatan' => $this->catatan->id,
                'user_name' => $this->catatan->user->name,
                'user_nim' => $this->catatan->user->name,
                'Nama Catatan Beasiswa' => $this->catatan->nama_beasiswa,
                'Nama Penyelenggara Beasiswa' => $this->catatan->penyelenggara_beasiswa,
                'Nama Catatan Lomba' => $this->catatan->nama_lomba,
                'Nama Prestasi ' => $this->catatan->prestasi,
                'time' => now(),
                'validasi' => $this->catatan->validitas,
            ];
        } else return [
            'Keterangan' => 'Semua Notifikasi Catatan/Pengajuan berhasil ditandai terbaca'
        ];
    }

    // public function broadcastWhen(): bool
    // {
    //     return $this->order->value > 100;
    // }
}