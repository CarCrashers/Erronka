<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => [
                'required',
                'string',
                'confirmed',
                Password::min(8)
                    ->mixedCase()
                    ->numbers()
                    ->symbols(),
            ],
        ];
    }
    
    public function messages(): array
    {
        return [
            'name.required' => 'Izena derrigorrezkoa da.',
            'email.required' => 'E-posta derrigorrezkoa da.',
            'email.unique' => 'E-posta hau dagoeneko erregistratuta dago.',
            'password.required' => 'Pasahitza derrigorrezkoa da.',
            'password.confirmed' => 'Pasahitzak ez datoz bat.',
            'password.min' => 'Pasahitzak gutxienez 8 karaktere izan behar ditu.',
            'password.mixed_case' => 'Pasahitzak maiuskulak eta minuskulak izan behar ditu.',
            'password.numbers' => 'Pasahitzak zenbakiak izan behar ditu.',
            'password.symbols' => 'Pasahitzak ikurrak izan behar ditu.',
        ];
    }
}