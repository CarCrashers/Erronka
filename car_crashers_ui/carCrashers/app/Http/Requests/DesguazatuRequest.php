<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DesguazatuRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'matrikula' => strtoupper((string) $this->input('matrikula')),

            'egoera' => $this->input('egoera') === 'null' ? null : $this->input('egoera'),
            'documentacionOk' => $this->input('options-outlined'),
        ]);
    }

    public function rules(): array
    {
        $currentYear = now()->year;

        return [
            'emaila'      => ['required', 'email', 'max:254'],
            'izenAbizena' => ['required', 'string', 'max:255'],
            'telefonoa'   => ['required', 'string', 'max:20'],

            'matrikula' => ['required', 'regex:/^[0-9]{4}[A-Z]{3}$/'],
            'marka'     => ['required', 'string', 'max:100'],
            'modelo'    => ['required', 'string', 'max:100'],
            'urtea'     => ['required', 'integer', 'digits:4', 'min:1900', "max:$currentYear"],
            'kilometro' => ['required', 'integer', 'min:0', 'max:2000000'],
            'egoera'    => ['required', 'in:bikaina,ongi,nahikoa'],

            'options-outlined' => ['required', 'in:0,1'],

            'deskribapena' => ['nullable', 'string', 'max:1000'],

            'argazkiak'   => ['required', 'array', 'min:1', 'max:10'],
            'argazkiak.*' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'], // 5MB
        ];
    }

    public function messages(): array
    {
        return [
            'emaila.required' => 'Emaila beharrezkoa da.',
            'emaila.email'    => 'Emaila ez da zuzena.',

            'izenAbizena.required' => 'Izen-abizenak beharrezkoak dira.',
            'telefonoa.required'   => 'Telefonoa beharrezkoa da.',

            'matrikula.required' => 'Matrikula beharrezkoa da.',
            'matrikula.regex'    => 'Matrikula formatua: 0000 ABC.',

            'urtea.max' => 'Urtea ezin da gaurkoa baino handiagoa.',
            'egoera.required' => 'Egoera aukeratu behar duzu.',
            'egoera.in'       => 'Egoera aukeratu behar duzu.',

            'options-outlined.required' => 'Dokumentazioa aukeratu behar duzu.',
            'options-outlined.in'       => 'Dokumentazioa aukeratu behar duzu.',

            'argazkiak.required' => 'Gutxienez argazki bat bidali behar duzu.',
            'argazkiak.*.image'  => 'Fitxategiek irudiak izan behar dira (JPG/PNG/WEBP).',
            'argazkiak.*.max'    => 'Argazki bakoitza 5MB baino txikiagoa izan behar da.',
        ];
    }
}
