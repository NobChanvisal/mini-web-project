// Define the container for product items and filter buttons
const productContainer = document.querySelector(".js-item-grid");
const filterBtns = document.querySelectorAll(".filter-button");
const jsonFile = "./product.json";

// Function to display products in the grid
function displayProducts(productItems) {
  productContainer.innerHTML = ""; // Clear the container before displaying
  productItems.forEach((product) => {
    const { id, img, name,imgRotate, price } = product;
    productContainer.innerHTML += `
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

// Fetch the product data
fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    const defaultCategory = "zinvo";
    const defaultProducts = data.filter(
      (product) => product.category.toLowerCase() === defaultCategory
    );
    displayProducts(defaultProducts);
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id; // Get the filter category
        
        // Toggle active class on filter buttons
        document.querySelector('.filter-button.active')?.classList.remove('active');
        btn.classList.add('active');
        
        // Filter products based on the clicked category
        const filteredProducts = data.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
        // Display the filtered products
        displayProducts(filteredProducts);
      });
    });
  });
