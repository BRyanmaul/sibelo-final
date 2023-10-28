<?php

namespace App\Notifications;

use App\Models\Catatan;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Notifiable;

class CatatanNotif extends Notification
{
    use Queueable, Notifiable;
    protected $catatan, $user;
    /**
     * Create a new notification instance.
     */
    public function __construct($catatans)
    {
        $this->catatan = $catatans;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {

        // foreach ($this->catatan as $catatan)
        // ddd($catatan->user->name);
        return [
            // 'header' => 'Catatan yang diterima',
            'title' => 'Catatan Anda Telah Diterima',
            'id_catatan' => $this->catatan->id,
            'catatan_beasiswa' => $this->catatan->nama_beasiswa,
            'penyelenggara_beasiswa' => $this->catatan->penyelenggara_beasiswa,
            'catatan_lomba' => $this->catatan->nama_lomba,
            'nama_prestasi ' => $this->catatan->prestasi,
            'time' => now(),
            'user_name' => $this->catatan->user->name,
            'user_nim' => $this->catatan->user->nim,
            'validitas' => $this->catatan->validitas,
        ];
    }
}