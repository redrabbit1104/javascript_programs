'use strict';

const calculates = function (a, b) {
  return function (c) {
    console.log(a + b * c);
  }
}

const example = calculates(1, 2);
example(3);
example(4);

calculates(1,2)(3);
calculates(1,2)(4);

const calAttr = (a, b) => (c) => console.log(a + b * c);
calAttr(1,2)(3);
calAttr(1,2)(4);