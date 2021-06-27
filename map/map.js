'use strict';

const changes = [100, 400, -300, 120, -50, -330, 1400, 500];

// const newChanges = changes.map(function callback(arr) {
//   return arr * 2;
// });

const newChanges = changes.map((arr) => arr * 2);

console.log(newChanges);

const newChanges2 = [];
for (const change of changes) {
  newChanges2.push(change * 2);
}

console.log(newChanges2);
//(8) [200, 800, -600, 240, -100, -660, 2800, 1000]

const newChanges3 = changes.map((value, i, arr) => {
  return `${i} : ${value * 2} , ${arr}`;
});

console.log(newChanges3);
//(8) ["0 : 200 , 100,400,-300,120,-50,-330,1400,500", "1 : 800 , 100,400,-300,120,-50,-330,1400,500", "2 : -600 , 100,400,-300,120,-50,-330,1400,500", "3 : 240 , 100,400,-300,120,-50,-330,1400,500", "4 : -100 , 100,400,-300,120,-50,-330,1400,500", "5 : -660 , 100,400,-300,120,-50,-330,1400,500", "6 : 2800 , 100,400,-300,120,-50,-330,1400,500", "7 : 1000 , 100,400,-300,120,-50,-330,1400,500"]