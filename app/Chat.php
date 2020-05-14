<?php


namespace App;


class Chat
{
    public static function talk($message, $authenticated) : String{
        $responseMessage = "I did not understand, can you say it in a different way?";
        $matches = [];

        if(!$authenticated) {
            preg_match('/deposit|withdraw|balance|default currency/', $message, $matches);
        }

        return $responseMessage;
    }
}
