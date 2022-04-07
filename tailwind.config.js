const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './node_modules/tw-elements/dist/js/**/*.js',
    ],

    theme: {
        extend: {
            colors: {
                mcmaster: {
                    burgundy: '#7a003c',
                    gray: '#5b6770'


                },
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('tw-elements/dist/plugin')
    ],

};
