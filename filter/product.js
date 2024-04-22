// Define the container for product items and filter buttons
const productContainer = document.querySelector(".js-menu-grid");
const filterBtns = document.querySelectorAll(".filter-button");
const jsonFile = "./product.json";

// Function to display products in the grid
function displayProducts(productItems) {
  productContainer.innerHTML = ''; // Clear the container before displaying
  productItems.forEach((product) => {
    const { id, img, title, price, des } = product;
    productContainer.innerHTML += `
      <div class="menu-cart">
        <img src="${img}" alt="${title}" />
        <div class="menu-info">
          <div class="info-top">
            <h2>${title}</h2>
            <p>$${(price / 100).toFixed(2)}</p>
          </div>
          <div class="info-bottom">
            <p>${des}</p>
          </div>
        </div>
      </div>
    `;
  });
}

// Fetch the product data
fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    // Display all products initially
    displayProducts(data);
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id; // Get the filter category

        if (category === "all") {// If "all" is clicked, display all products
          displayProducts(data);
        } else {
          // Filter products based on the clicked category
          const filteredProducts = data.filter(
            (product) => product.category.toLowerCase() === category.toLowerCase()
          );
          // Display the filtered products
          displayProducts(filteredProducts);
        }
      });
    });
  })
