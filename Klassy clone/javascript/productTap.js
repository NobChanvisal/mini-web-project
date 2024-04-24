const Buttons = document.querySelectorAll(".js-button-header");
const productSection = document.querySelector("#product-section");
const productGrid = document.querySelectorAll(".product-item-grid");

productSection.addEventListener("click" ,(e)=>{
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if(id){
        //remove active from other buttons
        Buttons.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        })
    }
    productGrid.forEach(function(product){
        product.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
});