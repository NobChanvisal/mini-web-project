const productContainer = document.querySelector(".js-item-grid");
const jsonFile = "./product.json";

fetch(jsonFile).then((Response)=>{
    return Response.json();
})
.then((data)=>{
    data.forEach((product)=>{
        const {img,name,price} = product;
        productContainer.innerHTML += `
        <div class="product-cart">
            <div class="product-image">
                <img class="item-image" src="${img}" alt=""/>
            </div>
            <div class="flex-display product-info">
                <div class="product-name">${name}</div>
                <span>$${price/100}</span>
            </div>
        </div>
        `
    })
})
