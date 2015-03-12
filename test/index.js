var vs = require('../');
var assert = require('assert');

describe('varstr', function() {
  var transformer = vs('~', [
    vs.str('foo'),
    vs.str('bar'),
    vs.number('baz')
  ]);

  describe('.objectify', function() {
    it('should return the file in object notation', function() {
      assert.deepEqual(transformer.objectify('F~Bar~3'), {
        foo: 'F',
        bar: 'Bar',
        baz: 3
      });
    });

    it('should objectify empty string', function() {
        assert.deepEqual(transformer.objectify(''), {
          foo: '',
          bar: '',
          baz: 0
        });
    });


    it('should objectify empty undefined', function() {

      assert.deepEqual(transformer.objectify(), {
          foo: '',
          bar: '',
          baz: 0
        });
    });

  });

  describe('.stringify', function() {
    it('should transform an object to a variable width string', function() {
        assert.deepEqual(transformer.stringify({
          foo: 'F',
          bar: 'Bar',
          baz: 3
        }), 'F~Bar~3');
    });

    it('should stringify missing fields', function () {
        assert.deepEqual(transformer.stringify({
          foo: 'F'
        }), 'F~~0')
    });
  });

});
