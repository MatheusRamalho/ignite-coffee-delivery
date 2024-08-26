import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
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

                'base-50': '#FFFFFF',
                'base-100': '#FAFAFA', // background
                'base-200': '#F3F2F2', // card
                'base-300': '#EDEDED', // input
                'base-400': '#E6E5E5', // button
                'base-500': '#D7D5D5', // hover
                'base-600': '#8D8686', // label
                'base-700': '#574F4D', // text
                'base-800': '#403937', // subtitle
                'base-900': '#272221', // title
                'base-950': '#231F1E', //
            },

            backgroundImage: {
                hero: "url('/hero-bg.png')",
            },
        },
    },
    plugins: [],
}
export default config
