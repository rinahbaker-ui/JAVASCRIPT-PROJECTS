// This function creates a countdown timer
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;

        if (seconds > 0) {
            setTimeout(tick, 1000);
        }
        else {
            alert("Time is up!");
        }
    }

    tick();
}

// This variable keeps track of the current slide number
var slideIndex = 1;

// This function shows the first slide when the page loads
showSlides(slideIndex);

// This function moves the slideshow forward or backward
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function displays the correct slide
function showSlides(n) {
    var i;

    // This gets all elements with the class name mySlides
    var slides = document.getElementsByClassName("mySlides");

    // If the user goes past the last slide, return to the first slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // If the user goes before the first slide, go to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // This hides all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // This shows the current slide
    slides[slideIndex - 1].style.display = "block";
}