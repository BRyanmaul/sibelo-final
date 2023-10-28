<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        {{-- @vite(['resources/scss/app.sass', 'resources/js/app.js']) --}}
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])

        <!-- Trix Editor -->
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.0/dist/trix.css">
        <script type="text/javascript" src="https://unpkg.com/trix@2.0.0/dist/trix.umd.min.js"></script>
        <style>
          trix-toolbar [data-trix-button-group="file-tools"] {
            display: none;
          }
          trix-editor {
            /* background-color: coral; */
            /* border: 30ch */
            @apply bg-base-300
          }
        </style>

        <!-- Pusher -->
        <script src="https://js.pusher.com/8.0.1/pusher.min.js"></script>
        <script>
          
            //  Enable pusher logging - don't include this in production
            Pusher.logToConsole = true;
        
            var pusher = new Pusher('764fc5ecc3dac8c33cc1', {
              cluster: 'ap1'
            });
        
            var channel = pusher.subscribe('my-channel');
            channel.bind('my-event', function(data) {
              (JSON.stringify(data));
            });
          </script>
        @inertiaHead
        @vite('resources/js/app.jsx')
    </head>
    <body class="font-sans antialiased">
        @routes
        @inertia
    </body>
</html>
