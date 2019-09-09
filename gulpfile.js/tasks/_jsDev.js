const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const { src, dest } = require('gulp');
const tap = require('gulp-tap');

module.exports = () => {
  return src('./src/js/*.js', { read: false })
    .pipe(
      tap((file) => {
        file.contents = browserify(file.path, {
          debug: true,
        }).bundle();
      }),
    )
    .pipe(buffer())
    .pipe(
      rename((path) => {
        path.extname = '.min.js';
      }),
    )
    .pipe(dest('./dev/js/'));
};
