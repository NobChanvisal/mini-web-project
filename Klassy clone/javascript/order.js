// Function to get query parameter by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Fetch the product ID from the URL
  const productId = getQueryParam('productId');
  
  // Fetch product details from JSON file
  fetch('./product.json')
    .then(response => response.json())
    .then(data => {
      const product = data.find(item => item.id === productId);
      if (product) {
        document.getElementById('order-details').innerHTML = `
            <div class="order-main-img">
                <div class="order-img">
                    <img src="${product.img}" alt="${product.name}" />
                </div>
                <div class="bottom-img">
                    <img class="active" src="${product.img}" alt="${product.name}" />
                    <img src="${product.imgRotate}" alt="${product.name}" />
                </div>
            </div>
            <div class="order-info">
                <h2>${product.name}</h2>
                <p>$${(product.price / 100).toFixed(2)}</p>
                <div class="qty-contain">
                    <span class="sub">-</span>
                     <span class"qty">1</span>
                     <span class="add">+</span>
                </div>
                <button class="add-button">add to cart</button>
                <button class="buy-button">buy it now</button>
            </div>
        `;
      } else {
        document.getElementById('order-details').innerHTML = `<p>Product not found</p>`;
      }
    });
  