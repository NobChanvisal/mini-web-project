const modalButton = document.querySelector(".modal-button");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal-header button");
const overlay = document.querySelector(".overlay");

function openModal() {
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

modalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
