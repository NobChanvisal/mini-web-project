const products = [
  {
    id: 1,
    names: "Adidas Campus",
    image:
      "https://i.pinimg.com/736x/03/e5/d5/03e5d50ad0afdfdbae803d84a217f653.jpg",
    price: 100,
    color: "brown",
  },
  {
    id: 2,
    names: "PUMA Suede XL",
    image:
      "https://i.pinimg.com/736x/e2/a3/03/e2a303e84da9eca0a28d6db45ccc6552.jpg",
    price: 150,
    color: "green",
  },
  {
    id: 3,
    names: "Nike air",
    image:
      "https://i.pinimg.com/736x/32/39/93/3239930a292ec4a501c7865e88af36fc.jpg",
    price: 95,
    color: "white",
  },
  {
    id: 4,
    names: "Converse Chuck 70",
    image:
      "https://i.pinimg.com/736x/99/ec/61/99ec6168c0b8cbce642e024718cc6cc4.jpg",
    price: 100,
    color: "black",
  },
  {
    id: 5,
    names: "New Balance M's 990v6",
    image:
      "https://i.pinimg.com/736x/ee/de/3d/eede3d34e174364f9bcd3cef00d7d506.jpg",
    price: 85,
    color: "dark gray",
  },
  {
    id: 6,
    names: "adidas F50 Elite",
    image:
      "https://i.pinimg.com/736x/a1/2a/17/a12a17af9050ef47534343a4d119309c.jpg",
    price: 105,
    color: "white blue",
  },
  {
    id: 6,
    names: "Nike Air Zoom Mercurial Superfly IX",
    image:
      "https://i.pinimg.com/736x/7d/4e/64/7d4e64e84e24227653639e5b9305bcd0.jpg",
    price: 120,
    color: "pink",
  },
  {
    id: 7,
    names: "Puma Womens Ultra 5",
    image:
      "https://i.pinimg.com/736x/25/5e/5b/255e5b9bae3aa3d2c6ba951bd533184e.jpg",
    price: 120,
    color: "white",
  },
];
import { cart, saveToCart } from "./cart.js";
const productsContains = document.querySelector("#product-grid");

const addTocart = (productid) => {
  console.log("click");
  console.log("Add to cart button clicked for product ID:", productid);
  let getProduct = products.find((pro) => pro.id === productid);
  console.log(getProduct);

  if (!getProduct) {
    alert("Product code not found !!");
    return;
  }

  let prevProducts = cart.find((item) => item.id === productid);
  if (prevProducts) {
    prevProducts.qty += 1;
  } else {
    const newProduct = {
      id: getProduct.id,
      name: getProduct.names,
      price: getProduct.price,
      qty: 1,
      image: getProduct.image,
      color: getProduct.color,
    };
    cart.push(newProduct);
  }
  saveToCart();
  alert("Product added to cart !!");
};
window.addTocart = addTocart;
function displayProduct(data) {
  const productHtml = data
    .map((product, index) => {
      const { id, names, image, price, color } = product;
      return `
        <div
        class="w-full bg-white shadow-md rounded-xl"
      >
          <img
            src=${image}
            alt=${names}
            class="h-80 w-full object-cover rounded-t-xl"
          />
          <div class="px-4 py-3">
            <span class="text-gray-400 mr-3 uppercase text-xs">${color}</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              ${names}
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black my-3">
                $${price.toFixed(2)}
              </p>
              <button class="ml-auto underline cursor-pointer hover:text-[#0D5EA6]" onclick='addTocart(${
                product.id
              })' >
                add to cart
              </button>
            </div>
          </div>
      </div>
    `;
    })
    .join("");
  productsContains.innerHTML = productHtml;
}
displayProduct(products);
console.log(cart);
