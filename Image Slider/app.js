//images=4(0,1,2,3)
let flag = 0;

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}
slideshow(flag);

function slideshow(num) {
    let slides = document.getElementsByClassName('slide');

    if (num < 0) {
        num = slides.length - 1;
        flag = slides.length - 1;
    } else if (num >= slides.length) {
        flag = 0;
        num = 0;
    }
    for (let x of slides) {
        x.style.display = "none";
    }
    slides[num].style.display = "block";

}