/* global describe, it */
var expect = require('unexpected');
var propfinder = require('../lib/propfinder');

describe('propfinder', function () {

    it('should return undefined for a property that does not exist', function () {
        expect(propfinder('foo.bar', {}), 'to be undefined');
    });

    it('should return the property mentioned', function () {
        expect(propfinder('foo', { foo: 'bar' }), 'to be', 'bar');
    });

    it('should return the property mentioned (nested)', function () {
        expect(propfinder('foo.bar', { foo: { bar: 'baz' } }), 'to be', 'baz');
    });

    it('should return the property mentioned (more nested)', function () {
        expect(propfinder('foo.bar.baz', { foo: { bar: { baz: 'qux' } } }), 'to be', 'qux');
    });

    it('should return undefined for a property that does not exist (nested)', function () {
        expect(propfinder('foo.bar.qux', { foo: {} }), 'to be undefined');
    });

});
