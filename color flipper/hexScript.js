const NextButton = document.querySelector(".next-button");
const DisplayColor = document.querySelector(".display-color");
const color = ["1", "2", "3", "4", "5", "6", "7", "8", "9",
                       "A", "B", "C", "D", "E", "F"];

function getRandomNumber() {
  return Math.floor(Math.random() * color.length);
}

NextButton.addEventListener("click", () => {
  let randomCode = "#";
  for (let i = 0; i < 6; i++) {
    randomCode += color[getRandomNumber()];
  }
  // console.log(randomCode);
  document.body.style.backgroundColor = randomCode;
  DisplayColor.innerHTML = randomCode;
});
