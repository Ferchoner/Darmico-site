<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormUser extends Mailable
{
    use Queueable, SerializesModels;

    public $full_name;
    public $phone;
    public $email;
    public $message;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data = [])
    {
        $this->full_name = $data['fullname'] ?? null;
        $this->phone = $data['phone'] ?? null;
        $this->email = $data['email'] ?? null;
        $this->message = $data['message'] ?? null;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->from('contacto@darmico.com.mx', 'Darmico')
            ->subject('Muchas gracias por ponerte en contacto')
            ->view('mails.contact-user');
    }
}
