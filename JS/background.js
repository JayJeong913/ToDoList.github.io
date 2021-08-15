
const bgImgArray = ["bgImg_0.jpeg", "bgImg_1.jpg", "bgImg_2.jpg", "bgImg_3.jpg", "bgImg_4.jpg", "bgImg_5.jpg", "bgImg_6.jpg"];

const imgNum = bgImgArray[Math.floor(Math.random()*bgImgArray.length)];

const bgImg = document.querySelector("body");

bgImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(IMG/${imgNum})`;
