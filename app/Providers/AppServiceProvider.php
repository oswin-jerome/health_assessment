<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        URL::forceRootUrl(env("APP_URL"));
        URL::forceScheme(env("APP_SCHEMA", "https"));
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Inertia::share('translations', function () {
            $locale = App::getLocale();
            $path = base_path("lang/{$locale}.json");

            if (File::exists($path)) {
                return json_decode(File::get($path), true);
            }

            return [];
        });

        Inertia::share('lang', function () {
            $locale = App::getLocale();
            return $locale;
        });

        JsonResource::withoutWrapping();
    }
}
