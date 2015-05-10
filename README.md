# dom-on
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Alias a DOM node's `.addEventListener()` to `.on()`.

## Installation
```bash
$ npm install dom-on
```

## Usage
```js
const on = require('dom-on')

const button = document.createElement('button')
on(button)

button.on('click', () => console.log('oOOoooOOoooO!'))
```

## See Also
- [dom-wrap](https://github.com/juliangruber/dom-wrap) - Make dom elements easier to work with

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/dom-on.svg?style=flat-square
[npm-url]: https://npmjs.org/package/dom-on
[travis-image]: https://img.shields.io/travis/npm-dom/dom-on.svg?style=flat-square
[travis-url]: https://travis-ci.org/npm-dom/dom-on
[coveralls-image]: https://img.shields.io/coveralls/npm-dom/dom-on.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/npm-dom/dom-on?branch=master
[downloads-image]: http://img.shields.io/npm/dm/dom-on.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/dom-on
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
