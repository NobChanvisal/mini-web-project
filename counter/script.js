const DisplayNum = document.querySelector(".display-number");
const DecreaseButton = document.querySelector(".decrease-button");
const IncreaseButton = document.querySelector(".increase-button");
const ResetButton = document.querySelector(".reset-button");

var num = 0;
DecreaseButton.addEventListener("click",()=>{
    num -= 1;
    console.log(num);
    DisplayNum.innerHTML = num;
})
IncreaseButton.addEventListener("click",()=>{
    num +=1;
    DisplayNum.innerHTML = num;
})
ResetButton.addEventListener("click",()=>{
    num = 0;
    DisplayNum.innerHTML = num;
})