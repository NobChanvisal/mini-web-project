const Slide = document.querySelectorAll(".slide");

Slide.forEach((slide) =>{
    slide.addEventListener("click", ()=>{
        removeActive();
        slide.classList.add("active");
    })
})

function removeActive(){
    Slide.forEach((slide) =>{
        slide.classList.remove("active");
    })
}