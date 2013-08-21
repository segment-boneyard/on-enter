describe('on-enter', function () {

var assert = require('assert')
  , enter = require('on-enter')
  , trigger = require('trigger-event');

it('should add a handler', function (done) {
  enter(function (e) {
    done();
  });
  trigger('keydown', { key: 'enter' });
});

it('should remove a handler', function () {
  var handler = function () { assert(false); };
  enter(handler);
  enter.unbind(handler);
  trigger('keydown', { key: 'enter' });
});

});