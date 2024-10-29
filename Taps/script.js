const Buttons = document.querySelectorAll("button");
const Content = document.querySelectorAll(".content");

Buttons.forEach(btns =>{
    btns.addEventListener("click" ,(e)=>{
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
})