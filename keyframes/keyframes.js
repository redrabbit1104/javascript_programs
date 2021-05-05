"use strict";

const clickButton = document.querySelector(".click_button");
clickButton.addEventListener("click", () => {
  const image = "image.jpg";
  const target = document.getElementById("keyframes");
  if (target.src === "") {
    target.setAttribute("src", image);
  } else {
    target.removeAttribute("src", image);
    location.reload();
  }
});
