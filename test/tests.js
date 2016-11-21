/* global __dirname */

var assert = require('assert');
var bresenham = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../lib/') + 'bresenham.js');


describe('Bresenham-algorithm', function () {
    describe('#calculateLine()', function () {
        it('should calculate a horizontal line from (0,0) to (2,0) and call the callback for each point', function () {
            var result = [];
            bresenham.calculateLine(0, 0, 2, 0, function (x, y) {
                result.push(x);
                result.push(y);
            });

            assert.deepEqual(result, [0, 0, 1, 0, 2, 0]);
        });
    });

    describe('#calculateLine()', function () {
        it('should calculate a vertical line from (0,0) to (0,2) and call the callback for each point', function () {
            var result = [];
            bresenham.calculateLine(0, 0, 0, 2, function (x, y) {
                result.push(x);
                result.push(y);
            });

            assert.deepEqual(result, [0, 0, 0, 1, 0, 2]);
        });
    });

    describe('#calculateLine()', function () {
        it('should calculate a horizontal line from (0,0) to (-2,0) and call the callback for each point', function () {
            var result = [];
            bresenham.calculateLine(0, 0, -2, 0, function (x, y) {
                result.push(x);
                result.push(y);
            });

            assert.deepEqual(result, [0, 0, -1, 0, -2, 0]);
        });
    });

    describe('#calculateLine()', function () {
        it('should calculate a vertical line from (0,0) to (0,-2) and call the callback for each point', function () {
            var result = [];
            bresenham.calculateLine(0, 0, 0, -2, function (x, y) {
                result.push(x);
                result.push(y);
            });

            assert.deepEqual(result, [0, 0, 0, -1, 0, -2]);
        });
    });

    describe('#calculateLine()', function () {
        it('should calculate a 45° line from (0,0) to (2,2) and call the callback for each point', function () {
            var result = [];
            bresenham.calculateLine(0, 0, 2, 2, function (x, y) {
                result.push(x);
                result.push(y);
            });

            assert.deepEqual(result, [0, 0, 1, 1, 2, 2]);
        });
    });

    describe('#calculateLine()', function () {
        it('should calculate a 135° line from (0,0) to (2,-2) and call the callback for each point', function () {
            var result = [];
            bresenham.calculateLine(0, 0, 2, -2, function (x, y) {
                result.push(x);
                result.push(y);
            });

            assert.deepEqual(result, [0, 0, 1, -1, 2, -2]);
        });
    });

    describe('#calculateLine()', function () {
        it('should calculate a 225° line from (0,0) to (-2,-2) and call the callback for each point', function () {
            var result = [];
            bresenham.calculateLine(0, 0, -2, -2, function (x, y) {
                result.push(x);
                result.push(y);
            });

            assert.deepEqual(result, [0, 0, -1, -1, -2, -2]);
        });
    });

    describe('#calculateLine()', function () {
        it('should calculate a 315° line from (0,0) to (-2,2) and call the callback for each point', function () {
            var result = [];
            bresenham.calculateLine(0, 0, -2, 2, function (x, y) {
                result.push(x);
                result.push(y);
            });

            assert.deepEqual(result, [0, 0, -1, 1, -2, 2]);
        });
    });

    describe('#calculateLine()', function () {
        it('should calculate a line from (0,1) to (6,3) and call the callback for each point', function () {
            var result = [];
            bresenham.calculateLine(0, 1, 6, 3, function (x, y) {
                result.push(x);
                result.push(y);
            });

            assert.deepEqual(result, [ 0,1, 1,1, 2,2, 3,2, 4,2, 5,3, 6,3 ]);
        });
    });
});





