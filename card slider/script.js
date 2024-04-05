const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const firstCardWidth = container.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const containerChildrens = [...container.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the container at once
let cardPerView = Math.round(container.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of container for infinite scrolling
containerChildrens.slice(-cardPerView).reverse().forEach(card => {
    container.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of container for infinite scrolling
containerChildrens.slice(0, cardPerView).forEach(card => {
    container.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the container at appropriate postition to hide first few duplicate cards on Firefox
container.classList.add("no-transition");
container.scrollLeft = container.offsetWidth;
container.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the container left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        container.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    container.classList.add("dragging");
    // Records the initial cursor and scroll position of the container
    startX = e.pageX;
    startScrollLeft = container.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the container based on the cursor movement
    container.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    container.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the container is at the beginning, scroll to the end
    if(container.scrollLeft === 0) {
        container.classList.add("no-transition");
        container.scrollLeft = container.scrollWidth - (2 * container.offsetWidth);
        container.classList.remove("no-transition");
    }
    // If the container is at the end, scroll to the beginning
    else if(Math.ceil(container.scrollLeft) === container.scrollWidth - container.offsetWidth) {
        container.classList.add("no-transition");
        container.scrollLeft = container.offsetWidth;
        container.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over container
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the container after every 2500 ms
    timeoutId = setTimeout(() => container.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

container.addEventListener("mousedown", dragStart);
container.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
container.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);