window.addEventListener('scroll', function() {
    let navBar = document.getElementById("menu-bar");
    console.log(navBar);
    if (window.pageYOffset >= 190) {
        navBar.classList.add('sticky');

    } else if (window.pageYOffset <= 190) {
        navBar.classList.remove('sticky');

    }

});