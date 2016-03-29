# git-config-path [![NPM version](https://img.shields.io/npm/v/git-config-path.svg?style=flat)](https://www.npmjs.com/package/git-config-path) [![NPM downloads](https://img.shields.io/npm/dm/git-config-path.svg?style=flat)](https://npmjs.org/package/git-config-path) [![Build Status](https://img.shields.io/travis/jonschlinkert/git-config-path.svg?style=flat)](https://travis-ci.org/jonschlinkert/git-config-path)

> Resolve the path to the user's local or global .gitconfig.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install git-config-path --save
```

## Usage

Automatically gets the nearest `.git` config path, starting with the current working directory, then looking in the user's `home` directory.

```js
var gitConfigPath = require('git-config-path')();
//=> '/Users/jonschlinkert/dev/git-config-path/.git/config'
```

To force `git-config-path` to only look for a global config path, pass `global`:

```js
var gitConfigPath = require('git-config-path')('global');
//=> '/Users/jonschlinkert/.gitconfig'
```

## Related projects

You might also be interested in these projects:

* [git-branch](https://www.npmjs.com/package/git-branch): Get the current branch for a local git repository. | [homepage](https://github.com/jonschlinkert/git-branch)
* [git-repo-name](https://www.npmjs.com/package/git-repo-name): Get the repository name from the git remote origin URL. | [homepage](https://github.com/jonschlinkert/git-repo-name)
* [git-user-name](https://www.npmjs.com/package/git-user-name): Get a user's name from git config at the project or global scope, depending on… [more](https://www.npmjs.com/package/git-user-name) | [homepage](https://github.com/jonschlinkert/git-user-name)
* [git-username](https://www.npmjs.com/package/git-username): Get the username from a git remote origin URL. | [homepage](https://github.com/jonschlinkert/git-username)
* [is-git-url](https://www.npmjs.com/package/is-git-url): Regex to validate that a URL is a git url. | [homepage](https://github.com/jonschlinkert/is-git-url)
* [parse-git-config](https://www.npmjs.com/package/parse-git-config): Parse `.git/config` into a JavaScript object. sync or async. | [homepage](https://github.com/jonschlinkert/parse-git-config)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/git-config-path/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/git-config-path/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v, on March 29, 2016._