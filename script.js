let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex and show the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;  // Start from the first slide if at the end
    }

    slides[slideIndex - 1].style.display = "block";

    // Set the interval for the slideshow (change 2000 to desired interval in milliseconds)
    setTimeout(showSlides, 2000);
}

// Initial call to start the slideshow
showSlides();
