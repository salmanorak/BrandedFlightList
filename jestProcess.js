var babelJest = require('babel-jest');
var includeStylesSvg = new RegExp(/require\(\s*\'.*\.(css|svg)\'\);/gm);
var storeStylesSvg = new RegExp(/= require\(\s*\'.*\.(css|svg)\'\);/gm);
module.exports = {
  process: function(src, filename, moduleFileExtensions) {
    return babelJest
      .process(src, filename, moduleFileExtensions)
      .replace(storeStylesSvg, '= \'\';')
      .replace(includeStylesSvg, '');
  }
};