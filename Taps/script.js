const Buttons = document.querySelectorAll("button");
const Abouts = document.querySelector(".about");
const Content = document.querySelectorAll(".content");

Abouts.addEventListener("click" ,(e)=>{
    // console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if(id){
        //remove active from other buttons
        Buttons.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        })
    }
    Content.forEach(function(content){
        content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
});