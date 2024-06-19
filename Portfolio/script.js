document.getElementById('menu').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('showNav-bar');
});


const typed = document.querySelector(".typed");
if(typed) {
    let typedStr = typed.getAttribute("data-typed-items");
    typedStr = typedStr.split(",");
    new Typed(".typed", {
        strings: typedStr,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    })
}

const TapButtons = document.querySelectorAll(".tap-button");
const ResumeContain = document.querySelector(".resume-container");
const Content = document.querySelectorAll(".content");

ResumeContain.addEventListener("click" ,(e)=>{
    // console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if(id){
        //remove active from other buttons
        TapButtons.forEach(function(btn){
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
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes for About section
                if (entry.target.id === 'about-section') {
                    const aboutImage = entry.target.querySelector('img');
                    const aboutInfo = entry.target.querySelector('.about-info');

                    aboutImage.classList.add('animate__zoomInDown', 'animate__slow');
                    aboutInfo.classList.add('animate__zoomIn', 'animate__delay-1s');
                }

                // Add animation classes for service cards
                if (entry.target.classList.contains('service-card')) {
                    entry.target.classList.add('animate__fadeInUp', 'animate__slow');
                    if (entry.target.classList.contains('animate__delay-1s')) {
                        entry.target.classList.add('animate__delay-1s');
                    }
                    if (entry.target.classList.contains('animate__delay-2s')) {
                        entry.target.classList.add('animate__delay-2s');
                    }
                }

                // Stop observing once the animation has been added
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const aboutSection = document.getElementById('about-section');
    observer.observe(aboutSection);

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));
});
