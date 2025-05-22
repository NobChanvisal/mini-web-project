const Buttons = document.querySelectorAll("button");
const Content = document.querySelectorAll(".content");
Buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Remove 'active' from all content elements
    Content.forEach((item) => item.classList.remove("active"));
    // Optional: Remove 'active-btn' from all buttons
    Buttons.forEach((button) => button.classList.remove("active"));

    console.log("Clicked button data-id:", btn.dataset.id);

    let targetId = e.target.dataset.id;
    const elementToShow = document.getElementById(targetId);

    if (elementToShow) {
      elementToShow.classList.add("active");
      e.target.classList.add("active"); // Add 'active-btn' to the clicked button
    }
  });
});
