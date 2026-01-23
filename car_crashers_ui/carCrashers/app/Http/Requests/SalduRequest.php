<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SalduRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // erabiltzaile autentikatuek bakarrik
        return auth()->check();
    }

    /**
     * Prepare the data for validation. 
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'options-outlined' => filter_var($this->input('options-outlined'), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        $currentYear = now()->year;

        return [
            // kontaktu datuak (sesiotik hartuta)
            'emaila'      => ['required', 'email'],
            'izenAbizena' => ['required', 'string', 'max:255'],
            'telefonoa'   => ['required', 'string', 'max:20'],

            // ibilgailua
            'matrikula' => ['required', 'regex:/^[0-9]{4}[A-Z]{3}$/'],
            'marka'     => ['required', 'string', 'max:100'],
            'modelo'    => ['required', 'string', 'max:100'],
            'urtea'     => ['required', 'integer', 'digits:4', 'min:1900', "max:$currentYear"],
            'kilometro' => ['required', 'integer', 'min:0'],
            'egoera'    => ['required', 'in:bikaina,ongi,nahikoa'],

            // deskribapena
            'deskribapena' => ['nullable', 'string'],

            // dokumentazioa
            'options-outlined' => ['required', 'boolean'], 
            
            //argazkiak
            'argazkiak'   => ['required', 'array', 'min:1'],
            'argazkiak.*' => ['file', 'image', 'mimes:jpg,jpeg,png', 'max:4096'],
        ];
    }

    public function messages(): array
    {
        return [
            'matrikula.regex' => 'Matrikula formatuak 0000ABC izan behar du.',
            'urtea.max'       => 'Urtea ezin da izan gaurko urtea baino handiagoa.',
            'egoera.in'       => 'Egoera aukeratu behar duzu.',
            'options-outlined.required' => 'Dokumentazioa adierazi behar duzu.',
            'options-outlined.boolean'  => 'Dokumentazio balioa ez da zuzena.',
            'argazkiak.required'  => 'Gutxienez argazki bat bidali behar duzu.',
            'argazkiak.*.image'   => 'Argazkiak irudi motako fitxategiak izan behar dira.',
        ];
    }
}
