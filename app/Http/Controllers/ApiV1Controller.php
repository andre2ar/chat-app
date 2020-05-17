<?php

namespace App\Http\Controllers;

use App\Classes\Chat;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ApiV1Controller extends Controller{
    public function talk(Request $request) {
        $authenticated = Auth('sanctum')->check();
        $message = strtolower($request->message);
        $responseMessage = "";
        $matches = [];

        if(!$authenticated) {
            preg_match('/deposit|withdraw|balance|default currency/', $message, $matches);
            if(!empty($matches)) {
                return response()->json([
                    'message' => "You must be logged in to perform this operation, try typing 'login'",
                ]);
            }

            preg_match('/signin|login|registrate|sign up/', $message, $matches);
            if(!empty($matches)) {
                return response()->json([
                    'message' => "Type you email followed by your password, like this: email@example.com ******",
                ]);
            }

            /* {E-mail} {password} */
            preg_match('/\S+@[^\s.]+\.[^.\s]+ (\w+)/', $message, $matches);
            if(!empty($matches)) {
                $message = explode(' ', $request->message);
                $email = $message[0];
                $password = $message[1];

                $user = User::where('email', $email)->first();

                if (! $user) {
                    $user = User::create([
                        'email' => $email,
                        'password' => Hash::make($password),
                    ]);
                } else if(! Hash::check($password, $user->password)) {
                    return response()->json([
                        'message' => "Wrong email or password, please try again",
                    ]);
                }

                $device_name = $request->device_name ?? 'spa';
                return response()->json([
                    'message' => "Hi $email!",
                    'token' => $user->createToken($device_name)->plainTextToken
                ]);
            }

            $responseMessage = Chat::talk($message);
        } else {
            preg_match('/signin|login|registrate|sign up/', $message, $matches);
            if(!empty($matches)) {
                return response()->json([
                    'message' => "You already logged in",
                ]);
            }

            $responseMessage = Chat::talk($message);
        }

        return response()->json([
            'message' => $responseMessage,
        ]);
    }
}
