'use strict';

require('mocha');
const fs = require('fs');
const os = require('os');
const path = require('path');
const assert = require('assert');
const gitconfig = require('./');

describe('gitconfig', () => {
  it('should resolve the path to the local .gitconfig:', () => {
    let fp = path.resolve(process.cwd(), '.git/config');
    if (fs.existsSync(fp)) {
      assert.equal(fp, gitconfig());
      assert.equal(fp, gitconfig('local'));
      assert.equal(fp, gitconfig({type: 'local'}));
    }
  });

  it('should resolve the path to the global .gitconfig:', () => {
    let fp = path.resolve(os.homedir(), '.gitconfig');
    if (fs.existsSync(fp)) {
      assert.equal(fp, gitconfig({type: 'global'}));
      assert.equal(fp, gitconfig('global'));
    }
  });
});
