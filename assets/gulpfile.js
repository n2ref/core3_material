const gulp     = require('gulp');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS   = require('gulp-clean-css');
var uglify     = require('gulp-uglify');

var paths = {
    css: [
        'node_modules/@material/**/dist/*.min.css',
        'node_modules/mdb-ui-kit/css/mdb.min.css',
        'src/css/font-awesome.min.css',
        'src/css/material-design.css',
        'src/css/main.css',
        'src/css/page.auth.css',
        'src/css/page.disable.css',
        'src/css/page.menu.css',
    ],
    js: [
        'node_modules/@material/**/dist/*.min.js',
        'node_modules/mdb-ui-kit/js/mdb.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/jwt-decode/build/jwt-decode.js',
        'node_modules/md5/dist/md5.min.js',
        'node_modules/@fingerprintjs/fingerprintjs/dist/fp.min.js',
        'node_modules/ejs/ejs.min.js',
        'src/js/coreui/**/*.js',
        'src/js/core.tokens.js',
        'src/js/core.main.js',
        'src/js/core.tools.js',
        'src/js/page.auth.js',
        'src/js/page.menu.js',
    ]
};


const uglifyConfig = {
    ie8: true,
    // keep_fnames: true,
    // warnings: true,
    // mangle: {
    //     keep_classnames: true,
    //     safari10: true
    // },
    // output: {
    //     safari10: true
    // },
    //compress: {
    //    sequences: false,
    //    typeofs: false,
    //    keep_infinity: true
    //}
};

gulp.task('build_js', function(){
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(uglify(uglifyConfig))
        .pipe(concat('core-all.min.js', {newLine: ";\n"}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build_js_fast', function(){
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('core-all.min.js', {newLine: ";\n"}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});



gulp.task('build_css', function(){
    return gulp.src(paths.css)
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(concat('core-all.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build_css_fast', function(){
    return gulp.src(paths.css)
        .pipe(sourcemaps.init())
        .pipe(concat('core-all.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});


gulp.task('build_watch', function() {
    gulp.watch(paths.js, gulp.parallel(['build_js']));
    gulp.watch(paths.css, gulp.parallel(['build_css']));
});


gulp.task('build_watch_fast', function() {
    gulp.watch(paths.js, gulp.parallel(['build_js_fast']));
    gulp.watch(paths.css, gulp.parallel(['build_css_fast']));
});


gulp.task("default", gulp.series([ 'build_js', 'build_css', 'build_watch' ]));