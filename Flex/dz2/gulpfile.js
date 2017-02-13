var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    plumber = require('gulp-plumber'), // Пропуск ошибок
    browserSync = require('browser-sync').create();

var config = {
    src: './src',
    build: './build',
    css: {
        src: '/precss/**/*.scss',
        dest: '/css/',
    },
    html: {
        src: '/**/*.html',
        dest: '/*.html'
    },
    js: {
        src: '/js/*.js',
        dest: '/js/'
    },
    img: {
        src: '/img/**/*.*',
        dest: '/img/'
    },
    fonts: {
        src: '/fonts/**/*.*',
        dest: '/css/'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

// Подчищаем build
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(config.src + config.html.dest) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(config.build)) //Выплюнем их в папку build
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('css:build', function () {
    gulp.src(config.src + config.css.src)
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 0.01%'],
            cascade: false
        }))
        // .pipe(cleanCSS())
        .pipe(gulp.dest(config.build + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('image:build', function () {
    gulp.src(config.src + config.img.src)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(config.build + config.img.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js:build', function () {
    gulp.src(config.src + config.js.src) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(config.build + config.js.dest)) //Выплюнем готовый файл в build
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('fonts:build', function() {
    gulp.src(config.build + config.fonts.src)
        .pipe(gulp.dest(config.build + config.fonts.dest));
});

gulp.task('build', [
    'html:build',
    'css:build',
    // 'js:build',
    'fonts:build',
    'image:build'
]);

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch(config.src + config.html.src, ['html:build']);
    gulp.watch(config.src + config.css.src, ['css:build']);
    gulp.watch(config.src + config.js.src, ['css:build']);
    gulp.watch(config.src + config.fonts.src, ['css:build']);
    gulp.watch(config.src + config.img.src, ['css:build']);
});

gulp.task('default', ['build', 'browserSync', 'watch']);
