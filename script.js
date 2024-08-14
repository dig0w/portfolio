var scrolling = false;

async function scrollFn(id) {
    const element = document.querySelector(id);

    if (element) {
        scrolling = true;

        await smoothScrollIntoView(element);

        if (id == "#home") {
            window.location.hash = "";
        } else {
            window.location.hash = id.split("#")[1];
        };

        scrolling = false;
    };
};

function smoothScrollIntoView(element) {
    return new Promise((resolve) => {
        let isScrolling;

        function onScrollStop() {
            clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                window.removeEventListener("scroll", onScrollStop);
                resolve();
            }, 100);
        };

        window.addEventListener("scroll", onScrollStop);

        element.scrollIntoView({ behavior: "smooth", block: "start" });

        onScrollStop();
    });
};

// Images Slide Show
function showSlides(n, i) {
    const slideshow = document.querySelectorAll("div.slideshow div.images")[i];

    slideshow.classList.toggle("second");

    return;
};

// On Down Scroll Hide Nav Bar
let lastScrollY = 0;
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("header div");

    const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && !scrolling) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
        };

    lastScrollY = currentScrollY;

    return;
});