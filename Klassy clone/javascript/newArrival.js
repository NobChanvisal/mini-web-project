const newArrivalContainer = document.querySelector(".js-new-arrival-item-grid");
const jsonNewArrivalFile = "./newArrival.json";

fetch(jsonNewArrivalFile).then((Response)=>{
    return Response.json();
})
.then((data)=>{
    data.forEach((product)=>{
        const {img,name,price} = product;
        newArrivalContainer.innerHTML += `
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
