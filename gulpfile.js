var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

// Gulp Sass Task
gulp.task('sass', function () {
 return gulp.src('./scss-for-demo/fa-bootstrap-chosen.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public/stylesheets'));
});

// Gulp Sass Minifiy Task
gulp.task('sass-min', function () {
 return gulp.src('./scss-for-demo/fa-bootstrap-chosen.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public/stylesheets'));
});

// Watch scss folder for changes
gulp.task('watch', function() {
  // Watches the scss folder for all .scss and .sass files
  // If any file changes, run the sass task
  gulp.watch('./scss/**/*.{scss,sass}', ['sass'])
});

// Creating a default task
gulp.task('default', ['sass', 'sass-min', 'watch']);