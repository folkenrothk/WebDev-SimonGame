// Time to have fun

// Notes: proving we can do style in java (this is read last)
document.getElementById("top-left").style.borderRadius = "0 20% 0 20%"
document.getElementById("top-right").style.borderRadius = "20% 0 20% 0";
document.getElementById("bottom-left").style.borderRadius = "20% 0 20% 0";
document.getElementById("bottom-right").style.borderRadius = "0 20% 0 20%";


// Variable Declarations
var startBtn = document.getElementById("start-button");

var gameBtn = document.querySelectorAll(".game-button");

var tLeft = document.getElementById("top-left");
var tRight = document.getElementById("top-right");
var bLeft = document.getElementById("bottom-left"); 
var bRight = document.getElementById("bottom-right");

var userChoices = [];

var simonSays = [];
//Array.from({length:20}, ())


//Start Button
startBtn.addEventListener("click", () => {
    document.getElementById("points").innerText = "Points: 0"; // set points back to zero
    startBtn.style.color = "#222222";
    userChoices = []; // restart user choice sequence

    // set all buttons to un-highlighted
    tLeft.style.opacity = "50%";
    tRight.style.opacity = "50%";
    bLeft.style.opacity = "50%";
    bRight.style.opacity = "50%";
});

// Game Buttons

gameBtn.forEach(elem =>{
    elem.addEventListener("click", (e) => {
        let source = e.target.id; //displaying button id in console
        userChoices.push(source); //collecting user button clicks
        // Sound Time
        const data = elem.getAttribute("data-button");
        const sound = document.querySelector(`[data-sound='${data}']`);
        sound.play();
    });
});

tLeft.addEventListener("click", () => {
    console.log("Green bb");
});

tRight.addEventListener("click", () => {
    console.log("BLOOD RED... jk");
});

bLeft.addEventListener("click", () => {
    console.log("Yellowy sunshiny day");
    
});

bRight.addEventListener("click", () => {
    console.log("I'm blue ba da de da da dum");
});