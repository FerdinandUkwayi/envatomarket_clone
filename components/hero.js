var slideIndex = 1;
displaySlides(slideIndex);

function newSlide(n) {
    displaySlides(slideIndex += n);
}

function currentSlide(n) {
    dislaySlides(slideIndex = n)
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName('hero-slide')
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1 ) { slideIndex = slides.length } 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    console.log(slides[slideIndex - 1])
    // dots[slideIndex - 1].className += "active"
}

// function liquidAnimation() {
//     let el = document.getElementById("turbulence");
//     tl = new TimelineMax({ paused: false });
//     tl.from(el, 3, { attr: { baseFrequency: '0.03 ' } }, 0.1);
//     tl.to(el, 3, { attr: { baseFrequency: '0.0 ' } }, 0.1);

//     tl.play()
// }