const { series, parallel } = require('gulp');
const _browserSyncInit = require('./_browserSyncInit');
const _cleanDev = require('./_cleanDev');
const _cssDev = require('./_cssDev');
const _jsDev = require('./_jsDev');
const _imgDev = require('./_imgDev');
const _htmlDev = require('./_html')(true);
const _fonts = require('./_fonts')(true);
const _watch = require('./_watch');

module.exports = series(
  _cleanDev,
  parallel(_cssDev, _jsDev, _imgDev, _htmlDev, _fonts),
  _browserSyncInit,
  _watch,
);
