"use strict";

const numArr = [4, 5, 6];
const newNumArr = [1, 2, 3, ...numArr];

const park = {
  name: "flower park",
  location: "東京都新宿区高田馬場３丁目",
  trees: ["ヒノキ", "竹", "松", "杉", "イチョウ"],
  flowers: ["薔薇", "桜", "朝顔", "ひまわり"],
  facilities: ["すべり台", "ブランコ", "トイレ", "噴水"],
  people: ["安田", "上村", ["鈴木", "福岡"]],
  sumPrice: function (x, y, z) {
    const sum = x + y + z;
    console.log(sum);
  },
};

const newFlowers = ["梅", "水仙", "紫陽花", ...park.flowers];
console.log(newFlowers);

const newTrees = [...park.trees];
console.log(newTrees);

const plants = [...park.trees, ...park.flowers];
console.log(plants);

console.log(...park.location); //一文字ずつ出力される
const letters = [...park.location, "2", "番"];
console.log(letters); //各文字が配列の要素として表示される

let prices = [1000, 1500, 2000];
park.sumPrice(prices[0], prices[1], prices[2]);
park.sumPrice(...prices);

const newPark = { area: 4000, ...park, fee: "free" };
console.log(newPark);

const parkCopy = { ...park };
console.log(parkCopy);
