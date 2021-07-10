const headerItems = document.getElementById("nav");

function showDropDown(){
    headerItems.classList.toggle("active");
    hamburger.classList.toggle("act");
}

const body = document.getElementById("body");
const DarkButton = document.getElementById("darkButton");
const hamburger = document.getElementById("hamburger-button");

function darkgray(){
    body.classList.toggle("active");
    DarkButton.classList.toggle("active");
    hamburger.classList.toggle("active");
}

const blueButton = document.getElementById("blueButton");

function blueTheme(){
    body.classList.toggle("blue");
    blueButton.classList.toggle("active");
    hamburger.classList.toggle("blue");
}

const pinkButton = document.getElementById("pinkButton");

function pinkTheme(){
    body.classList.toggle("pink");
    pinkButton.classList.toggle("active");
    hamburger.classList.toggle("pink");
}

const creamButton = document.getElementById("creamButton");

function creamTheme(){
    body.classList.toggle("cream");
    creamButton.classList.toggle("active");
    hamburger.classList.toggle("cream");
}

const lightwhiteButton = document.getElementById("lightwhiteButton");

function lightwhiteTheme(){
    body.classList.toggle("lightwhite");
    lightwhiteButton.classList.toggle("active");
    hamburger.classList.toggle("lightwhite");
}
