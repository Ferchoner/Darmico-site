<?php

namespace App\Http\Controllers;

use App\Mail\ContactForm;
use App\Mail\ContactFormUser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PricingController extends Controller
{
    public function pricing(Request $request): JsonResponse
    {

        $validated = $request->validate([
            'fullname' => 'required|min:4|max:80',
            'email' => 'required|email:rfc,dns',
            'phone' => 'required|min:9|max:11',
            'message' => 'nullable|min:5|max:255'
        ]);

        Mail::to('contacto@colin-cordoba.com.mx')->bcc('rasoner@gmail.com')->send(new ContactForm($validated));
        Mail::to($validated['email'])->bcc('rasoner@gmail.com')->send(new ContactFormUser($validated));

        return response()->json([
            'status' => 'Done'
        ], '200');
    }
}
