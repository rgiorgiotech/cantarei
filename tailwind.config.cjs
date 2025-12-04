/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                // Mettiamo Outfit come primo della lista "sans".
                // Tailwind usa 'font-sans' come default per quasi tutto.
                sans: ['"Outfit"', ...defaultTheme.fontFamily.sans],

                // Teniamo il serif di fallback se proprio volessimo usarlo in futuro, ma vuoto per ora
                serif: [...defaultTheme.fontFamily.serif],
            },
            colors: {
                background: {
                    primary: '#EBE5D9',
                    secondary: '#F2EDE4',
                },
                text: {
                    primary: '#2C2C2C',
                },
                accent: {
                    primary: '#8B4513',
                    hover: '#6B3410',
                },
                footer: {
                    bg: '#2C2C2C',
                    text: '#F2EDE4',
                },
                btn: {
                    from: '#B17A4F',
                    to: '#8B4513',
                    hoverFrom: '#96663F',
                    hoverTo: '#6B3410',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};