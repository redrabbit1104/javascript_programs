'use strict';
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};
var upperFirstWord = function (str) {
    var _a = str.split(' '), first = _a[0], others = _a.slice(1);
    return __spreadArrays([first.toUpperCase()], others).join(' ');
};
// Higher-Order function
var transformer = function (str, fn) {
    console.log("Original string: " + str);
    console.log("Transformed string: " + fn(str));
    console.log("Transformed by: " + fn.name);
};
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);
// JS users callbacks all the time
var high5 = function () {
    console.log('🌈 ');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
