var header = document.querySelector("header")

var intro = document.querySelector(".intro")

// Ajoutez un auditeur d'événements de défilement à la fenêtre
window.addEventListener('scroll', function() {
  // Obtenez la position actuelle du scroll
  let scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= 500){
        header.classList.add("fixedBar")
        intro.style.paddingTop = "6.5%"
    }else{
        header.classList.remove("fixedBar")
        intro.style.paddingTop = "3%"
    }

});
