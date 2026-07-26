/*=========================
    BACK TO TOP
=========================*/

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================
      NAVBAR SCROLL
=========================*/

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}

/*=========================
        LIGHTBOX
=========================*/

const galleryImages = document.querySelectorAll(".gallery-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

if (galleryImages.length && lightbox && lightboxImg && closeLightbox) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

/*=========================
      SKILL ANIMATION
=========================*/

const skillsSection = document.querySelector(".skills");

if (skillsSection) {

    const bars = document.querySelectorAll(".bar div");

    const skillObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                bars.forEach(bar => {

                    bar.classList.add("animate");

                });

                skillObserver.unobserve(skillsSection);

            }

        });

    }, {

        threshold: 0.3

    });

    skillObserver.observe(skillsSection);

}

/*=========================
    ACHIEVEMENT COUNTER
=========================*/

const counters = document.querySelectorAll(".counter");

if (counters.length) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                let count = 0;

                const increment = target / 80;

                function updateCounter() {

                    count += increment;

                    if (count < target) {

                        counter.textContent = Math.ceil(count);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target + "+";

                    }

                }

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => counterObserver.observe(counter));

}

/*=========================
      ACTIVE NAVBAR
=========================*/

const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navbarLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================
      DARK / LIGHT MODE
=========================*/

const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    if(body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

/*=========================
      MOBILE MENU
=========================*/

const menuBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("navLinks");

if(menuBtn && mobileMenu){

    const menuIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click",()=>{

        mobileMenu.classList.toggle("active");

        if(mobileMenu.classList.contains("active")){

            menuIcon.classList.replace("fa-bars","fa-xmark");

        }else{

            menuIcon.classList.replace("fa-xmark","fa-bars");

        }

    });

    document.querySelectorAll("#navLinks a").forEach(link=>{

        link.addEventListener("click",()=>{

            mobileMenu.classList.remove("active");

            menuIcon.classList.replace("fa-xmark","fa-bars");

        });

    });

}

// ================= LOADING SCREEN =================

window.addEventListener("load", function(){

    const loader = document.querySelector(".loader-wrapper");


    setTimeout(function(){

        loader.classList.add("hide");

    },1500);


});
