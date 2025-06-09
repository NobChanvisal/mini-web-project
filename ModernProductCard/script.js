const filterbuttons = document.querySelectorAll(".swatch");
const image = document.querySelectorAll("img");
filterbuttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    image.forEach((img) => img.classList.remove("active"));
    filterbuttons.forEach((filterbtn) => filterbtn.classList.remove("active"));
    console.log(id);

    const targetImg = document.getElementById(id);
    if (targetImg) {
      targetImg.classList.add("active");
      e.target.classList.add("active");
    }
  });
});
