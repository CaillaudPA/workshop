var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var htmlhint = require('gulp-htmlhint');
var htmlmin = require('gulp-htmlmin');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('html', function(){
   gulp.src("./src/*.html")
    .pipe(htmlhint())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({ extname: '.min.html' }))
    .pipe(gulp.dest('./www/templates/'))
});

