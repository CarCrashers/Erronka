<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;




class UserController extends Controller
{
    // Mostrar todos los usuarios
    public function index()
    {
        return Inertia::render('erabiltzaileak', [
            'users' => User::latest()->get(),
        ]);
    }

    // Crear nuevo usuario
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'mota' => 'required|in:admin,user',
        ]);

        $validated['password'] = Hash::make($validated['password']);
        $validated['email_verified_at'] = now();

        User::create($validated);

        return redirect()->route('users')->with('success', 'Erabiltzailea ondo sortu da.');
    }

    // Actualizar usuario
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email|unique:users,email,' . $id,
            'mota' => 'nullable|in:admin,user',
            'password' => 'nullable|string|min:8',
        ]);

        if ($request->filled('password')) {
            $validated['password'] = Hash::make($validated['password']);
        } else {
            unset($validated['password']);
        }

        $user->update($validated);

        return redirect()->route('users')->with('success', 'Erabiltzailea ondo eguneratu da.');
    }


    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        // Validaciones específicas
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required', 
                'email', 
                Rule::unique('users')->ignore($user->id),
            ],
            'telefono' => ['nullable', 'string', 'max:20'],
        ]);

        // Guardar email anterior para comparar después del update
        $oldEmail = $user->email;

        // Actualizar datos
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'telefono' => $request->telefono,
        ]);

        // Si el email cambió respecto al valor anterior, anular verificación y enviar correo
        if ($oldEmail !== $user->email) {
            $user->email_verified_at = null;
            $user->save();
            $user->sendEmailVerificationNotification();
        }

        return back()->with('message', 'Profila eguneratua!');
    }

    // Eliminar usuario
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        // Prevenir que se elimine el único admin
        if ($user->mota === 'admin' && User::where('mota', 'admin')->count() <= 1) {
            return redirect()->route('users')->with('error', 'Ezin ditzakezu admin guztiak ezabatu.');
        }

        $user->delete();

        return redirect()->route('users')->with('success', 'Erabiltzailea ezabatu da ondo.');
    }
}
