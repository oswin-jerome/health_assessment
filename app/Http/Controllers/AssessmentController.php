<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAssessmentRequest;
use App\Http\Requests\SubmitAssessmentRequest;
use App\Http\Requests\UpdateAssessmentRequest;
use App\Http\Resources\AssessmentAnswerResource;
use App\Http\Service\InstaMojoService as ServiceInstaMojoService;
use App\Models\Assessment;
use App\Models\AssessmentAnswer;
use App\Models\Question;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class AssessmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        /**
         * @var User
         */
        // $user = Auth::user();
        // return Inertia::render("Assessments/Index", [
        //     "assessments" => $user->assessments()->orderBy("created_at", "desc")->get()
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Assessments/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAssessmentRequest $request)
    {
        $data = $request->validated();
        $assessment = new Assessment();
        $assessment->name = $data['name'];
        $assessment->age = $data['age'];
        $assessment->phone = $data['phone'];
        $assessment->gender = $data['gender'];
        // $assessment->user_id = Auth::id();

        $assessment->save();

        return redirect(route("assessments.edit", $assessment));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function submit(Assessment $assessment, SubmitAssessmentRequest $request, ServiceInstaMojoService $instaMojoService)
    {
        $data = $request->validated();
        $pitta = 0;
        $vata = 0;
        $kapha = 0;
        foreach ($data['answers'] as $key => $value) {
            // FIXME: null check
            $question = Question::find($key);
            $assessmentAnswer =  new AssessmentAnswer();
            $assessmentAnswer->question_id = $question->id;
            $assessmentAnswer->assessment_id = $assessment->id;
            $assessmentAnswer->answer = $value;
            $assessmentAnswer->save();

            if ($value) {
                if ($question->pitta) {
                    $pitta++;
                }
                if ($question->vata) {
                    $vata++;
                }
                if ($question->kapha) {
                    $kapha++;
                }
            }
        }

        $assessment->pitta = $pitta;
        $assessment->vata = $vata;
        $assessment->kapha = $kapha;
        $assessment->total_questions = count($data['answers']);

        $assessment->completed = true;
        $assessment->save();
        try {
            $response = $instaMojoService->create_payment_request($assessment);
        } catch (Exception $e) {
            dd($e);
        }

        return Inertia::location($response["longurl"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Assessment $assessment)
    {

        if ($assessment->payment_status != "paid") {
            return redirect("404");
        }

        return Inertia::render("Assessments/Show", [
            "answers" => AssessmentAnswerResource::collection($assessment->assessmentAnswers),
            "assessment" => $assessment
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Assessment $assessment)
    {
        return Inertia::render("Assessments/Test", [
            "questions" => Question::all(),
            "assessment" => $assessment
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAssessmentRequest $request, Assessment $assessment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Assessment $assessment)
    {
        //
    }
    /**
     * Handle callback from Instamojo.
     */
    public function paymentCallback(Assessment $assessment, Request $request, ServiceInstaMojoService $instaMojoService)
    {
        if ($request->get("status") == "Failed") {
            // $appointment->delete();
            $assessment->payment_status = "failed";
            $assessment->instamojo_payment_id = $request->get("payment_id");
            $assessment->save();

            return response([], 200);
        }

        $assessment->payment_status = "paid";
        $assessment->instamojo_payment_id = $request->get("payment_id");
        $assessment->save();
        return response([], 200);
    }
}
