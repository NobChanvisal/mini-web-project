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
        <div class="order-main-img animate__animated animate__zoomIn">
          <div class="order-img">
            <img class="product-image active" src="${product.img}" alt="${product.name}"  />
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
            <span class="sub">-</span>
            <span class="qty">${product.qty}</span>
            <span class="add">+</span>
          </div>
          <button class="add-button">Add to cart</button>
          <button class="buy-button">Buy it now</button>
        </div>
      `;

      // Select elements after the HTML content is added
      const subBtn = document.querySelector(".sub");
      const addBtn = document.querySelector(".add");
      const qtySpan = document.querySelector(".qty");

      addBtn.addEventListener("click", () => {
        product.qty += 1;
        qtySpan.textContent = product.qty;
        console.log(product.qty);
        let total = product.qty * product.price;
        console.log(total);
      });

      subBtn.addEventListener("click", () => {
        if (product.qty > 1) {
          product.qty -= 1;
          qtySpan.textContent = product.qty;
        }
        console.log(product.qty);
        let total = product.qty * product.price;
        console.log(total);
      });

      const tapButtons = document.querySelectorAll(".js-tap-button");
      tapButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const image = e.currentTarget.dataset.image;
          console.log(image);

          // Toggle active class on buttons
          document.querySelector(".js-tap-button.active")?.classList.remove("active");
          btn.classList.add("active");

          // // Toggle images
          const productImage = document.querySelector(".product-image");
          const productRotate = document.querySelector(".product-rotate-image");
          if(image === "front"){
            productImage.classList.add("active");
            productRotate.classList.remove("active");
          }
          if(image === "back"){
            productRotate.classList.add("active");
            productImage.classList.remove("active");
          }
        });
      });
    }
  });
