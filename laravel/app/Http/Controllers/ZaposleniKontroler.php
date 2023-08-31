<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ZaposleniKontroler extends Controller
{
    public function zaposleni()
    {
        $zaposleni = DB::table('zaposleni')
            ->where('first_name', 'not like', 'admin')
            ->get();

        return response()->json([
            'status' => 200,
            'zaposleni' => $zaposleni
        ]);
    }



    public function zaposleniSearch($input)
    {
        $zaposleni = DB::table('zaposleni')
            ->where('first_name', 'like', "$input%")
            ->where('first_name', 'not like', 'admin')
            ->get();

        return response()->json([
            'status' => 200,
            'zaposleni' => $zaposleni
        ]);
    }




    public function zaposleniSort($sortiranje)
    {
        $zaposleni = DB::table('zaposleni')
            ->where('first_name', 'not like', 'admin')
            ->orderBy('kasnjenja', $sortiranje)
            ->get();

        $sortiranje == 'ASC' ? $sortiranje = 'DESC' : $sortiranje = 'ASC';

        return response()->json([
            'status' => 200,
            'zaposleni' => $zaposleni,
            'sortiranje' => $sortiranje
        ]);
    }




    public function zaposleniDelete($idZaposleni)
    {
        DB::table('zaposleni')
            ->where('id', $idZaposleni)
            ->delete();

        return response()->json([
            'status' => 200,
        ]);
    }
}