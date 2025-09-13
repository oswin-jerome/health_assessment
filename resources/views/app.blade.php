<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <!-- Primary Meta Tags -->
    <meta name="title" content="AyushMitra - Health Assessment" />
    <meta name="description"
        content="AyushMitra - Health Assessment is a web-based platform designed to evaluate and track your health status. It provides personalized health assessments, lifestyle recommendations, and insights based on user inputs. Whether you're monitoring fitness, wellness, or specific health parameters, AyushMitra helps you stay informed and make better health decisions" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ayushmitra.com/" />
    <meta property="og:title" content="AyushMitra - Health Assessment" />
    <meta property="og:description"
        content="AyushMitra - Health Assessment is a web-based platform designed to evaluate and track your health status. It provides personalized health assessments, lifestyle recommendations, and insights based on user inputs. Whether you're monitoring fitness, wellness, or specific health parameters, AyushMitra helps you stay informed and make better health decisions" />
    <meta property="og:image" content="https://ayushmitra.com/diet.jpg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://ayushmitra.com/" />
    <meta property="twitter:title" content="AyushMitra - Health Assessment" />
    <meta property="twitter:description"
        content="AyushMitra - Health Assessment is a web-based platform designed to evaluate and track your health status. It provides personalized health assessments, lifestyle recommendations, and insights based on user inputs. Whether you're monitoring fitness, wellness, or specific health parameters, AyushMitra helps you stay informed and make better health decisions" />
    <meta property="twitter:image" content="https://ayushmitra.com/diet.jpg" />

    <!-- Meta Tags Generated with https://metatags.io -->

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx'])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
