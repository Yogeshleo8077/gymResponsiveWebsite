/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// MENU SHOW
// Validate if constant is exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// MENU HIDDEN
// Validate if constant is exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 view port height, add the scroll header class
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    })
}

window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll up
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logos__img, .program__card, .pricing__card`, { interval: 100 });
sr.reveal(`.choose__img, .calculate__content`, { origin: "left" });
sr.reveal(`.choose__content, .calculate__img`, { origin: "right" });
/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate__form");
const calculateCm = document.getElementById("calculate__cm");
const calculateKg = document.getElementById("calculate__kg");
const calculateMessage = document.getElementById("calculate__message");

const calculateBmi = (e) => {
    e.preventDefault();

    // Check if the fields have a value
    if (calculateCm.value === '' || calculateKg.value === '') {
        //Add and remove color
        calculateMessage.classList.remove("color-green");
        calculateMessage.classList.add("color-red");

        //Show message
        calculateMessage.textContent = "Fill in the Height and Weight 🧑‍💻";

        //Remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000);
    } else {
        //BGI Formula
        const cm = calculateCm.value / 100;
        const kg = calculateKg.value;
        const bmi = Math.round(kg / (cm * cm));

        //Show your health status
        if (bmi < 18.5) {
            //Add color and display message
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`;
        } else if (bmi < 25) {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 😃`;
        } else {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😔`;
        }

        //To clear the input fields
        calculateCm.value = '';
        calculateKg.value = '';

        //Remove message four seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000);
    }
}
calculateForm.addEventListener("submit", calculateBmi); 

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("content-form");
const contactMessage = document.getElementById("contact-message");
const contactUser = document.getElementById("content-user");

const sendEmail = (e) => {
    e.preventDefault();

    //Check if the fields have a value
    if (contactUser.value === '') {
        // Add and remove color
        contactMessage.classList.remove("color-green");
        contactMessage.classList.add("color-red");

        // Show message
        contactMessage.textContent = "You must enter your email. ☝️"

        // Remove message three seconds
        setTimeout(() => {
            contactMessage.textContent = "";
        }, 3000);
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm("service_ekz8zxl", "template_5n6q9a5", "#content-form", "K5Cz2Uoc6BtIaJajM")
            .then(() => {
                // Show message and add color
                contactMessage.classList.add("color-green");
                contactMessage.textContent = "You registered successfully. 💪";
                // Remove message three seconds
                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 3000);
            }, (error) => {
                // Mail sending error
                alert("OOPS! SOMETHING HAS FAILED...", error);
            })

        // To clear the input field
        contactUser.value = "";
    }
}


contactForm.addEventListener("submit", sendEmail);