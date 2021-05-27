"use strict";

const bags = {
  fruits: ["apple", "orange", "grape", "mango", "banana"],
  stationery: ["pencil", "eraser", "marker", "ruler", "ballpoint pen"],
};

const items = [...bags.fruits, ...bags.stationery];
console.log(items);

for (const item of items) {
  console.log(item, typeof item);
}

for (const item of items.entries()) {
  console.log(item);
}

console.log(items.entries());

console.log([...items.entries()]);

for (const item of items.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, element] of items.entries()) {
  console.log(`${i + 1}: ${element}`);
}
