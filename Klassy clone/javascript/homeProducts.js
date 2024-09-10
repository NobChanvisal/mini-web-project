const bestSellerContainer = document.querySelector("#best-seller");
const newArrivalContainer = document.querySelector("#new-arrival");
const tapButtons = document.querySelectorAll(".js-tap-button");


function displayProducts(container, productItems) {
  container.innerHTML = ""; // Clear the container before displaying
  productItems.forEach((product) => {
    const { id, img, imgRotate, name, price } = product;
    container.innerHTML += `
      <div class="product-cart">
          <div class="main-image">
              <img class="product-image" src="${img}" alt=""/>
              <img class="product-rotate-image" src="${imgRotate}" alt= ""/>
          </div>
          <div class="flex-display product-info">
              <div class="product-name">${name}</div>
              <span>$${(price / 100).toFixed(2)}</span>
          </div>
      </div>
    `;
  });
}

fetch('database/homeProduct.json')
  .then((response) => response.json())
  .then((data) => {
    const bestSellers = data.filter(
      (product) => product.category.toLowerCase() === "best-seller"
    );
    const newArrivals = data.filter(
      (product) => product.category.toLowerCase() === "new-arrival"
    );

    displayProducts(bestSellerContainer, bestSellers); // Initially display best sellers

    tapButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;

        // Toggle active class on buttons
        document.querySelector(".active")?.classList.remove("active");
        btn.classList.add("active");

        // Show the relevant container
        if (category === "best-seller") {
          bestSellerContainer.classList.add("active");
          newArrivalContainer.classList.remove("active");
          displayProducts(bestSellerContainer, bestSellers);
        } else if (category === "new-arrival") {
          newArrivalContainer.classList.add("active");
          bestSellerContainer.classList.remove("active");
          displayProducts(newArrivalContainer, newArrivals);
        }
      });
    });
  });
