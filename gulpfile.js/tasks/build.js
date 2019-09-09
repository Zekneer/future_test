const { series, parallel } = require('gulp');
const _cleanBuild = require('./_cleanBuild');
const _cssBuild = require('./_cssBuild');
const _jsBuild = require('./_jsBuild');
const _imgBuild = require('./_imgBuild');
const _htmlBuild = require('./_html')(false);
const _fonts = require('./_fonts')(false);

module.exports = series(
  _cleanBuild,
  parallel(_cssBuild, _jsBuild, _imgBuild, _htmlBuild, _fonts),
);
