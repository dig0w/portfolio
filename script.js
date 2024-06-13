// Image back to front
function focusImage(elem, clss) {
    elem.classList.add(clss);

    let rclss = "";
    if (clss == "focusLeft") {
        rclss = "focusRight";
    } else {
        rclss = "focusLeft"
    };

    setTimeout(() => {
        if (elem.nextElementSibling) {
            elem.nextElementSibling.classList.remove(rclss);
        } else if (elem.previousElementSibling) {
            elem.previousElementSibling.classList.remove(rclss);
        };
    }, 500);
};

// Images Slide Show
function showSlides(n, i) {
    let slideIndex;

    const slideshow = document.querySelectorAll("div.slideshow")[i];
    const slides = [];

    for (let j = 0; j < slideshow.children.length; j++) {
        if (slideshow.children[j].tagName == "IMG") {
            slides.push(slideshow.children[j]);
        };
    };
    for (let k = 0; k < slides.length; k++) {
        if (slides[k].style.display != "none") {
            slideIndex = k;
        };
    };

    slides[slideIndex].style.display = "none";

    slideIndex += n;
        if (slideIndex > slides.length - 1) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        };

    slides[slideIndex].style.display = "block";
}