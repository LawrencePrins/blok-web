var hamburger = document.querySelector('.burger');
var navLinks = document.querySelector('.nav2');

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('nav-active');
    
    
    // hamburger verandert in kruisje
    hamburger.classList.toggle('kruisje');
});



