<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Milon\Barcode\Facades\DNS1DFacade;

class TicketController extends Controller
{
    public function index(Request $request)
    {
        $tickets = Ticket::filter($request->all())->latest()->paginate(20);
        return $tickets;
    }

    public function generateBarcode(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'phone' => 'required|digits:11|starts_with:77',
            'fio' => 'required|min:1',
        ]);
        $code = '';
        for ($i = 1; $i < 12; $i++) {
            $code .= mt_rand(0, 9);
        }
        $barcode = base64_encode(base64_decode(DNS1DFacade::getBarcodePNG($code, "CODABAR")));

        $item = new Ticket();
        $email = $request->email;
        $item->email = $email;
        $item->barcode = $barcode;
        $item->code = $code;
        $item->fio = $request->fio;
        $item->phone = $request->phone;
        $item->save();
        $email = new SendMail($item);
        Mail::to($item->email)->send($email);
        return ['success' => true];
    }

    public function barcode()
    {
        $ticket = Ticket::first();
        if (!isset($ticket)) {
            return response()->json(['success' => false], 422);
        }
        $code = $ticket->barcode;
        return view('barcode', compact('code'));
    }
}
