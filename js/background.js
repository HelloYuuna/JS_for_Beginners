const images = ["2.jpg", "4.jpg", "5.jpg"];
// console.log(images.length);
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImgUrl = `url(img/${chosenImage})`;
document.body.style.backgroundImage = bgImgUrl;

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);