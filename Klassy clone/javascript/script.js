const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const wrapper = document.querySelector(".wrapper");
const proSliderContainer = document.querySelector(".pro-slider-container");
const firstCardWidth = proSliderContainer.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const containerChildren = [...proSliderContainer.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the pro-slider-container at once
let cardPerView = Math.round(proSliderContainer.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to the beginning of the pro-slider-container for infinite scrolling
containerChildren.slice(-cardPerView).reverse().forEach(card => {
    proSliderContainer.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to the end of the pro-slider-container for infinite scrolling
containerChildren.slice(0, cardPerView).forEach(card => {
    proSliderContainer.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the pro-slider-container to an appropriate position to hide the first few duplicate cards on Firefox
proSliderContainer.classList.add("no-transition");
proSliderContainer.scrollLeft = proSliderContainer.offsetWidth;
proSliderContainer.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the pro-slider-container left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        proSliderContainer.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    proSliderContainer.classList.add("dragging");
    // Record the initial cursor and scroll position of the pro-slider-container
    startX = e.pageX;
    startScrollLeft = proSliderContainer.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return; // If isDragging is false, return from here
    // Update the scroll position of the pro-slider-container based on the cursor movement
    proSliderContainer.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    proSliderContainer.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the pro-slider-container is at the beginning, scroll to the end
    if (proSliderContainer.scrollLeft === 0) {
        proSliderContainer.classList.add("no-transition");
        proSliderContainer.scrollLeft = proSliderContainer.scrollWidth - (2 * proSliderContainer.offsetWidth);
        proSliderContainer.classList.remove("no-transition");
    }
    // If the pro-slider-container is at the end, scroll to the beginning
    else if (Math.ceil(proSliderContainer.scrollLeft) === proSliderContainer.scrollWidth - proSliderContainer.offsetWidth) {
        proSliderContainer.classList.add("no-transition");
        proSliderContainer.scrollLeft = proSliderContainer.offsetWidth;
        proSliderContainer.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over pro-slider-container
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the pro-slider-container after every 2500 ms
    timeoutId = setTimeout(() => proSliderContainer.scrollLeft += firstCardWidth, 2500);
}

autoPlay();

proSliderContainer.addEventListener("mousedown", dragStart);
proSliderContainer.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
proSliderContainer.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
