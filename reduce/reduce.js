'use strict';

const changes = [100, 400, -300, 120, -50, -330, 1400, 500];

const accChanges = changes.reduce(function (acc, value, i, arr) {
  console.log(`累計${i}: ${acc}`);
  return acc + value;
}, 0);

console.log(accChanges);

let total = 0;
for (const change of changes) total += change;
console.log(total);

const min = changes.reduce(function (acc, value) {
  if (acc < value) {
    return acc;
  } else {
    return value;
  }
}, changes[0]);

console.log(min);
//-330
