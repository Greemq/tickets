<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;


    protected $fillable = ['email', 'barcode', 'code', 'phone','fio'];

    public function scopeFilter($query, $filter)
    {
        if (isset($filter['email']))
            $query->where('email', 'LIKE', '%' . $filter['email'] . '%');
        return $query;
    }
}
