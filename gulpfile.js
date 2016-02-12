var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var del = require('del');
var bowerFiles = require('main-bower-files');

var depOptions = {
  ignorePath: 'bower_components/',
  fileTypes: {
    html: {
      replace: {
        js: '<script src="lib/{{filePath}}"></script>',
        css: '<link rel="stylesheet" href="lib/{{filePath}}" />',
      }
    }
  }
}

var injectOptions = { ignorePath: 'app' };

gulp.task('bower',['clean'], function(){
  return gulp.src('index.html')
      .pipe(wiredep(depOptions))
      .pipe(gulp.dest('./dist'));
});

gulp.task('inject',['bower'], function(){
  gulp.src('./dist/index.html')
      .pipe(inject(gulp.src(['./app/**/*.js','./app/**/*.css']),injectOptions),{read:false})
      .pipe(gulp.dest('./dist'));
});

gulp.task('copy',['clean'], function(){
  gulp.src(['app/**/*'],{base:'app'}).pipe(gulp.dest('dist'));
  //gulp.src(['./app.js']).pipe(gulp.dest('dist'));
})

gulp.task('clean',function () {
  return del(['dist']);
});


gulp.task("copy-bower",['clean'], function(){
  gulp.src(bowerFiles(),{base:'bower_components'})
      .pipe(gulp.dest("./dist/lib"));
});

gulp.task('default',['clean','bower','inject','copy','copy-bower']);

/*
1. Copy all bower css and js dependencies to our dist/vendor directory
2.
*/
