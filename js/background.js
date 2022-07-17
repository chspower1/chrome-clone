const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const img = document.querySelector(".pictures-container");

const bg = document.querySelector(".background");

function changeRandomBg(num) {
    bg.src = `./img/bg/${num}`;
}
function changeTargetBg(e) {
    if (e.target.src) bg.src = e.target.src;
}
changeRandomBg(chosenImage);

img.addEventListener("click", changeTargetBg);
// img02.addEventListener("click");
// img03.addEventListener("click");
// img04.addEventListener("click");
// img05.addEventListener("click");
