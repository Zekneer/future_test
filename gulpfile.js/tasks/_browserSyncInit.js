const { browserSync } = require('../config/options');

module.exports = (done) => {
  browserSync.init(
    {
      server: {
        baseDir: './dev/',
      },
      injectChanges: false,
    },
    done,
  );
};
