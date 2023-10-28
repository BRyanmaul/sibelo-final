const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#ea580c",
                secondary: "#fbbf24",
                ryan: "#bada52",
                kopi: "#c0ffee",
                dark: "#0f172a",
            },
            spacing: {
                13: "3.25rem",
            },
            fontFamily: {
                signika: ["Signika Negative"],
                explora: ["Explora"],
            },
            screens: {
                xs: "400px",
                "2xl": "1320px",
                "3xl": "1536px",
                "4xl": "2400px",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                gambar1: "url('/src/assets/pic.jpg')",
                gambar2: "url('/src/assets/xul.jpg')",
            },
        },
        blur: {
            xs: "2px",
        },
    },

    plugins: [require("@tailwindcss/forms"), require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#d97706",

                    secondary: "#0ea5e9",

                    accent: "#a3e635",

                    neutral: "#fef9c3",

                    "base-100": "#fed7aa",

                    info: "#3ABFF8",

                    success: "#36D399",

                    warning: "#FBBD23",

                    error: "#F87272",
                },
            },
        ],
    },
    // daisyui: {
    //   styled: true,
    //   themes: true,
    //   base: true,
    //   utils: true,
    //   logs: true,
    //   rtl: false,
    //   prefix: "",
    //   darkTheme: "dark",
    // },
};
