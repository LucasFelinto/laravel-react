const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// webpack.mix.js
const path = require("path");

mix.webpackConfig({
    resolve: {
        alias: {
            ziggy: path.resolve("vendor/tightenco/ziggy/src/js/route.js")
        }
    }
});

mix.react("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);
