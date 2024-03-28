
var train = document.querySelector(".train");

train.addEventListener('click', () => {
    window.location.href = "https://github.com/ynstsn/Project-1";
});


/*
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
*/