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