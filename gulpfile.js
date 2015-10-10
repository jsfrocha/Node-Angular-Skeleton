var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

var fileList = [
    'public/app/main.js',
    'public/app/main.config.js',
    'public/app/routes.js',
    'public/app/**/*.js'
];

gulp.task('compass', function() {
    gulp.src('public/stylesheets/*.sass')
        .pipe(compass({
            css: 'public/stylesheets/css',
            sass: 'public/stylesheets/sass'
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/stylesheets/temp'));
});

gulp.task('minify', function() {
    console.log('Minifiying App...');

    gulp.src(fileList)
        .pipe(concat('public/dist/angularApp.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
    gulp.watch(fileList, ['minify']);
    gulp.watch('public/stylesheets/sass/*.sass', ['compass']);
});

gulp.task('default', ['minify', 'watch']);


