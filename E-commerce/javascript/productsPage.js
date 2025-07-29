import { getProducts, display,cart } from "../module/Module.js";

const contain = document.getElementById("product-container");
const brandButtons = document.querySelectorAll(".brand-button");
const colorButtons = document.querySelectorAll(".color-button");
const alertNotica = document.querySelector(".noticafition");


let products = [];
let selectedBrand = "";
let selectedColor = "";

(async () => {
  products = await getProducts();
  display(products, contain);
  if (cart.length <= 0) {
    alertNotica.classList.add("hidden");
  } else {
    alertNotica.classList.remove("hidden");
  }

  brandButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedBrand = button.dataset.brand;
      if (selectedBrand === "all") {
        display(products, contain);
      } else {
        filterAndDisplay();
      }
    });
  });

  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedColor = button.dataset.color;
      filterAndDisplay();
    });
  });
})();

function filterAndDisplay() {
  let filtered = products;
  if (selectedBrand) {
    filtered = filtered.filter(
      (pro) => pro.brand.toLowerCase() === selectedBrand.toLowerCase()
    );
  }

  if (selectedColor) {
    filtered = filtered.filter(
      (pro) => pro.colors.toLowerCase() === selectedColor.toLowerCase()
    );
  }

  display(filtered, contain);
}
