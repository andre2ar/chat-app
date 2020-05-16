<?php


namespace App\Classes;


use App\Transactions;
use Illuminate\Support\Facades\DB;

class Chat
{
    public static function talk($message) : String {
        $user = Auth('sanctum')->user();
        $response_message = "I did not understand, can you say it in a different way?";
        $matches = [];

        $pattern = '/balance|deposit|withdraw|default currency/';
        preg_match($pattern, $message, $matches);
        if(!empty($matches)) {
            $response_message = self::account_chat($message, $user);
        }

        //Convert
        preg_match('/convert \d+ [a-zA-Z]{3} to [a-zA-Z]{3}/', $message, $matches);
        if(!empty($matches)) {
            $response_message = self::convert_chat($matches);
        }

        if(empty($matches)) {
            $response_message = self::general_chat($message);
        }

        return $response_message;
    }

    private static function account_chat($message, $user) : String {
        $responseMessage = "I did not understand, are you try to talk about your account?";

        //Balance
        preg_match('/balance/', $message, $matches);
        if(!empty($matches)) {
            $responseMessage = "Your balance is: $user->currency $user->balance. ";
        }

        //Deposit
        preg_match('/deposit \d+/', $message, $matches);
        if(!empty($matches)) {
            $data_exploded = explode(' ', $matches[0]);
            $amount = $data_exploded[1];

            $transaction = Transactions::create($amount, $user->id, 'IN', $user->currency);

            $user->balance += $transaction->amount;
            $user->save();

            $responseMessage = "You new balance after this deposit: $user->currency $user->balance. ";
        }

        // Deposit currency
        preg_match('/deposit \d+ [a-zA-Z]{3}/', $message, $matches);
        if(!empty($matches)) {
            $data_exploded = explode(' ', $matches[0]);
            $amount = $data_exploded[1];
            $currency = $data_exploded[2];

            if(CurrencyConverter::validate_currency($currency)) {
                $deposit_value = CurrencyConverter::convert($currency, $user->currency, $amount);
                $transaction = Transactions::create($deposit_value, $user->id, 'IN', $user->currency);

                $user->balance += $transaction->amount;
                $user->save();

                $responseMessage = "You new balance after this deposit: $user->currency $user->balance. ";
            } else {
                $responseMessage = "Invalid currency";
            }
        }

        //Withdraw
        preg_match('/withdraw \d+/', $message, $matches);
        if(!empty($matches)) {
            $str = explode(' ', $matches[0]);
            $amount = $str[1];

            if( ($user->balance - $amount) >= 0.0 ) {
                $transaction = Transactions::create($amount, $user->id, 'OUT', $user->currency);

                $user->balance -= $transaction->amount;
                $user->save();

                $responseMessage = "You new balance after this withdraw: $user->currency $user->balance. ";
            } else {
                $responseMessage = "Not enough funds. Your balance is: $user->currency $user->balance";
            }
        }

        //Set default currency
        preg_match('/set default currency as [a-zA-Z]{3}/', $message, $matches);
        if(!empty($matches)) {
            $data_exploded = explode(' ', $matches[0]);
            $to = strtoupper($data_exploded[4]);

            if(CurrencyConverter::validate_currency($to)) {
                $new_balance = CurrencyConverter::convert($user->currency, $to, $user->balance);

                try{
                    DB::beginTransaction();
                    //Withdraw
                    $transaction = Transactions::create($user->balance, $user->id, 'OUT', $user->currency);

                    $user->balance -= $transaction->amount;
                    $user->save();

                    //Deposit
                    $transaction = Transactions::create($new_balance, $user->id, 'IN', $user->currency);

                    $user->currency = $to;
                    $user->balance = $transaction->amount;
                    $user->save();
                } catch (\Exception $exception) {
                    DB::rollBack();
                } finally {
                    DB::commit();
                }

                $responseMessage = "Your balance where converted to $to. Your new balance: $user->currency $user->balance";
            } else {
                $responseMessage = "Please provide a valid currency";
            }
        }

        return $responseMessage;
    }

    private static function convert_chat($matches) : String {
        $data_exploded = explode(' ', $matches[0]);
        $from = strtoupper($data_exploded[2]);
        $to = strtoupper($data_exploded[4]);
        $amount = $data_exploded[1];

        if(
            CurrencyConverter::validate_currency($from) &&
            CurrencyConverter::validate_currency($to) &&
            is_numeric($amount)
        ) {
            $converted_amount = CurrencyConverter::convert($from, $to, $amount);
            $converted_amount = number_format($converted_amount, 2);

            $amount = number_format($amount, 2);
            $responseMessage = "$from $amount correspond approximately to $to $converted_amount";
        } else {
            $responseMessage = "Please provide a valid amount and valid currencies";
        }

        return $responseMessage;
    }

    private static function general_chat($message) : String{
        $message = strtolower(trim($message));
        $responses = [
            'hi' => 'Hi, how can I help you?',
            'what can you do?' => 'I can help you with your account.',
            'what is your name?' => 'My name is André.',
        ];

        return $responses[$message] ?? "I'm sorry, I can not understand.";
    }
}
