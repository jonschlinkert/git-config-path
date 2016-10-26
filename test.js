'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var exists = require('fs-exists-sync');
var homedir = require('homedir-polyfill');
var gitconfig = require('./');

describe('gitconfig', function() {
  it('should resolve the path to the local .gitconfig:', function() {
    var fp = path.resolve(process.cwd(), '.git/config');
    if (exists(fp)) {
      assert.equal(fp, gitconfig());
    }
  });

  it('should resolve the path to the global .gitconfig:', function() {
    var fp = path.resolve(homedir(), '.gitconfig');
    if (exists(fp)) {
      assert.equal(fp, gitconfig('global'));
    }
  });
});
