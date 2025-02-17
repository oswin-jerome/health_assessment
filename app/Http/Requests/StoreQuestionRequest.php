<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {

        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "question" => "string|required",
            "question_hi" => "string|required",
            "question_kn" => "string|required",
            "vata" => "boolean|required",
            "pitta" => "boolean|required",
            "kapha" => "boolean|required",
            "vata_neg" => "boolean|required",
            "pitta_neg" => "boolean|required",
            "kapha_neg" => "boolean|required",
        ];
    }
}
