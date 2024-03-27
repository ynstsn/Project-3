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

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.menu__link');
  
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        if (this.getAttribute('href').startsWith('http')) {
          window.open(this.getAttribute('href'), '_blank');
          event.preventDefault(); 
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const mainNavigation = document.getElementById('main-navigation');
    const mainNavigationToggle = document.getElementById('main-navigation-toggle');
    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }
    function enableScroll() {
        document.body.style.overflow = '';
    }
    mainNavigationToggle.addEventListener('click', function() {
        if (this.checked) {
            disableScroll(); 
        } else {
            enableScroll(); 
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var mainNavigationToggle = document.getElementById('main-navigation-toggle');
    var mainNavigation = document.getElementById('main-navigation');
    var blocks = document.querySelectorAll('.competences-container');

    mainNavigationToggle.addEventListener('change', function() {
        if (mainNavigationToggle.checked) {
            mainNavigation.classList.add('nav-main--active');
            blocks.forEach(function(block) {
                block.style.marginLeft = mainNavigation.offsetWidth + 'px';
            });
        } else {
            mainNavigation.classList.remove('nav-main--active');
            blocks.forEach(function(block) {
                block.style.marginLeft = '0';
            });
        }
    });
});
