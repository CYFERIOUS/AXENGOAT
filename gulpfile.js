// ////////////////////////////////////////////////
//
// EDIT CONFIG OBJECT BELOW !!!
//
// jsConcatFiles => list of javascript files (in order) to concatenate
// buildFilesFoldersRemove => list of files to remove when running final build
// // //////////////////////////////////////////////
var config =
{
  jsConcatFilesApi:['./js/**/*.js',],
};

// ////////////////////////////////////////////////
// Required taskes
// gulp build
// bulp build:serve
// // /////////////////////////////////////////////
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    del = require('del');

// ////////////////////////////////////////////////
// Log Errors
// // /////////////////////////////////////////////
function errorlog(err)
{
  console.error(err.message);
  this.emit('end');
}

// ////////////////////////////////////////////////
// Scripts Tasks
// ///////////////////////////////////////////////
gulp.task('scriptsApi', function()
{
  return gulp.src(config.jsConcatFilesApi)
	           .pipe(sourcemaps.init())
	           .pipe(concat('temp.js'))
          	 .pipe(uglify())
          	 .on('error', errorlog)
          	 .pipe(rename('gameMotor.min.js'))
          	 .pipe(sourcemaps.write('./maps/'))
          	 .pipe(gulp.dest('./min/'))
          	 .pipe(reload({stream:true}));
});


// ////////////////////////////////////////////////
// HTML Tasks
// // /////////////////////////////////////////////
gulp.task('html', function()
{
  // gulp.src('./**/*.html')
	 //    .pipe(reload({stream:true}));
});

// ////////////////////////////////////////////////
// Browser-Sync Tasks
// // /////////////////////////////////////////////
gulp.task('browser-sync', function()
{
  browserSync({server:{baseDir:"./"}});
  browserSync.reload({once: true});
  browserSync.stream({once: true});
});

// task to run build server for testing final app
gulp.task('build:serve', function()
{
  browserSync({server:{baseDir:"./build"}});
});

// ////////////////////////////////////////////////
// Build Tasks
// // /////////////////////////////////////////////

// clean out all files and folders from build folder
gulp.task('build:cleanfolder', function (cb)
{
  del(['./build/**'], cb);
});

// task to create build directory of all files
gulp.task('build:copy',function()
{
  return gulp.src('./**/*/')
	           .pipe(gulp.dest('./build/'));
});

// task to removed unwanted build files
// list all files and directories here that you don't want included
gulp.task('build:remove', function (cb)
{
  del(config.buildFilesFoldersRemove, cb);
});

gulp.task('build', ['build:copy', 'build:remove', 'directiveString','minString']);

// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////
gulp.task('watch', function()
{

  gulp.watch('./js/**/*.js', ['scriptsApi']);
  gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['scriptsApi', 'html', 'browser-sync', 'watch']);
