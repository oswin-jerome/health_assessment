<?php

use App\Http\Controllers\Admin\QuestionController;
use App\Http\Controllers\AssessmentController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\GuardAdminMiddleware;
use App\Models\Assessment;
use App\Models\Question;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name("home");

Route::get('/test', function () {
    return Inertia::render('Test', [
        "questions" => Question::all()
    ]);
});

Route::get('/admin', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', GuardAdminMiddleware::class])->name('dashboard');

Route::prefix("admin")->as("admin.")->group(function () {
    Route::resource("questions", QuestionController::class);
    Route::get("assessments", function () {
        $assessments = Assessment::orderBy("created_at", "desc")->get();
        return Inertia::render("Admin/Assessments/Index", [
            "assessments" => $assessments
        ]);
    })->name("assessments.index");
})->middleware(['auth', 'verified', GuardAdminMiddleware::class])->name('admin');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource("assessments", AssessmentController::class);
Route::post("assessments/{assessment}", [AssessmentController::class, "submit"])->name("assessments.submit");
Route::post("assessments/{assessment}/payment/callback", [AssessmentController::class, "paymentCallback"])
    ->withoutMiddleware([VerifyCsrfToken::class])
    ->name("assessments.instamojo.callback");

Route::get("diet-plan", function (Request $request) {

    if (!$request->has("element")) {
        return response(null, 404);
    }
    $element = $request->get("element");

    if ($element != "kapha" && $element != "pitta" && $element != "vata") {
        return response(null, 404);
    }

    return response()->download(storage_path("app/diet/" . $element . ".pdf"));
})->name("download");

Route::get('/set-locale/{locale}', function ($locale) {
    session(['locale' => $locale]);
    return redirect()->back();
});


require __DIR__ . '/auth.php';
