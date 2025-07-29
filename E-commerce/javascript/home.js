console.log("hi");
import { getProducts, display, cart } from "../module/Module.js";
const contain = document.getElementById("products-container");
const alertNotica = document.querySelector(".noticafition");

(async () => {
  const products = await getProducts();
  const newarrivals = products.slice(0, 10);
  display(newarrivals, contain);
  console.log(newarrivals);
  console.log(cart);
  if (cart.length <= 0) {
    alertNotica.classList.add("hidden");
  } else {
    alertNotica.classList.remove("hidden");
  }
})();
