import { cart } from "./cart.js";

window.addEventListener("load", () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart.length = 0; // Clear the current cart
    Array.prototype.push.apply(cart, JSON.parse(storedCart));
    displayCartItems();
    totalprice();
  }
});

// Function to get query parameter by name
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Fetch the product ID from the URL
const productId = getQueryParam("productId");

// Fetch product details from JSON file
fetch("./product.json")
  .then((response) => response.json())
  .then((data) => {
    const product = data.find((item) => item.id === productId);
    if (product) {
      document.getElementById("order-details").innerHTML = `
        <div class="order-main-img animate__animated animate__fadeInDown">
          <div class="order-img">
            <img class="product-image active" src="${product.img}" alt="${product.name}" />
            <img class="product-rotate-image" src="${product.imgRotate}" alt="${product.name}" />
          </div>
          <div class="bottom-img">
            <img class="js-tap-button active" src="${product.img}" alt="${product.name}" data-image="front" />
            <img class="js-tap-button" src="${product.imgRotate}" alt="${product.name}" data-image="back" />
          </div>
        </div>
        <div class="order-info">
          <h2>${product.name}</h2>
          <p>$${(product.price / 100).toFixed(2)}</p>
          <div class="qty-contain">
            <span class="qty-sub">-</span>
            <span class="qty-span">${product.qty}</span>
            <span class="qty-add">+</span>
          </div>
          <button class="add-button">Add to cart</button>
          <button class="buy-button">Buy it now</button>
        </div>
      `;

      // Select elements after the HTML content is added
      const subBtn = document.querySelector(".qty-sub");
      const addBtn = document.querySelector(".qty-add");
      const qtySpan = document.querySelector(".qty-span");

      addBtn.addEventListener("click", () => {
        product.qty += 1;
        qtySpan.textContent = product.qty;
      });

      subBtn.addEventListener("click", () => {
        if (product.qty > 1) {
          product.qty -= 1;
          qtySpan.textContent = product.qty;
        }
      });

      const addToCartButton = document.querySelector(".add-button");
      addToCartButton.addEventListener("click", () => {
        let matchingItem = cart.find((item) => item.id === productId);

        if (matchingItem) {
          matchingItem.qty += product.qty;
        } else {
          cart.push({ ...product });
        }
        saveCart();
        displayCartItems();
        totalprice();
      });

      const tapButtons = document.querySelectorAll(".js-tap-button");
      tapButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const image = e.currentTarget.dataset.image;

          // Toggle active class on buttons
          document.querySelector(".js-tap-button.active")?.classList.remove("active");
          btn.classList.add("active");

          // Toggle images
          const productImage = document.querySelector(".product-image");
          const productRotate = document.querySelector(".product-rotate-image");
          if (image === "front") {
            productImage.classList.add("active");
            productRotate.classList.remove("active");
          }
          if (image === "back") {
            productRotate.classList.add("active");
            productImage.classList.remove("active");
          }
        });
      });
    }
  });

  const sidebar = document.querySelector(".cart-side-bar");
  const shoppingBag = document.querySelector(".bx-shopping-bag");
  const overlay = document.querySelector(".overlay");
  
  shoppingBag.addEventListener("click", () => {
    overlay.classList.add("active");
    sidebar.classList.add("active");
    displayCartItems();
  });
  
  document.querySelector(".bx-x").addEventListener("click", () => {
    overlay.classList.remove("active");
    sidebar.classList.add("animate__bounceOutRight");
    sidebar.addEventListener("animationend", () => {
      sidebar.classList.remove("active");
      sidebar.classList.remove("animate__bounceOutRight");
    }, { once: true });
  });
  
  overlay.addEventListener("click", (e) => {
    overlay.classList.remove("active");
    sidebar.classList.add("animate__bounceOutRight");
    sidebar.addEventListener("animationend", () => {
      sidebar.classList.remove("active");
      sidebar.classList.remove("animate__bounceOutRight");
    }, { once: true });
  });
// Function to display cart items in the sidebar
function displayCartItems() {
  const cartItemContainer = document.querySelector(".js-cart-item");
  cartItemContainer.innerHTML = ""; // Clear previous items

  cart.forEach((item) => {
    const { img, qty, name, price } = item;
    cartItemContainer.innerHTML += `
      <div class="item-cart">
          <div class="left">
              <img class="cart-image" src="${img}" alt=""/>
          </div>
          <div class="right">
              <div class="cart-name">${name}</div>
              <span>$${(price / 100).toFixed(2)}</span>
              <div class="edit">
                <div class="qty-contain">
                  <span class="sub">-</span>
                  <span class="qty">${qty}</span>
                  <span class="add">+</span>
                </div>
                <button class="remove-button">Remove</button>
              </div>
          </div>
      </div>
    `;
  });

  // Add event listeners to update quantity and remove items
  cartItemContainer.querySelectorAll(".sub").forEach((button, index) => {
    button.addEventListener("click", () => {
      if (cart[index].qty > 1) {
        cart[index].qty -= 1;
        saveCart();
        displayCartItems();
        totalprice();
      }
    });
  });

  cartItemContainer.querySelectorAll(".add").forEach((button, index) => {
    button.addEventListener("click", () => {
      cart[index].qty += 1;
      saveCart();
      displayCartItems();
      totalprice();
    });
  });

  cartItemContainer.querySelectorAll(".remove-button").forEach((button, index) => {
    button.addEventListener("click", () => {
      cart.splice(index, 1);
      saveCart();
      displayCartItems();
      totalprice();
    });
  });
}

function totalprice() {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.qty;
  });
  document.querySelector(".total-price").innerHTML = `$ ${(total / 100).toFixed(2)}`;
  if(cart.length > 0){
    document.querySelector(".alert-qty").classList.add("active");
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
