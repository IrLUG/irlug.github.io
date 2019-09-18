var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');


var paths = {
    src: './app/',
    dist: './dist/'
};

gulp.task("default", ['sass'], function(){
    gulp.watch(paths.src + 'scss/**/*.scss', ['sass']);
});

gulp.task("sass", function() {
    gulp.src(paths.src + "scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.dist + "css/"));
});

gulp.task("svg2font", function() {
    gulp.src([paths.src + 'svg/*.svg'])
        .pipe(iconfontCss({
            fontName: 'font',
            //path: paths.src + 'scss/font.scss',
            //fontPath: '../../fonts/icons/'
        }))
        .pipe(iconfont({
            fontName: 'font',
            normalize: true
        }))
        .pipe(gulp.dest(paths.dist + "/fonts/"));
});
