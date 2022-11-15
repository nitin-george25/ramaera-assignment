/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                '3xs': '.5em',
                '2xs': '.625em',
                xs: '.875em',
                lg: '1.5em',
                xl: '2.125em',
            },
            fontFamily: {
                serif: 'Roboto, sans-serif',
            },
            colors: {
                brand: '#e55d01',
                'brand-2': '#f9d423',
            },
            textColor: {
                dark: '#45586B',
                'light-grey': '#8692A6',
            },
            backgroundColor: {
                primary: 'rgba(20,31,49,255)',
                brand: '#e55d01',
                'brand-2': '#f9d423',
                'light-grey': '#E8E8E8',
            },
            fontWeight: {
                reg: 400,
                md: 500,
                bold: 700,
            },
            borderWidth: {
                1: '1px',
            },
            borderColor: {
                dark: '#082F37',
                grey: '#E8E8E8',
            },
            borderRadius: {
                sm: '10px',
                lg: '30px',
            },
            lineHeight: {
                reg: '25px',
                lg: '40px',
                xl: '45px',
            },
            maxWidth: {
                xs: '14rem',
                sm: '20rem',
            },
            height: {
                1: '1px',
            },
            width: {
                x: '95%',
            },
        },
    },
    plugins: [],
};