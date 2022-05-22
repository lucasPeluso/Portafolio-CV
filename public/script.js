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

window.onscroll = function(){animacionElementos()};

const $habilidades = document.querySelector(".skills-habilidades");
    $tecnologias = document.querySelector(".skills-tecnologias");
    $itemLeft = document.querySelector(".item-left");
    $itemRight = document.querySelector(".item-right");
    $itemBottom = document.querySelector(".item-bottom")

let distancia_habilidades, distancia_tecnologias, distancia_item_left, distancia_item_right, distancia_item_bottom;

function animacionElementos() {
    distancia_habilidades = window.innerHeight - $habilidades.getBoundingClientRect().top;
    
    if(distancia_habilidades >= 200){
        $habilidades.classList.add("efecto-left");
    }

    distancia_tecnologias = window.innerHeight - $tecnologias.getBoundingClientRect().top;
    if(distancia_tecnologias >= 100){
        $tecnologias.classList.add("efecto-bottom");
    }

    distancia_item_left = window.innerHeight - $itemLeft.getBoundingClientRect().top;
    if(distancia_item_left >= 100){
        $itemLeft.classList.add("efecto-left");
    }

    distancia_item_bottom = window.innerHeight - $itemBottom.getBoundingClientRect().top;
    if(distancia_item_bottom >= 100){
        $itemBottom.classList.add("efecto-bottom");
    }
}

