/*!
 * git-config-path <https://github.com/jonschlinkert/git-config-path>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var should = require('should');
var gitconfig = require('./');

describe('gitconfig', function () {
  it('should resolve the path to the global .gitconfig:', function () {
    gitconfig.should.match(/jonschlinkert\/\.gitconfig/);
  });
});
