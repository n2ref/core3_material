var gulp       = require('gulp');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS   = require('gulp-clean-css');
var uglify     = require('gulp-uglify');


gulp.task('build_js', function(){
    return gulp.src([
        'js/coreui/**/*.js',
        'js/lib/**/*.js',
        'js/core.tokens.js',
        'js/core.main.js',
        'js/core.tools.js',
        'js/page.auth.js',
        'js/page.menu.js',
    ])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('core-all.min.js', {newLine: ";\n"}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./js'));
});


gulp.task('build_css', function(){
    return gulp.src([
        'css/lib/**/*.css',
        'css/main.css',
    ])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(concat('core-all.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});
