const gulp          = require('gulp');
const pug           = require('gulp-pug');
const del           = require('del');
const browserSync   = require('browser-sync').create();

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
    },
    images: {
        src: 'app/images/**/*.*',
        dest: 'build/images/'
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
//watcher src
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
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
    gulp.parallel(styles, templates, images),
    gulp.parallel(watch, server)
));

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, templates, images)
));
