// Time to have fun

// Class Notes: proving we can do style in java (this is read last)
    document.getElementById("top-left").style.borderRadius = "0 20% 0 20%"
    document.getElementById("top-right").style.borderRadius = "20% 0 20% 0";
    document.getElementById("bottom-left").style.borderRadius = "20% 0 20% 0";
    document.getElementById("bottom-right").style.borderRadius = "0 20% 0 20%";

// Variable Declarations
var startBtn = document.getElementById("start-button");
var ogMsg = document.getElementById("points").innerText 
var ogColor = startBtn.style.color;


var gameBtns = document.querySelectorAll(".game-button");

var tLeft = document.getElementById("top-left");
var tRight = document.getElementById("top-right");
var bLeft = document.getElementById("bottom-left"); 
var bRight = document.getElementById("bottom-right");

var userChoices = []; // user input/response
var simonSays = []; // gamePattern

points = 0;
const delay = 5000; //delay for user response


//Modules of Game Pieces
//Making Levels & Turns
    // put game-button ids in an array
    const elements = Array.from(gameBtns).map(btn => {
        return btn.id //tell me what was pressed (outcome of ids)
    });

    // Function to choose random button
    const chooseRandomBtn = () => {
        let choice = Math.floor(Math.random() * elements.length);
        return elements[choice];
    };


    // Check user choices vs game sequence
    const verifyPattern = () => {
        if(userChoices.length !== simonSays.length) return false;
        for(var i = 0; i < userChoices.length; i++)
            {
                if(simonSays[i] !== userChoices[i]) return false;
            }
            return true;
    };

    // Working with time
        // setTimeout = once, setInterval = repeatedly (in milliseconds)
        
        /*Notes
        const oneSecond = setTimeout(() => {
            console.log("1 second bruh");
        }, 1000);
        

        const levelTime = setInterval(() => {
            console.log("5 seconds")
        }, 5000);

        // i want to stop the repetition
        clearInterval(levelTime);
        */

    //TURN
    function playTurn() {
        let lvl = 0;
        userChoices = []; //clear user choices per turn
        //COMPUTER TURN
        simonSays.push(chooseRandomBtn()); //generate pattern
        const compTurn = setInterval(() =>{
            let id = simonSays[lvl];
            activateBtn(id);
            lvl++;
            if (lvl >= simonSays.length){
                clearInterval(compTurn);
            }
        }, 750);

        //PLAYER TURN
        setTimeout(() => {
            if(verifyPattern()){
                lvl++;
                playTurn();
                points++;
                document.getElementById("points").innerText = `Points: ${points}`;
            } else {
                startBtn.style.color = ogColor;
                gameBtns.forEach(elem => {
                    elem.style.opacity = "100%";
                });
                document.getElementById("points").innerText = "You Lose! Play Again?";
                document.querySelector(`[data-sound=lose]`).play();
            };
        }, simonSays.length * delay);

    };



// Game Buttons
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

function activateBtn(id) {
    const elem = document.getElementById(id);
    setTimeout(() => {
        elem.style.opacity = "100%";
        // Sound Time
        const data = elem.getAttribute("data-button");
        const sound = document.querySelector(`[data-sound='${data}']`);
        sound.play();
    }, 750);
    setTimeout(() => {
        elem.style.opacity = "50%"; 
    }, 1500);
};

gameBtns.forEach(elem =>{
    elem.addEventListener("click", (e) => {
        let source = e.target.id; //displaying button id in console
        userChoices.push(source); //collecting user button clicks
        activateBtn(source);
    });
});


//Start Button & Start Game
startBtn.addEventListener("click", () => {
    document.getElementById("points").innerText = "Points: 0"; // set points back to zero
    startBtn.style.color = "#222222";
    gameBtns.forEach(elem => {
        elem.style.opacity = "50%";
    });
    userChoices = []; // restart user choice sequence
    simonSays = []; // restart game pattern
    points = 0; //reset points
    playTurn();
});