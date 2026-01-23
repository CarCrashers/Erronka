<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DesguazatuRequest extends FormRequest
{
    
    public function authorize(): bool
    {
        return true;
    }


    protected function prepareForValidation()
    {
        $this->merge([
            'documentacionOk' => filter_var($this->input('documentacionOk'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false,
        ]);
    }

    public function rules(): array
    {
        $currentYear = now()->year;

        return [
            // Kontaktu datuak
            'nombreCompleto' => ['required', 'string', 'max:255'],
            'email'          => ['required', 'email'],
            'telefono'       => ['required', 'string', 'max:20'],

            // Kotxe datuak
            'marca'     => ['required', 'string', 'max:100'],
            'modelo'    => ['required', 'string', 'max:100'],
            'ano'       => ['required', 'integer', 'digits:4', 'min:1900', "max:$currentYear"],
            'estado'    => ['required', 'in:bikaina,ongi,nahikoa'],
            
            // Dokumentazio checkbox/radio
            'documentacionOk' => ['required', 'boolean'],

            // Deskribapena 
            'descripcion' => ['nullable', 'string', 'max:1000'],

            'fotos'       => ['required', 'array', 'min:1'],
            'fotos.*'     => ['file', 'image', 'mimes:jpg,jpeg,png', 'max:4096'],
        ];
    }

    public function messages(): array
    {
        return [
            'nombreCompleto.required' => 'Izen-abizenak beharrezkoak dira.',
            'email.required' => 'Emaila beharrezkoa da.',
            'email.email' => 'Emaila ez da zuzena.',
            'marca.required' => 'Marka aukeratu behar duzu.',
            'ano.max' => 'Urtea ezin da gaurkoa baino handiagoa.',
            'estado.in' => 'Egoera aukeratu behar duzu.',
            'documentacionOk.boolean' => 'Dokumentazio egoera zehaztu behar duzu.',
            'fotos.required' => 'Gutxienez argazki bat bidali behar duzu.',
            'fotos.*.image' => 'Fitxategiak irudiak izan behar dira (JPG/PNG).',
        ];
    }
}
