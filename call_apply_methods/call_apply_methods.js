'use strict';

const train = {
  trainName: 'JR',
  destination: 'Shibuya',
  data: [],
  printTrain(carNum, name) {
    console.log(
      ` ${name} takes a train on ${this.trainName}.\n`,
      `Bound for ${this.destination}.\n`,
      `Car number is ${carNum}`
    );
    this.data.push({ TrainNumber: `${this.trainName}${carNum}`, name });
  },
};

train.printTrain(5, 'Tom');
// train.printTrain(7, 'Jimmy');
console.log(train);

// const train2 = {
//   trainName: 'Seibusen',
//   destination: 'Toshima',
//   data: [],
// };

const printTrain = train.printTrain;

// // Does not work.
// printTrain(23, 'Tanaka');

// printTrain.call(train2, 23, 'Tanaka');
printTrain.call(train, 332, 'Suzuki');
console.log(train);
// const train3 = {
//   trainName: 'Mita',
//   destination: 'Yushima',
//   data: [],
// };

// printTrain.call(train3, 12, 'Mary');
// console.log(train3);

// // Apply method
// const trainData = [344, 'Tommy'];
// printTrain.apply(train3, trainData);
// console.log(train3);

// printTrain.call(train3, ...trainData);

// // Example function

// const testObj = {
//   nickName: 'RedCap',
//   introduce(age, name) {
//     console.log(
//       `My name is ${name}.`,
//       `${age} yeas old.`,
//       `Call me ${this.nickName}.`
//     );
//   },
// };

// const testObj2 = {
//   nickName: 'HotPepper',
// };
// testObj.introduce(22, 'Tanaka');

// const introduce = testObj.introduce;
// // introduce(31,'Tom');
// introduce.call(testObj2, 33, 'Jack');

// // Apply method
// const data = [11, 'Yamamoto'];
// introduce.apply(testObj2, data);
// console.log(testObj2);

