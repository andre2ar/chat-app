<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    public static function create($amount, $user_id, $type, $currency) {
        $transaction = new Transactions();

        $transaction->amount = $amount;
        $transaction->user_id = $user_id;
        $transaction->type = $type;
        $transaction->currency = $currency;

        $transaction->save();

        return $transaction;
    }
}
