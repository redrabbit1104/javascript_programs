'use strict';

// slice() method

let names = ['Tanaka', 'Suzuki', 'Honda', 'Matsuyama', 'Kobayashi'];

console.log(names.slice(3));
//(2) ["Matsuyama", "Kobayashi"]

console.log(names.slice(2, 4));
//(2) ["Honda", "Matsuyama"]

console.log(names.slice(-1));
//["Kobayashi"]

console.log(names.slice(-2));
//(2) ["Matsuyama", "Kobayashi"]

console.log(names.slice(1, -2));
//(2) ["Suzuki", "Honda"]

console.log(names.slice());
//(5) ["Tanaka", "Suzuki", "Honda", "Matsuyama", "Kobayashi"]

console.log([...names]);
//(5) ["Tanaka", "Suzuki", "Honda", "Matsuyama", "Kobayashi"]

// splice() method

// console.log(names.splice(3));
//(2) ["Matsuyama", "Kobayashi"]

// names.splice(-1);
//(4) ["Tanaka", "Suzuki", "Honda", "Matsuyama"]

// console.log(names);
//(3) ["Tanaka", "Suzuki", "Honda"]

// reverse() method

console.log(names.reverse());
//(5) ["Kobayashi", "Matsuyama", "Honda", "Suzuki", "Tanaka"]
console.log(names);
//(5) ["Kobayashi", "Matsuyama", "Honda", "Suzuki", "Tanaka"]

// concat() method

const alpha = ['c', 'd', 'e', 'f', 'g'];
const nums = [1, 2, 3, 4, 5];
const letters = alpha.concat(nums);
console.log(letters);
//(10) ["c", "d", "e", "f", "g", 1, 2, 3, 4, 5]

const letters2 = [...alpha, ...nums];
console.log(letters2);
//(10) ["c", "d", "e", "f", "g", 1, 2, 3, 4, 5]

console.log(alpha);

// join()メソッド

console.log(nums.join(' * '));
//1 * 2 * 3 * 4 * 5
console.log(nums);
