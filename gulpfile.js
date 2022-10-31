const gulp = require('gulp');
const { watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bs = require('browser-sync').create();
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');

function style (){
    return gulp.src('./src/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./'))
    .pipe(bs.stream())
}

function parallaxJS (){
    return gulp.src('./src/parallax.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(minify())
    .pipe(gulp.dest('./dist'))
    .pipe(bs.stream())
}

function codeJS (){
    return gulp.src('./src/script.js')
    .pipe(gulp.dest('./'))
    .pipe(bs.stream())
}

function html (){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./'))
    .pipe(bs.stream())
}

function startWatch (){
    bs.init({
        server: {
           baseDir: "./",
           index: "/index.html"
        }
    });

    watch(['./src/**.scss'], style);
    watch(['./src/**.js'], gulp.series(parallaxJS, codeJS));
    watch(['./src/index.html'], html);
}

exports.default = gulp.series(style, parallaxJS, codeJS, html, startWatch);