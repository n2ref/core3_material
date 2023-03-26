const gulp     = require('gulp');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS   = require('gulp-clean-css');
var uglify     = require('gulp-uglify');
var minifyHtml = require("gulp-htmlmin");
var html2js    = require('gulp-html2js');



var conf = {
    css: {
        file: 'core-all.min.css',
        src: [
            'node_modules/@material/**/dist/*.min.css',
            'node_modules/mdb-ui-kit/css/mdb.min.css',
            'src/css/font-awesome.min.css',
            'src/css/material-design.css',
            'src/css/main.css',
            'src/css/page.auth.css',
            'src/css/page.disable.css',
            'src/css/page.menu.css',
        ]
    },
    js: {
        file: 'core-all.min.js',
        src: [
            'node_modules/@material/**/dist/*.min.js',
            'node_modules/mdb-ui-kit/js/mdb.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jwt-decode/build/jwt-decode.js',
            'node_modules/md5/dist/md5.min.js',
            'node_modules/@fingerprintjs/fingerprintjs/dist/fp.min.js',
            'node_modules/ejs/ejs.min.js',
            'src/js/coreui/**/*.js',
            'src/js/core.templates.js',
            'src/js/core.tokens.js',
            'src/js/core.main.js',
            'src/js/core.tools.js',
            'src/js/core.auth.js',
            'src/js/core.menu.js',
        ]
    },
    tpl: {
        file: 'core.templates.js',
        variable: 'coreTemplates',
        src: [
            'src/html/**/*.html',
            'src/html/*.html'
        ]
    }
};


gulp.task('build_js', function() {
    return gulp.src(conf.js.src)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat(conf.js.file, {newLine: ";\n"}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build_js_fast', function() {
    return gulp.src(conf.js.src)
        .pipe(sourcemaps.init())
        .pipe(concat(conf.js.file, {newLine: ";\n"}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});


gulp.task('build_tpl', function() {

    return gulp.src(conf.tpl.src)
        .pipe(minifyHtml({
            collapseWhitespace: false,
            ignoreCustomFragments: [ /<%[^%]+%>/ ]
        }))
        .pipe(html2js(conf.tpl.file, {
            adapter: 'javascript',
            base: 'templates',
            name: conf.tpl.variable,
            rename: function (moduleName) {
                return moduleName.replace('../src/html/', '');
            }
        }))
        .pipe(gulp.dest('./src/js'));
});


gulp.task('build_css', function(){
    return gulp.src(conf.css.src)
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(concat(conf.css.file))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build_css_fast', function(){
    return gulp.src(conf.css.src)
        .pipe(sourcemaps.init())
        .pipe(concat(conf.css.file))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});



gulp.task('build_watch', function() {
    gulp.watch(conf.js.src, gulp.parallel(['build_js']));
    gulp.watch(conf.css.src, gulp.parallel(['build_css']));
});

gulp.task('build_watch_fast', function() {
    gulp.watch(conf.tpl.src, gulp.series(['build_tpl', 'build_js_fast']));
    gulp.watch(conf.js.src, gulp.parallel(['build_js_fast']));
    gulp.watch(conf.css.src, gulp.parallel(['build_css_fast']));
});

gulp.task("default", gulp.series([ 'build_tpl', 'build_js', 'build_css']));