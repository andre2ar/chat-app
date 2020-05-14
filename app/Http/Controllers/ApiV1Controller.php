<?php

namespace App\Http\Controllers;

use App\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApiV1Controller extends Controller{
    public function talk(Request $request) {
        $message = strtolower($request->message);
        $responseMessage = "";
        $matches = [];

        if(!Auth::check()) {
            preg_match('/deposit|withdraw|balance|default currency/', $message, $matches);
            if(!empty($matches)) {
                return response()->json([
                    'message' => "You must be logged in to perform this operation, try typing 'login'",
                ]);
            }

            preg_match('/signin|login|registrate|signup/', $message, $matches);
            if(!empty($matches)) {
                return response()->json([
                    'message' => "Type you email followed by your password, like this: email@example.com ******",
                ]);
            }

            preg_match('/\S+@[^\s.]+\.[^.\s]+ (\w+)/', $message, $matches);
            if(!empty($matches)) {
                $message = explode(' ', $message);
                $email = $message[0];
                $password = $message[1];

                return response()->json([
                    'message' => "$email $password",
                    'matches' => $matches
                ]);
            }

            $responseMessage = Chat::talk($message, false);
        } else if(Auth::check()) {
            preg_match('/signin|login|registrate|signup/', $message, $matches);
            $responseMessage = "You already logged in";
        }

        return response()->json([
            'message' => $responseMessage,
            'matches' => $expected,
        ]);
    }
}
