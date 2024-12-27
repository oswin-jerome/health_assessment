<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Assessment extends Model
{

    public function assessmentAnswers()
    {
        return $this->hasMany(AssessmentAnswer::class);
    }
}
