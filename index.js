/*!
 * git-config-path <https://github.com/jonschlinkert/git-config-path>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;

var gitconfig = path.join(home, '.gitconfig');

if (!fs.existsSync(gitconfig)) {
  gitconfig = path.join(home, '.config/git/config');
  if (!fs.existsSync(gitconfig)) {
    gitconfig = null;
  }
}

module.exports = gitconfig;
