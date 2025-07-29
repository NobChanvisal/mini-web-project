export const getProducts = async () => {
  try {
    // Replace with your actual API endpoint
    const response = await fetch("./Data/products.json");
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    // Return an empty array or handle the error gracefully
    return [];
  }
};
export let display = (products, container) => {
  container.innerHTML = "";

  if (!products || products.length === 0) {
    container.innerHTML = "<p>No products to display.</p>";
    return;
  }

  const productHtmlStrings = products.map((product) => {
    const detailPageUrl = `product-detail.html?id=${product.id}`;

    return `
      <a href="${detailPageUrl}" class="product-item-link"> 
        <div class="product-item">
          <img class="productImage" src="${product.img}"/>
          <div class="product-card-info">
            <small>${product.brand}</small>
            <h3>${product.title}</h3>
            <div>
              <span class="price">$${(product.salePrice / 100).toFixed(
                2
              )}</span>
              ${
                product.prevPrice <= 0
                  ? ""
                  : `<span class="prevprice">$${(
                      product.prevPrice / 100
                    ).toFixed(2)}</span>`
              }
            </div>
          </div>
        </div>
      </a>
    `;
  });

  container.innerHTML = productHtmlStrings.join("");
};

export let cart = JSON.parse(localStorage.getItem("shoesStorage")) || [];
export function saveToCart() {
  localStorage.setItem("shoesStorage", JSON.stringify(cart));
}
