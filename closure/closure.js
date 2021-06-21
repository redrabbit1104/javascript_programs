'use strict';

function outsideFunction() {
  const greetings = 'hello';
  return function () {
    console.log(greetings);
  };
}

const insideFunction = outsideFunction();

// const greeting = 'hello';
// const insideFunction = function () {
//   console.log(greetings);
// };
insideFunction();
