function toggleActive(selector) {
  const button = document.querySelector(selector);
  if (!document.querySelector("active")) {
    removeActive();
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
}
function removeActive() {
  const prev = document.querySelector(".active");
  if (prev) {
    prev.classList.remove("active");
  }
}
