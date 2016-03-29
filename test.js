'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var home = require('os-homedir');
var gitconfig = require('./');

describe('gitconfig', function() {
  it('should resolve the path to the local .gitconfig:', function() {
    var fp = path.resolve(process.cwd(), '.git/config');
    if (exists(fp)) {
      assert.equal(fp, gitconfig());
    }
  });

  it('should resolve the path to the global .gitconfig:', function() {
    var fp = path.resolve(home(), '.gitconfig');
    if (exists(fp)) {
      assert.equal(fp, gitconfig('global'));
    }
  });
});

function exists(fp) {
  try {
    fs.statSync(fp);
    return true;
  } catch (err) {}
  return false;
}
