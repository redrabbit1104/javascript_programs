'use strict';

const changes = [100, 400, -300, 120, -50, -330, 1400, 500];

// for (const change of changes) {
//   console.log(change * 2);
// }

// for (const [i, change] of changes.entries()) {
//   console.log(`${i} : ${change * 2}`);
// }

// console.log('----forEach----')

// changes.forEach(function (change) {
//   console.log(change * 2);
// });

// changes.forEach(function (change, index, array) {
//   console.log(`${array} // ${index} : ${change * 2}`);
// });

for (const change of changes) {
  if (change > 0) {
    console.log(change * 2);
  } else {console.log('終了');
  break;}
};

changes.forEach(function (change) {
  if (change > 0) {
    console.log(change * 2);
  } else {console.log('終了');
  break;}
});