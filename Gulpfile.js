let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let browserSync = require('browser-sync').create();
let reload = browserSync.reload;

// watches the files and automatically updates them when save is clicked

gulp.task('watch', () => {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });

gulp.watch('**/*.*').on("change", reload);  
gulp.watch(['src/styles/scss/**/*.scss'],
gulp.parallel(['minify-sass']));

});

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

// runs sass and minify-css in series

gulp.task('minify-sass', gulp.series('sass', 'minify-css'));