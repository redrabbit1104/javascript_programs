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

// const printTrain1 = train.printTrain.bind(train);
// printTrain1(3, 'Suzuki');

const callTrain = train.printTrain;

const train2 = {
  trainName: 'Seibu',
  destination: 'Toshimaen',
  data: [],
};

const callTrain2 = callTrain.bind(train2);
callTrain2(33, 'Motomura');

const callTrain3 = callTrain.bind(train2, 12, 'Honda');
callTrain3(33, 'Motomura');

const addNum = (a, b) => a + b;
const addPlus = addNum.bind(null, 1000);
console.log(addPlus(300));
console.log(addPlus(400));