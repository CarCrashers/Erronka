<?php

namespace App\Http\Controllers;

use App\Models\Saskia;
use App\Models\SaskiaItem;
use App\Models\User;
use App\Models\Produktua;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;



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


    public function saveItem(Request $request, $matrikula)
    {
        $user = Auth::user();

        $saskia = Saskia::firstOrCreate(
            ['erab_id' => $user->id],
            ['erab_id' => $user->id]
        );

        $produktua = Produktua::where('matrikula', $matrikula)->firstOrFail();

        $existingItem = $saskia->itemak()
            ->where('produktu_id', $produktua->id)
            ->first();

        if ($existingItem) 
        {
            $existingItem->increment('kopurua');
        } 
        else 
        {
            $saskia->itemak()->create([
                'produktu_id'  => $produktua->id,
                'kopurua'      => 1,
                'prezioa_unit' => $produktua->prezioa ?? 0,
            ]);
        }

        return back()->with('success', 'Produktu gehitu da saskira!');
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

   public function buyItems()
{
    $user = Auth::user();

    $saskia = Saskia::where('erab_id', $user->id)->firstOrFail();

    $items = SaskiaItem::where('saskia_id', $saskia->id)
        ->with(['produktua'])
        ->get();

    if ($items->isEmpty()) {
        return back()->with('error', 'Saskia hutsik dago.');
    }

    DB::transaction(function () use ($items) {
        foreach ($items as $item) {
            $item->produktua->update(['egoera' => 'salduta']);

            $item->delete();
        }
    });

    return redirect()->route('saskia')->with('success', 
        'Mila esker CarCrashers-en erosteagatik! Zure produktuak jasotzeko prest daude desguazean.');
}

}
