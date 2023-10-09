/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            width: {
                container: '1440px',
            },
            padding: {
                base: '15px',
            },
        },
        colors: {
            primary: '#18a15c',
            gray66: '#666666',
            ...colors,
        },
        boxShadow: {
            base: '0 3px 10px rgba(0,0,0,.08)',
        },
        screens: {
            mb: '768px',
            tablet: '992px',
            desktop: '1200px',
        },
    },
    plugins: [],
};
