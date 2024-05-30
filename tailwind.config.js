/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend:{
            colors: {
                'faltisan-darkblue': '#3E3BCC',
                'faltisan-mediumblue': '#3772FF',
                'faltisan-lightblue': '#39A7FF'
            }
        } 
    },
    plugins: [],
};
