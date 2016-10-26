/*!
 * git-config-path <https://github.com/jonschlinkert/git-config-path>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var path = require('path');
var exists = require('fs-exists-sync');
var extend = require('extend-shallow');
var homedir = require('homedir-polyfill');

module.exports = function(type, options) {
  var opts = extend({cwd: process.cwd()}, options);
  var configPath = path.resolve(opts.cwd, '.git/config');
  if (type === 'global') {
    configPath = path.join(homedir(), '.gitconfig');
  }
  if (!exists(configPath)) {
    configPath = path.join(homedir(), '.config/git/config');
  }
  return exists(configPath) ? configPath : null;
};
