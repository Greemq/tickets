<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if (Auth::attempt(['password' => $request->password, 'email' => $request->email])) {
            $user = Auth::user();
            $token = $user->createToken('auth_token');
            return response()->json([
                'success' => true,
                'data' => [
                    'token' => $token->accessToken,
                    'user' => $user,
                    'expires_at' => $token->token->expires_at->diffInSeconds(Carbon::now())
                ]], 200);

        } else {
            return response()->json([
                'success' => false,
                'data' => [
                    'errors' => ['user' => ['Incorrect phone number or password']]
                ]], 401);
        }
    }

}
