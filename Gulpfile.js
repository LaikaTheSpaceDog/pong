let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass');
let rename = require('gulp-rename');

// compresses css file

gulp.task('minify-css', () => {
  return gulp.src('src/styles/css/styles.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./src/styles/css'));
});

// converts sass to css 

gulp.task('sass', function () {
return gulp.src('./src/styles/scss/styles.scss')
    .pipe(sass())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./src/styles/css/'));
});

gulp.task('minify-sass', gulp.series('sass', 'minify-css'));