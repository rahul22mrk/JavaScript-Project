function changeBG(color) {
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text"); //like Array

    if (color == '#000000') { //if background color is  black then change text color = white
        for (let elm of txt) {
            elm.style.color = "white";
        }
    } else { //if background color is not black then change text color = black 
        for (let elm of txt) {
            elm.style.color = "black";
        }

    }

}