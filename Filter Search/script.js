const data = [
  {
    id: 11,
    image:
      "https://i.pinimg.com/736x/a0/c1/45/a0c1451ef3f083e0b55da19285a2b4d5.jpg",

    names: "Iphone 16",
    rate: "./rating/45.png",
    price: 95900,
    brand: "apple",
    color: "pink",
    category: "phone",
  },
  {
    id: 10,
    image:
      "https://i.pinimg.com/736x/61/30/f0/6130f04bf5195db53f5ce0744da9fc73.jpg",
    names: "MacBook Pro 14",
    rate: "./rating/45.png",
    price: 159900,
    color: "black",
    brand: "apple",
    category: "computer",
  },
  {
    id: 9,
    image:
      "https://image-us.samsung.com/SamsungUS/home/my-assets/09192024/1_Tab_S10_Plus_Platinum_Silver_Combo_Gallery-1600x1200.jpg?$product-details-jpg$",
    names: "Galaxy Tab S10+",
    rate: "./rating/45.png",
    price: 84900,
    prevPrice: 101880, // 20% markup
    color: "silver",
    brand: "samsung",
    category: "tablets",
  },
  {
    id: 8,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDP3?wid=532&hei=582&fmt=png-alpha&.v=1664481446939",
    names: "Magic Keyboard iPad(10th)",
    rate: "./rating/40.png",
    price: 24900,
    // 15% markup
    color: "white",
    brand: "apple",
    category: "accessories",
  },
  {
    id: 7,
    image:
      "https://i.pinimg.com/736x/b2/8f/93/b28f9355678b1a85c82966ac3ba6cac3.jpg",
    names: "ASUS VZ239H-W 23",
    rate: "./rating/40.png",
    price: 8999,
    // 15% markup
    brand: "asus",
    color: "white",
    category: "computer",
  },
  {
    id: 6,
    image:
      "https://www.ais.th/content/dam/ais/consumer/store/devices/oppo/tablet/pad-air-wifi-128-gb/oppo-pad-air-128-gb.png",
    names: "OPPO Pad Air",
    rate: "./rating/45.png",
    price: 26900,
    prevPrice: 32280, // 20% markup
    color: "blue",
    brand: "oppo",
    category: "tablets",
  },
  {
    id: 5,
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S068d7addc5bf47e0a3e053fb0a66de32z.png_960x960.png_.avif",
    names: "HUAWEI FreeLace Pro 2",
    rate: "./rating/35.png",
    price: 7745,
    // 15% markup
    color: "green",
    brand: "huawei",
    category: "accessories",
  },
  {
    id: 4,
    image: "https://media.currys.biz/i/currysprod/10270696?$l-large$&fmt=auto",
    names: "Galaxy Book5 Pro 360",
    rate: "./rating/45.png",
    price: 169999,
    prevPrice: 203999, // 20% markup
    color: "silver",
    brand: "samsung",
    category: "computer",
  },
  {
    id: 3,
    image:
      "https://www.spark.co.nz/content/dam/spark/images/product-images/devices/phones/oppo/oppo-find-x8-pro/oppo_find_x8_pro_white_1.png",
    names: "OPPO Find X8 Pro",
    rate: "./rating/45.png",
    price: 88900,
    // 20% markup
    color: "blue",
    brand: "oppo",
    category: "phone",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/c2/89/1c/c2891cc37158e623096c52da202a6e07.jpg",
    names: "Gaming Monitor MSI 27-2K",
    rate: "./rating/35.png",
    price: 21999,
    // 15% markup
    brand: "msi",
    category: "computer",
  },
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/dd/9d/2d/dd9d2d44ee58fdf9304a2e89cefb742f.jpg",
    names: "IPad Pro 13-Inch M4",
    rate: "./rating/40.png",
    price: 114899,
    prevPrice: 137879, // 20% markup
    brand: "apple",
    category: "tablets",
  },
];

const displayContain = document.querySelector("#grid-contain");

// This function now correctly maps the `data` array properties
function display(list) {
  displayContain.innerHTML = "";
  const shoeHtml = list
    .map((item) => {
      const { image, names, rate, prevPrice, price } = item;
      return `
        <div class="shoe-card">
          <div class="shoe-image-container">
            <img src="${image}" class="shoe-image" alt="${names}">
          </div>
          <div class="shoe-details-section">
            <h2 class="shoe-title">${names}</h2>
            <div class="reviews">
            <div>
            <img src="${rate}" class="rate-img" alt="">
              
            </div>
          </div>
          <footer>
            <div class="shoe-price">
            ${
              prevPrice > 0
                ? `<span class="prev-price">$${(prevPrice / 100).toFixed(
                    2
                  )}</span>`
                : ""
            }
              <span class="new-price">$${(price / 100).toFixed(2)}</span>
              
            </div>
            <button class = "add-tocart-button">
              <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
          </button>
          </footer>
          </div>
          
        </div>
      `;
    })
    .join("");
  displayContain.innerHTML = shoeHtml;
}

// Initial display of all shoes
display(data.reverse());

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let id = e.target.dataset.id;
    document.querySelector(".active")?.classList.remove("active");
    btn.classList.add("active");
    console.log(id);

    if (id === "All") {
      display(data.reverse());
    } else {
      const filterData = data.filter((d) => d.category === id);
      display(filterData.reverse());
    }
  });
});
const searchInput = document.querySelector(".search-filter input");
// Search functionality
searchInput.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const searchFilteredData = data.filter(
    (item) =>
      item.names.toLowerCase().includes(searchTerm) ||
      item.brand.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      (item.color && item.color.toLowerCase().includes(searchTerm)) // Check if color exists before searching
  );
  display(searchFilteredData.reverse());
});
