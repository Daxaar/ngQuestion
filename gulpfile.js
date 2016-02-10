var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var del = require('del');

var depOptions = {
  fileTypes: {
    html: {
      replace: {
        js: '<script src="/vendor/{{filePath}}"></script>'
      }
    }
  }
}

gulp.task('bower',['clean'], function(){
  return gulp.src('index.html')
      .pipe(wiredep(depOptions))
      .pipe(gulp.dest('./dist'));
});

gulp.task('inject',['bower'], function(){
  gulp.src('./dist/index.html')
      .pipe(inject(gulp.src(['./app/**/*.js','./app/**/*.css'],{read:false})))
      .pipe(gulp.dest('./dist'));
});

gulp.task('copy',['clean'], function(){
  gulp.src(['app/**/*']).pipe(gulp.dest('dist/app'));
  gulp.src(['./app.js']).pipe(gulp.dest('dist'));
})

gulp.task('clean',function () {
  return del(['dist']);
});

gulp.task('default',['clean','bower','inject','copy']);

/*
1. Copy all bower css and js dependencies to our dist/vendor directory
2.
*/
