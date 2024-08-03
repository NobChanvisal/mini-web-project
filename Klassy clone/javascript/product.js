// Define the container for product items and filter buttons
const productContainer = document.querySelector(".js-item-grid");
const filterBtns = document.querySelectorAll(".filter-button");
const jsonFile = "./product.json";

// Function to display products in the grid
function displayProducts(productItems) {
  productContainer.innerHTML = ""; // Clear the container before displaying
  productItems.forEach((product) => {
    const { id, img,name,imgRotate, price } = product;
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
        
        // Remove any existing animation classes to reset the animation
        productContainer.classList.remove('animate__animated', 'animate__zoomIn');

        // Use a timeout to ensure the class removal is processed
        setTimeout(() => {
          // Add animation class to product container
          productContainer.classList.add('animate__animated', 'animate__zoomIn');
        }, 5);
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
