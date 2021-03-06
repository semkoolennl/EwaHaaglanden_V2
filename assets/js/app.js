/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/base/base.css';
import '../css/base/nav.css';
// import '../css/base/gradient_animation.css';
// import '../slick/slick.css';
// import '../slick/slick-theme.css';
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';
global.$ = global.jQuery = $;
import 'bootstrap'; 

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
 