document.addEventListener("DOMContentLoaded", function(){
    const container = document.querySelector(".container"); 
    const arrowBtns = document.querySelectorAll(".wrapper i"); 
    const wrapper = document.querySelector(".wrapper"); 
  
    const firstCard = container.querySelector(".card"); 
    const firstCardWidth = firstCard.offsetWidth; 
  
    let isDragging = false, 
        startX, 
        startScrollLeft, 
        timeoutId; 
  
    const dragStart = (e) => {  
        isDragging = true; 
        container.classList.add("dragging"); 
        startX = e.pageX; 
        startScrollLeft = container.scrollLeft; 
    }; 

    const dragging = (e) => { 
        if (!isDragging) return; 
      
        // Calculate the new scroll position 
        const newScrollLeft = startScrollLeft - (e.pageX - startX); 
      
        // Check if the new scroll position exceeds  
        // the container boundaries 
        if (newScrollLeft <= 0 || newScrollLeft >=  
            container.scrollWidth - container.offsetWidth) { 
              
            // If so, prevent further dragging 
            isDragging = false; 
            return; 
        } 
      
        // Otherwise, update the scroll position of the container 
        container.scrollLeft = newScrollLeft; 
    }; 
  
    const dragStop = () => { 
        isDragging = false;  
        container.classList.remove("dragging"); 
    }; 
    const autoPlay = () => { 
      
        // Return if window is smaller than 800 
        if (window.innerWidth < 800) return;  
          
        // Calculate the total width of all cards 
        const totalCardWidth = container.scrollWidth; 
          
        // Calculate the maximum scroll position 
        const maxScrollLeft = totalCardWidth - container.offsetWidth; 
          
        // If the carousel is at the end, stop autoplay 
        if (container.scrollLeft >= maxScrollLeft) return; 
          
        // Autoplay the carousel after every 2500ms 
        timeoutId = setTimeout(() =>  
            container.scrollLeft += firstCardWidth, 2500); 
    };
    container.addEventListener("mousedown", dragStart); 
    container.addEventListener("mousemove", dragging); 
    document.addEventListener("mouseup", dragStop); 
    arrowBtns.forEach(btn => { 
        btn.addEventListener("click", () => { 
            container.scrollLeft += btn.id === "left" ?  
                -firstCardWidth : firstCardWidth; 
        }); 
    }); 
    
});