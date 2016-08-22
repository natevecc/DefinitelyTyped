/// <reference path="./gulp-sourcemaps-2.0.0-alpha.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import gulp = require("gulp");
import sourcemaps = require("gulp-sourcemaps");

function plugin1(): NodeJS.ReadWriteStream { return null; }
function plugin2(): NodeJS.ReadWriteStream { return null; }

gulp.task('javascript', function() {
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('javascript', function() {
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist'));
});

gulp.task('javascript', function() {
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('javascript', function() {
    gulp.src(['src/test.js', 'src/testdir/test2.js'], { base: 'src' })
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist'));
});

gulp.task('javascript', function() {
    var stream = gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write('../maps', {addComment: false}))
        .pipe(gulp.dest('dist'));
});

gulp.task('javascript', function() {
    var stream = gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('javascript', function() {
    var stream = gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write({
            includeContent: false,
            sourceRoot: function(file) {
                return '/src';
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('javascript', function() {
    var stream = gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write('../maps', {
            sourceMappingURLPrefix: 'https://asset-host.example.com/assets'
        }))
        .pipe(gulp.dest('public/scripts'));
});

gulp.task('javascript', function() {
    var stream = gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plugin1())
        .pipe(plugin2())
        .pipe(sourcemaps.write('../maps', {
            sourceMappingURLPrefix: function(file) {
                return 'https://asset-host.example.com/assets'
            }
        }))
        .pipe(gulp.dest('public/scripts'));
});

gulp.task('javascript', function() {
  var stream = gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(plugin1())
      .pipe(plugin2())
    .pipe(sourcemaps.write('../maps', {
      sourceMappingURL: function(file) {
        return 'https://asset-host.example.com/' + file.relative + '.map';
      }
    }))
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('javascript', function() {
  var stream = gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(plugin1())
      .pipe(plugin2())
    .pipe(sourcemaps.write('../maps', {
      mapFile: function(mapFilePath) {
        // source map files are named *.map instead of *.js.map
        return mapFilePath.replace('.js.map', '.map');
      }
    }))
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('javascript', function() {
  var stream = gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(plugin1())
      .pipe(plugin2())
    .pipe(sourcemaps.write('../maps', {
      mapSources: function(sourcePath) {
        // source paths are prefixed with '../src/'
        return '../src/' + sourcePath;
      }
    }))
    .pipe(gulp.dest('public/scripts'));
});