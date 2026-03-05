/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Noto Serif KR"', 'serif'],
                sans: ['"Pretendard"', '"Noto Sans KR"', 'sans-serif'],
            },
            colors: {
                gold: {
                    50: '#fdf8ed',
                    100: '#f9edcc',
                    200: '#f3d994',
                    300: '#ecc55c',
                    400: '#e7b535',
                    500: '#de9a1e',
                    600: '#c47716',
                    700: '#a35616',
                    800: '#854419',
                    900: '#6e3918',
                },
                cream: {
                    50: '#fefcf7',
                    100: '#fdf6e8',
                    200: '#fbedd0',
                    300: '#f7dfa9',
                    400: '#f2ca79',
                },
                sage: {
                    50: '#f4f7f4',
                    100: '#e2eae1',
                    200: '#c5d5c3',
                    300: '#a0b89d',
                    400: '#7a9a76',
                    500: '#5c7e58',
                },
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'envelope-open': 'envelopeOpen 1.2s ease-in-out forwards',
                'letter-rise': 'letterRise 0.8s ease-out 0.6s forwards',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'scale-in': 'scaleIn 0.5s ease-out forwards',
                'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                envelopeOpen: {
                    '0%': { transform: 'rotateX(0deg)' },
                    '100%': { transform: 'rotateX(180deg)' },
                },
                letterRise: {
                    '0%': { opacity: '0', transform: 'translateY(50px)' },
                    '100%': { opacity: '1', transform: 'translateY(-30px)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.8)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                bounceSoft: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
            },
        },
    },
    plugins: [],
}
