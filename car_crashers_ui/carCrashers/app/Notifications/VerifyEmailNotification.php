<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

class VerifyEmailNotification extends VerifyEmail
{
    public function toMail($notifiable): MailMessage
    {
        $verificationUrl = $this->verificationUrl($notifiable);

        return (new MailMessage)
            ->subject('Egiaztatu zure posta elektronikoa')
            ->greeting('Kaixo ' . $notifiable->name . '!')
            ->line('Mesedez, egin klik beheko botoian zure posta elektronikoko helbidea egiaztatzeko.')
            ->action('Egiaztatu e-posta', $verificationUrl)
            ->line('Ez baduzu konturik sortu, ez duzu ezer egin behar.')
            ->line('Esteka hau 60 minutu barru iraungiko da.')
            ->salutation("Ondo izan,\nCarCrashers Taldea");
    }
}