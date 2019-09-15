const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = () => {
  return src('./src/img/**/*').pipe(dest('./build/img/'));
};
