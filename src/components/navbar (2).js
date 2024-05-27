let state = true;

function navbarClick() {

    const navBarBottom = document.getElementById("navBarBottom");
    const firstSection = document.getElementsByClassName("firstSection");

    if(state == true) {
        navBarBottom.style.display = "flex";
        firstSection[0].style.margin = "38rem 0rem";
        state = false;
    } else {
        navBarBottom.style.display = "none";
        firstSection[0].style.margin = "12rem 0rem";
        state = true;
    }
}

function navBbar() {
  document.getElementById("navBar").innerHTML = '<div class="navBarTop">'+
                                                  '<a href="/src/index.html">DELICRAVE</a>'+
                                                  '<p onclick="navbarClick()">☰</p>'+
                                                '</div>'+
                                                '<ul id="navBarBottom">'+
                                                  '<li><a href="/src/index.html">INICIO</a></li>'+
                                                  '<li><a href="/src/views/catalogue/catalogue.html">CATALOGO</a></li>'+
                                                  '<li><a href="/src/index.html#aboutUs">SOBRE NOSOTROS</a></li>'+
                                                  '<li><a href="/src/views/contactUs/contactUs.html">CONTACTO</a></li>'+
                                                  '<li><a href="/src/views/locations/locations.html">LOCACION</a></li>'+
                                                '</ul>';
}