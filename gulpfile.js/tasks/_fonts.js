const { src, dest } = require('gulp');

module.exports = (dev) => {
  const destPath = dev ? './dev/fonts/' : './build/fonts/';
  return () => {
    return src('./src/fonts/*').pipe(dest(destPath));
  };
};
