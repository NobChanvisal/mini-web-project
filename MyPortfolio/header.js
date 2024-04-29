const header = document.querySelector("header");
const aboutSection = document.querySelector("#about-section"); 


function handleScroll() {
    const aboutSectionOffsetTop = aboutSection.offsetTop; // Get the distance from the top to the about-section
    const scrollPosition = window.scrollY; // Current scroll position

    // If the scroll position is greater than or equal to the about-section's top offset, add the 'scrolled' class
    if (scrollPosition >= aboutSectionOffsetTop) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleScroll);

// Initial check in case the page is loaded partway down
handleScroll();

const menuBTN = document.getElementById("menu");
menuBTN.addEventListener("click", ()=>{
    const navBar = document.querySelector("nav");
    const x = navBar.classList.contains("click");
    if(!x){
        console.log("u click");
        navBar.classList.add("click");
    }
    else{
        navBar.classList.remove("click");
    }
});
