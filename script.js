function scrollFn(id) {
    document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
};

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
        if (slides[k].classList[0] == "hidden") {
            slideIndex = k;
        };
    };

    slides[slideIndex].classList.remove("hidden");

    slideIndex += n;
        if (slideIndex > slides.length - 1) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        };

    slides[slideIndex].classList.add("hidden");
};

// On Down Scroll Hide Nav Bar
let lastScrollY = 0;
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("header div");

    const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
        };

    lastScrollY = currentScrollY;
});