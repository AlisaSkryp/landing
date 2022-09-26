const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header= document.querySelector(".header");
const overlay= document.querySelector(".overlay");
const fadeElems= document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click",function(){
    console.log("open hamburger");

    if(header.classList.contains("open")){ //Close Hamburger menu
        body.classList.remove("no-scroll");
        header.classList.remove("open");
        fadeElems.forEach(function(element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        })

    }
    else{ //Open hamburger menu
        body.classList.add("no-scroll");
        header.classList.add("open");
        fadeElems.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        })

    }
});


let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}