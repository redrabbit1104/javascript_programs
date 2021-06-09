'use strict';
var calculates = function (a, b) {
    return function (c) {
        console.log(a + b * c);
    };
};
var example = calculates(1, 2);
example(3);
example(4);
calculates(1, 2)(3);
calculates(1, 2)(4);
var calAttr = function (a, b) { return function (c) { return console.log(a + b * c); }; };
calAttr(1, 2)(3);
calAttr(1, 2)(4);
