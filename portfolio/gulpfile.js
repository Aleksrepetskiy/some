const gulp          = require('gulp');
const pug           = require('gulp-pug');
const del           = require('del');
const browserSync   = require('browser-sync').create();

//styles
const sass          = require('gulp-sass');
const rename        = require('gulp-rename');
const sourcemaps    = require('gulp-sourcemaps');

//scripts
const gulpWebpack   = require('gulp-webpack');
const webpack       = require('webpack');
const webpackConfig   = require('./webpack.config.js');

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
    },
    images: {
        src: 'app/images/**/*.*',
        dest: 'build/images/'
    },
    scripts: {
        src: 'app/js/**/*.js',
        dest: 'build/js/'
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
        .pipe(rename({suffix: '-min'}))
        .pipe(gulp.dest(paths.styles.dest));
}
//img
function images(){
    return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}
//clear
function clean() {
    return del(paths.root)
}
//webpack
function scripts() {
    return gulp.src('./app/js/script.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}
//watcher src
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
}
//browserSync
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload );
}

exports.templates = templates;
exports.styles    = styles;
exports.clean     = clean;

gulp.task('default', gulp.series(
    gulp.parallel(styles, templates, scripts, images),
    gulp.parallel(watch, server)
));

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, templates, images)
));
