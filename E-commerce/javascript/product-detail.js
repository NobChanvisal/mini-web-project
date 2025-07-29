import { getProducts, cart, saveToCart } from "../module/Module.js";
const productDetailContainer = document.getElementById(
  "product-detail-container"
);
const alertNotica = document.querySelector(".noticafition");

(async () => {
  //   products = await getProducts();
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id"); // Get the 'id' from the URL
  console.log(productId);
  if (cart.length <= 0) {
    alertNotica.classList.add("hidden");
  } else {
    alertNotica.classList.remove("hidden");
  }

  try {
    const products = await getProducts();
    const product = products.find((p) => p.id === productId); // Assuming product.id is a string matching URL param

    if (product) {
      // Display the product details
      productDetailContainer.innerHTML = `
                <div class="product-detail-card">
                    <div class="product-detail-image">
                        <img src="${product.img}" alt="${product.title}">
                    </div>
                    <div class="product-detail-info">
                        <small class="brand">${product.brand}</small>
                        <h1>${product.title}</h1>
                        <div class = "price-content">
                          <span class="price">$${(
                            product.salePrice / 100
                          ).toFixed(2)}</span>
                          ${
                            product.prevPrice <= 0
                              ? ""
                              : `<span class="prevprice">$${(
                                  product.prevPrice / 100
                                ).toFixed(2)}</span>`
                          }
                        </div>
                        <div class = "color">
                          <span>Color</span>
                          <p style="background-color:${product.colors}"></p>
                        </div>
                        <hr>
                        <p class="description">${
                          product.shortDes || "No description available."
                        }</p>
                        <button class= "btn-primary" onclick='addTocart(${JSON.stringify(
                          product.id
                        )})' >Add to Cart</button>
                    </div>
                </div>
            `;
    } else {
      productDetailContainer.innerHTML = `<p class='not-found'>Product with ID "${productId}" not found.</p>`;
    }
  } catch (error) {
    console.error("Error displaying product details:", error);
    productDetailContainer.innerHTML =
      "<p class='error-message'>Failed to load product details.</p>";
  }
})();
const addTocart = (Id) => {
  console.log("Id of product have been add to cart : ", Id);
  (async () => {
    const products = await getProducts();
    const product = products.find((p) => p.id === Id);
    // console.log(product);
    if (!product) {
      alert("Products code not found !!");
      return;
    }

    let prevProducts = cart.find((item) => item.id === Id);
    if (prevProducts) {
      prevProducts.qty += 1;
    } else {
      const newProduct = {
        id: product.id,
        name: product.title,
        brand: product.brand,
        price: product.salePrice,
        qty: 1,
        image: product.img,
        color: product.colors,
      };
      cart.push(newProduct);
    }
    alert("Product add to cart !!");
    saveToCart();
    if (cart.length <= 0) {
      alertNotica.classList.add("hidden");
    } else {
      alertNotica.classList.remove("hidden");
    }
  })();

  console.log(cart);
  if (cart.length <= 0) {
    alertNotica.classList.add("hidden");
  } else {
    alertNotica.classList.remove("hidden");
  }
};
window.addTocart = addTocart;
