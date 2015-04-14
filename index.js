const assert = require('assert')
const isDom = require('is-dom')

module.exports = wrap

// wrap an element to add a `.on()` method
// obj -> obj
function wrap (el) {
  assert.ok(isDom(el), 'el should be a dom node')
  if (!el.on) el.on = on.bind(el)
  return el
}

// alias `addEventListener` to `on`
// str, fn -> null
function on (event, cb) {
  this.addEventListener(event, cb)
}
