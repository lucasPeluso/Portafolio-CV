// ************** Menu *************

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", e => {
        if(!e.target.matches(".menu a"))
        return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    })
})(document);


// ************** Intersection Observer *************

const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav")
const menuLinks = document.querySelectorAll(".menu a")

const options = {
    threshold: "0.5"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            menuLinks.forEach((link) => {
                link.classList.remove("selected");
                if (e.target.id === link.dataset.nav) {
                    link.classList.add("selected");
                }
            })
        }
    });
},options);

sections.forEach((section) => {
    observer.observe(section);
});

// ************** ContactForm *************

((d) => {
    const $form = d.querySelector(".contact-form"),
        $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/lucaspelusoweb@gmail.com", {
            method: "POST",
            body: new FormData(e.target),
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
    })
    .catch(err=> {
        console.log(err);
        let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
        $response.querySelector("h4").innerHTML = `Error ${err.status}: ${message}`;
    }).finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
            location.hash = "#close";
        }, 3000);
    });
    });
})(document);


// **************** Animaciones ***********

window.onscroll = () => animationElements()

const skills = document.querySelector(".skills-habilidades");
    technologies = document.querySelector(".skills-tecnologias");
    itemBottom = document.querySelector(".item-bottom")
    itemBottomTwo = document.querySelector(".item-bottom-two")
    itemBottomThree = document.querySelector(".item-bottom-three")
    itemBottomFour = document.querySelector(".item-bottom-four")
    itemBottomFive = document.querySelector(".item-bottom-five")

let distanceSkills, distanceTechnologies, distanceItemBottom, distanceItemBottomTwo, distanceItemBottomThree, distanceItemBottomFour, distanceItemBottomFive;

const animationElements = () => {
    distanceSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanceSkills >= 200){
        skills.classList.add("efect-left");
    }

    distanceTechnologies = window.innerHeight - technologies.getBoundingClientRect().top;
    if(distanceTechnologies >= 100){
        technologies.classList.add("efect-bottom");
    }

    distanceItemBottom = window.innerHeight - itemBottom.getBoundingClientRect().top;
    if(distanceItemBottom >= 100){
        itemBottom.classList.add("efect-bottom");
    }

    distanceItemBottomTwo = window.innerHeight - itemBottomTwo.getBoundingClientRect().top;
    if(distanceItemBottomTwo >= 100){
        itemBottomTwo.classList.add("efect-bottom");
    }

    distanceItemBottomThree = window.innerHeight - itemBottomThree.getBoundingClientRect().top;
    if(distanceItemBottomThree >= 100){
        itemBottomThree.classList.add("efect-bottom");
    }

    distanceItemBottomFour = window.innerHeight - itemBottomFour.getBoundingClientRect().top;
    if(distanceItemBottomFour >= 100){
        itemBottomFour.classList.add("efect-bottom");
    }

    distanceItemBottomFive = window.innerHeight - itemBottomFive.getBoundingClientRect().top;
    if(distanceItemBottomFive >= 100){
        itemBottomFive.classList.add("efect-bottom");
    }

}

