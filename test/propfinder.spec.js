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

    it('should be curryable, return a function that finds a prop', function () {
        var findFoo = propfinder('foo');
        expect(findFoo, 'to be a function');
        expect(findFoo({}), 'to be undefined');
        expect(findFoo({ foo: true }), 'to be true');
    });

    it('should not return a method if obj is undefined', function () {
        expect(propfinder('foo', undefined), 'to be undefined');
    });

    it('should return undefined when asked to find a property on a string', function () {
        expect(propfinder('foo', 'bar'), 'to be undefined');
    });

    it('should return undefined when asked to find a property on null', function () {
        expect(propfinder('foo', null), 'to be undefined');
    });

    it('should return undefined when asked to find a property on a number', function () {
        expect(propfinder('foo', 1), 'to be undefined');
    });

    it('should return undefined when asked to find a property on an array', function () {
        expect(propfinder('foo', [1, 2, 3]), 'to be undefined');
    });

});
