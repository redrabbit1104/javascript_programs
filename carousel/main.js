"use strict";

// imagesという定数に画像を配列として格納する
const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
];

//現在選択した画像のindex番号をcurrentIndexとして初期化する
let currentIndex = 0;

//メインの画像が配置されるimgタグをmainImageとして取得。srcメソッドで配列の画像をcurrentIndexを添字にして表示
const mainImage = document.getElementById("carousel__main");
mainImage.src = images[currentIndex];

// 配列imagesからindexと中身imageを一つひとつ取り出し、thumbnails画像を表示する
for (let [index, image] of images.entries()) {
  // thumbnails用のimgタグを生成して、imageを格納する
  const img = document.createElement("img");
  img.src = image;

  //liタグを作り、liタグの子要素にimgタグを配置する
  const li = document.createElement("li");
  li.appendChild(img);
  document.querySelector(".carousel__thumbnails").appendChild(li);

  // thumbnailsの画像を配置するliを作成する。for文のindexが現在選択されているcurrentIndexと同じ場合はliタグにcurrentクラスを付与する（不透明になる）
  if (index === currentIndex) {
    li.classList.add("current");
  }

  //thumbnails(liタグ）をクリックした時の処理  ---❶
  li.addEventListener("click", () => {
    //main画像は配列から取り出したimageになる。また、activeクラスを付与してfade inアニメーションを適用する
    mainImage.src = image;
    mainImage.classList.add("active");

    //activeクラスは0.8秒後に消えるようにする。理由は他のthumbnail画像（liタグ）をクリックした時にactiveクラスがすでに存在する状態だとアニメーションがスタートしないため
    setTimeout(() => {
      mainImage.classList.remove("active");
    }, 800);

    //thumbnailsという定数にthumbnails画像が入っているliタグ全てを取得して格納（配列の形になる）
    const thumbnails = document.querySelectorAll(".carousel__thumbnails > li");
    //現在選択されているindexに該当する配列thumbnailsのli要素にcurrentクラスを外して初期化する
    thumbnails[currentIndex].classList.remove("current");
    //currentInexにクリックしたliタグのindex番号をセットし直し、currentクラスを付与する（currentが付いていると不透明になる）
    currentIndex = index;
    thumbnails[currentIndex].classList.add("current");
  });
}
//nextボタンをクリックした時の処理。変数targetを用意してcurrentIndexに1を引いた値を格納する
const next = document.getElementById("carousel__next");
next.addEventListener("click", () => {
  let target = currentIndex - 1;
  //もしtarget（添字）が0以下の場合は7番目の画像から1を引くようにする。
  if (target < 0) {
    target = images.length - 1;
  }
  //liタグを全て取得し（配列の形）添字のtargetを指定。.click()メソッドでliタグがクリックされた時と同じ処理をするようにする（❶の処理）
  document.querySelectorAll(".carousel__thumbnails > li")[target].click();
});

//prevボタンをクリックした時の処理。変数targetを用意してcurrentIndexに1を足した値を格納する
const prev = document.getElementById("carousel__prev");
prev.addEventListener("click", () => {
  let target = currentIndex + 1;
  //もしtarget（添字）がimages画像の最後の番号である場合には8番目の画像はないため、0にする。
  if (target === images.length) {
    target = 0;
  }
  //liタグを全て取得し（配列の形）添字のtargetを指定。.click()メソッドでliタグがクリックされた時と同じ処理をするようにする（❶の処理）
  document.querySelectorAll(".carousel__thumbnails > li")[target].click();
});
