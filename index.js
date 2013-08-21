
var bind = require('event').bind
  , indexOf = require('indexof');


/**
 * Expose `onEnter`.
 */

module.exports = exports = onEnter;


/**
 * Handlers.
 */

var fns = [];


/**
 * Escape binder.
 *
 * @param {Function} fn
 */

function onEnter (fn) {
  fns.push(fn);
}


/**
 * Bind a handler, for symmetry.
 */

exports.bind = onEnter;


/**
 * Unbind a handler.
 *
 * @param {Function} fn
 */

exports.unbind = function (fn) {
  var index = indexOf(fns, fn);
  if (index) fns.splice(index, 1);
};


/**
 * Bind to `document` once.
 */

bind(document, 'keydown', function (e) {
  if (13 !== e.keyCode) return;
  for (var i = 0, fn; fn = fns[i]; i++) fn(e);
});