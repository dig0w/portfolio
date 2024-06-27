function scrollFn(id) {
    document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });

    function scrollEnd() {
        const navbar = document.querySelector("header div");
            if(navbar) {
                console.log("navbar");
                navbar.classList.remove("hidden");

                window.removeEventListener("scrollend", scrollEnd);
            };
    };

    window.addEventListener("scrollend", scrollEnd);

    return;
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

    return;
};

// Images Slide Show
function showSlides(n, i) {
    let slideIndex;

    const slideshow = document.querySelectorAll("div.slideshow div.images")[i];

    slideshow.classList.toggle("second");

    return;
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

    return;
});