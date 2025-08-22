// Initialize Typed.js
const typed = new Typed(".typing", {
    strings: ["Web Developer", "Mobile App Developer", "FrontEnd Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Navigation logic
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    allSection = document.querySelectorAll(".section");

function removeBackSection() {
    allSection.forEach(section => section.classList.remove("back-section"));
}

function addBackSection(index) {
    allSection[index].classList.add("back-section");
}

function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    allSection.forEach(section => section.classList.remove("active"));
    document.querySelector(`#${target}`).classList.add("active");
}

navList.forEach((item, i) => {
    const link = item.querySelector("a");

    link.addEventListener("click", function () {
        removeBackSection();
        navList.forEach((navItem, j) => {
            navItem.querySelector("a").classList.remove("active");
            if (j === i) addBackSection(j);
        });

        this.classList.add("active");
        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn(); // assumed defined elsewhere
        }
    });
});
