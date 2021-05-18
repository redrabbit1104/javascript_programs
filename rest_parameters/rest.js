"use strict";

// const numArr = [4, 5, 6];
// const newNumArr = [1, 2, 3, ...numArr];

const park = {
  name: "flower park",
  location: "東京都新宿区高田馬場３丁目",
  trees: ["ヒノキ", "竹", "松", "杉", "イチョウ"],
  flowers: ["薔薇", "桜", "朝顔", "ひまわり"],
  facilities: ["すべり台", "ブランコ", "トイレ", "噴水"],
  people: ["安田", "上村", ["鈴木", "福岡"]],
  temp: {
    mon: {
      morning: 12,
      evening: 5,
    },
    tue: {
      morning: 15,
      evening: 7,
    },
    wed: {
      morning: 13,
      evening: 4,
    },
  },
  sumPrice: function (...rests) {
    let sum = 0;
    for (let i = 0; i < rests.length; i++) {
      sum += rests[i];
    }
    console.log(sum);
  },
};

// park.sumPrice(1, 2, 3, 4, 5, 6);
const numArr = [4, 5, 33, 2];
park.sumPrice(...numArr);
//スプレッド構文は「=」の右側

// const testNumber = [100, 99, 98, ...[2, 1]];
// console.log(testNumber);

//残余パターン/引数は「=」に左側

// const [a, b, ...rests] = [100, 99, 98, 2, 1];
// console.log(a, b, rests);

// const [a, b, ...rests] = [...park.trees, ...park.flowers];
// console.log(a, b, rests);

// オブジェクト
// const { mon, ...rests } = park.temp;
// console.log(rests);
