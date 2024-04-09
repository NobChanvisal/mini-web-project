const buttons = document.querySelectorAll("button");
const PlayButton = document.querySelector(".play-button");
const PauseButton = document.querySelector(".pause-button");
const Video = document.querySelector(".video-container");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active")); // Remove 'active' class from all buttons
    button.classList.add("active"); // Add 'active' class to the clicked button
  });
});

PauseButton.addEventListener("click",() => {
    Video.pause(); // Pause the video
});

PlayButton.addEventListener("click",() => {
    Video.play(); // Play the video
});

