const gulp     = require('gulp');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS   = require('gulp-clean-css');
var uglify     = require('gulp-uglify');

var paths = {
    css: [
        'src/css/lib/**/*.css',
        'src/css/main.css',
    ],
    js: [
        'src/js/coreui/**/*.js',
        'src/js/lib/**/*.js',
        'src/js/core.tokens.js',
        'src/js/core.main.js',
        'src/js/core.tools.js',
        'src/js/page.auth.js',
        'src/js/page.menu.js',
    ]
};

gulp.task('build_js', function(){
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(uglify())
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


gulp.task('build_watch', function() {
    gulp.watch(paths.js, gulp.parallel(['build_js']));
    gulp.watch(paths.css, gulp.parallel(['build_css']));
});


gulp.task("default", gulp.series([ 'build_js', 'build_css', 'build_watch' ]));