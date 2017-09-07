const gulp = require('gulp');
const pug  = require('gulp-pug');

//styles
const sass          = require('gulp-sass');
const rename        = require('gulp-rename');
const sourcemaps    = require('gulp-sourcemaps');

const paths = {
    root: './build',
    templates: {
        pages: 'app/templates/pages/*.pug',
        src: 'app/templates/**/*.pug',
        dest: 'build/'
    },
    styles: {
        src: 'app/styles/**/*.scss',
        dest: 'build/styles/'
    }
}

//pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({ pretty:true}))
        .pipe(gulp.dest(paths.root));
}

//scss
function styles() {
    return gulp.src('./app/styles/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: 'min'}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(paths.styles.dest));
}

exports.templates = templates;
exports.styles    = styles;
