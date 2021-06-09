'use strict';

const oneWord = function (str: string): string {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str: string): string {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order function
const transformer = function (str: string, fn: any) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS users callbacks all the time
const high5 = function () {
  console.log('🌈 ');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);