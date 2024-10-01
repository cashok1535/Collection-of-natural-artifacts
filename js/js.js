const sliderElement = document.querySelector(".main__center__card");
const sliderLine = document.querySelector(".main__center__allCards");
const number = document.querySelector(".numberCard");
let count = 0;
let width;
width = document.querySelector(".main__center__allCards").offsetWidth;

document.querySelector("#next").addEventListener("click", () => {
  count++;
  console.log(count);
  rollSlider();
  if (count >= 1) {
    return;
  }
});

document.querySelector("#prev").addEventListener("click", () => {
  count--;
  rollSliderBack();
  if (count < 0) {
    return;
  }
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + width + "px)";
  number.innerHTML = '2';
}
function rollSliderBack() {
  sliderLine.style.transform = "translate(+" + 0 + "px)";
  number.innerHTML = '1';
}
