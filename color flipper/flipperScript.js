const NextButton = document.querySelector(".next-button");
const DisplayColor = document.querySelector(".display-color");

const color = ["red", "green", "rgba(133,122,200)", "#F15025"];

function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
}

NextButton.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    const selectedColor = color[randomNumber];
    console.log(selectedColor);
    
    document.body.style.backgroundColor = selectedColor;
    DisplayColor.innerHTML = selectedColor;
});
