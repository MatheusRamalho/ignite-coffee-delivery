/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontFamily: {
            baloo: ['Baloo 2, cursive'],
            roboto: ['Roboto, sans-serif'],
        },

        extend: {
            colors: {
                'primary-400': '#F1E9C9',
                'primary-500': '#DBAC2C',
                'primary-600': '#C47F17',

                'secondary-400': '#EBE5F9',
                'secondary-500': '#8047F8',
                'secondary-600': '#4B2995',
            },
        },
    },
    plugins: [],
}
