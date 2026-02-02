<?php

namespace App\Http\Controllers;

use App\Models\Saskia;
use App\Models\SaskiaItem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SaskiaController extends Controller
{
    
     /* SASKIA */
    public function index()
    {
        $user = Auth::user();
        
        // FirstOrCreate saski BAKARRA IZATEKO
        $saskia = Saskia::firstOrCreate(
            ['erab_id' => $user->id],
            ['erab_id' => $user->id]
        );
        
        
        $items = SaskiaItem::where('saskia_id', $saskia->id)
            ->with(['produktua.kotxea', 'produktua.pieza'])
            ->get();
        
        // 3. Kalkulatu
        $total = $items->sum('prezioa_unit');        

        // 4. Datuak pasa
        return Inertia::render('saskia', [
            'saskia' => $saskia,
            'items' => $items,
            'total' => $total
        ]);
    }


   
    public function destroyItem(Request $request, $itemId)
    {
        $user = Auth::user();
        
        $item = SaskiaItem::where('id', $itemId)
                         ->whereHas('saskia', fn($q) => $q->where('erab_id', $user->id))
                         ->firstOrFail();
        
        $item->delete();
        
        return redirect()->route('saskia')->with('message', 'Produktua ezabatu da');
    }
}
