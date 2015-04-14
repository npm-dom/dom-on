const stub = require('dom-stub')
const test = require('tape')
const on = require('./')

global.window = {}

test('assert input types', function (t) {
  t.plan(1)
  t.throws(on, /dom node/)
})

test('attach an event emitter', function (t) {
  t.plan(1)
  const el = on(stub())
  t.equal(typeof el.on, 'function')
})

test('should keep existing .on() functions', function (t) {
  t.plan(1)
  const el = stub()
  el.on = function () {t.pass('fn kept')}
  on(el)
  el.on()
})

test('.on() should trigger .addEventListener()', function (t) {
  t.plan(1)
  const el = stub()
  on(el)
  el.addEventListener = function () {t.pass('fn called')}
  el.on()
})
