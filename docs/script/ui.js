// Time to have fun


document.getElementById("top-left").style.borderRadius = "0 20% 0 20%"
document.getElementById("top-right").style.borderRadius = "20% 0 20% 0";
document.getElementById("bottom-left").style.borderRadius = "20% 0 20% 0";
document.getElementById("bottom-right").style.borderRadius = "0 20% 0 20%";


// variable declarations
var startBtn = document.getElementById("start-button");
var tLeft = document.getElementById("top-left");
var tRight = document.getElementById("top-right");
var bLeft = document.getElementById("bottom-left"); 
var bRight = document.getElementById("bottom-right");

//Start Button
startBtn.addEventListener("click", () => {
    document.getElementById("points").innerText = "Points: 0";
    startBtn.style.color = "#222222";
    tLeft.style.opacity = "50%";
    tRight.style.opacity = "50%";
    bLeft.style.opacity = "50%";
    bRight.style.opacity = "50%";
});

//Simon Buttons

tLeft.addEventListener("click", () => {
    tLeft.style.borderStyle = "dashed";
});

tRight.addEventListener("click", () => {
    tRight.style.borderStyle = "dashed";
});

bLeft.addEventListener("click", () => {
    bLeft.style.borderStyle = "dashed";
});

bRight.addEventListener("click", () => {
    bRight.style.borderStyle = "dashed";
});