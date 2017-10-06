# hyper-release

[![Greenkeeper badge](https://badges.greenkeeper.io/pguth/hyper-release.svg)](https://greenkeeper.io/)

*Creates a [hyperboot](https://github.com/substack/hyperboot) release utilizing `npm version`.*

Using this script you don't have to care about increasing version numbers when using `hyperboot release`. This script utilizes `npm version` to keep track of and increase the version number in your `package.json`.

## Install
```sh
npm install hyper-release hyperboot
```

## Usage

`hyper-release HTMLFILE { -m MESSAGE, -v [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease] }`

By default `-m` is empty and `-v` is set to `prerelease`. For all versions except `prerelease` a version commit and tag will be created if there is a local Git repository.

In your `package.json` you could do:

```js
...
"scripts": {
  "hyper-release": "hyper-release concat/bundle.js"
  ...
}
...
```

Don't miss substacks article on [build automatization using NPM](http://substack.net/task_automation_with_npm_run) if you're new to this.

## Todo

- [ ] Do not just disregard NPMs stderr
- [ ] Use hyperboots `-n` name flag
