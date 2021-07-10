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