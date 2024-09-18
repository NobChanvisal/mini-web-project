
function generateRandomNumber() {
  // const min = 1;
  // const max = 100; // You can change the range as needed
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  //Display the random number in the result paragraph
  document.getElementById(
    "result"
  ).textContent = `Random Number: ${randomNumber}`;
}


document
  .getElementById("generateButton")
  .addEventListener("click", generateRandomNumber);
