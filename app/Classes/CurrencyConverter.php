<?php


namespace App\Classes;


use Illuminate\Support\Facades\Http;

class CurrencyConverter
{
    private static $url = 'http://data.fixer.io/api/';
    private static $api_key = 'access_key=2d5677fa9d296e45d24e4f00341c1a5d';

    public static function currency_list() {
        $url = self::$url.'symbols?'.self::$api_key;
        $response = Http::get($url);

        return $response['symbols'];
    }

    public static function validate_currency($currency) {
        $currency_list = self::currency_list();
        $currency = strtoupper($currency);

        return isset($currency_list[$currency]);
    }

    public static function convert($from, $to, $amount) {
        $url = self::$url.'latest?'.self::$api_key;
        $response = Http::get($url);

        $current_exchange_rate = $response['rates'][strtoupper($from)];
        $in_base = $amount / $current_exchange_rate;

        return $in_base * $response['rates'][strtoupper($to)];
    }
}
