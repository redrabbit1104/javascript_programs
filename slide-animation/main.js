"use strict";

const images = [
  "images/0.jpg",
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
];

let increase = -1;
let init = -75;
const displayImage0 = document.querySelector(".s0");
displayImage0.style.backgroundImage = `url(${images[0]})`;
const displayImage1 = document.querySelector(".s1");
displayImage1.style.backgroundImage = `url(${images[1]})`;
const displayImage2 = document.querySelector(".s2");
displayImage2.style.backgroundImage = `url(${images[2]})`;
const displayImage3 = document.querySelector(".s3");
displayImage3.style.backgroundImage = `url(${images[3]})`;
const displayImage4 = document.querySelector(".s4");
displayImage4.style.backgroundImage = `url(${images[4]})`;

function slide_next() {
  increase = increase + 1;
  displayImage0.style.left = `calc(${init}% + ${increase}%)`;
  displayImage1.style.left = `calc(${init + 50}% + ${increase}%)`;
  displayImage2.style.left = `calc(${init + 100}% + ${increase}%)`;
  displayImage3.style.left = `calc(${init + 150}% + ${increase}%)`;
  displayImage4.style.left = `calc(${init + 200}% + ${increase}%)`;

  if (displayImage0.style.left == `calc(25%)`) {
    init = init - 200;
    displayImage4.style.backgroundImage = `url(${images[0]})`;
    displayImage2.style.backgroundImage = `url(${images[4]})`;
  }
}

slide_next();

document.getElementById("slide__next").addEventListener("click", () => {
  let count = 0;
  const intervalId = setInterval(() => {
    slide_next();
    count++;
    if (count > 49) {
      clearInterval(intervalId);
    }
  }, 25);
});

function slide_prev() {
  increase = increase + 1;
  displayImage0.style.left = `calc(${init}% - ${increase}%)`;
  displayImage1.style.left = `calc(${init + 50}% - ${increase}%)`;
  displayImage2.style.left = `calc(${init + 100}% - ${increase}%)`;
  displayImage3.style.left = `calc(${init + 150}% - ${increase}%)`;
  displayImage4.style.left = `calc(${init + 200}% - ${increase}%)`;

  if (displayImage0.style.left == `calc(25%)`) {
    init = init + 200;
    displayImage4.style.backgroundImage = `url(${images[0]})`;
    displayImage2.style.backgroundImage = `url(${images[4]})`;
  }
}

document.getElementById("slide__prev").addEventListener("click", () => {
  let count = 0;
  const intervalId = setInterval(() => {
    slide_prev();
    count++;
    if (count > 49) {
      clearInterval(intervalId);
    }
  }, 25);
});
// const displayImage0 = document.querySelector(".s0");
// displayImage0.style.left = "calc(-75%)";
// displayImage0.style.backgroundImage = `url(${images[0]})`;
// const displayImage1 = document.querySelector(".s1");
// displayImage1.style.left = "calc(-25%)";
// displayImage1.style.backgroundImage = `url(${images[1]})`;
// const displayImage2 = document.querySelector(".s2");
// displayImage2.style.left = "calc(25%)";
// displayImage2.style.backgroundImage = `url(${images[2]})`;
// const displayImage3 = document.querySelector(".s3");
// displayImage3.style.left = "calc(75%)";
// displayImage3.style.backgroundImage = `url(${images[3]})`;
// const displayImage4 = document.querySelector(".s4");
// displayImage4.style.left = "calc(125%)";
// displayImage4.style.backgroundImage = `url(${images[4]})`;
