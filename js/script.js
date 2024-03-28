var presentME = document.querySelector(".PresentME")

presentME.addEventListener('click', () => {
        window.location.href= "html/presentMe.html";
    }
)

var skill = document.querySelector(".competences-block")

skill.addEventListener('click', () => {
        window.location.href= "html/skill.html";
    }
)

var parcour = document.querySelector(".Parcour")

parcour.addEventListener('click', () => {
        window.location.href= "html/parcour.html";
    }
)

var exPro = document.querySelector(".ExperiencePro")

exPro.addEventListener('click', () => {
        window.location.href= "html/experiencePro.html";
    }
)

var proj = document.querySelector(".projet")

proj.addEventListener('click', () => {
        window.location.href= "html/projet.html";
    }
)

var loisir = document.querySelector(".loisir")

loisir.addEventListener('click', () => {
        window.location.href= "html/loisir.html";
    }
)

var actuellement = document.querySelector(".today")

actuellement.addEventListener('click', () => {
        window.location.href= "html/actuellement.html";
    }
)

function agrandir(element) {
    element.style.transform = "scale(1.05)";
    element.style.transition = "transform 0.3s ease";
    element.classList.add("cursor-pointer"); 
}

function retrecir(element) {
    element.style.transform = "scale(1)";
    element.style.transition = "transform 0.3s ease";
    element.classList.remove("cursor-pointer"); 
}
