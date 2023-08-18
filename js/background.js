const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
// console.log(images.length);
const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);

document.body.appendChild(bgImage);