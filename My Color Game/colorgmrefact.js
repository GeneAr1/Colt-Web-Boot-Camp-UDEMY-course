// 
// &&&&&&&&&&&&&&&&&&&&&&&& This is copy of colorgm.js used for final refactor and code cleanup
// &&&&&&&&&&&&&&&&&&&&&&&& Wanted to keep both for learning purposes 
//################## VARIABLE DECLARATION SECTION##############################

var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

// loop through the array and assign the squares each on of the colors later 
// we can randomize first get all the squares out ot the document

var squares = document.querySelectorAll(".square");
// var pickedColor = colors[3]; // will randomize later
var pickedColor = pickColor();
var h1 = document.querySelector("h1");

messageDisplay = document.getElementById("message");

var colorDisplay = document.querySelector("#colorDisplay"); // get the picked color to show up on the web page
colorDisplay.textContent = pickedColor;
var resetButton = document.querySelector("#resetbtn");

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// refactorcomment out the easy and hard button and make list of buttons 
// yo step through to create event listeners
// var easyBtn = document.querySelector("#easybtn");
// var hardBtn = document.querySelector("#hardbtn");
// ###########################################################################

// refactor new variable caled modeButtons use selectorAll to get all the buttons in class
var modeButtons = document.querySelectorAll(".mode");

// ??###################LOGIC SECTION########################
// add evetn listeners to easy, hard and reset buttons
// easy button allows play with only 3 color squares
// always generate the new colors for color array

// make one function Init to clean up code and set the game up at inital start

init();


// could break the init funcion into two seperate functions to make more readable
// one function getModeButtons() and one function prepSquares() not doing it now but in 
// real world should do in refactor
function init() {
    // create event listeners for modeButtons
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //figuire out how many squares to show
            //pick newcolors for the squares
            //pick a new pickedColor
            //update page todo all this
            if (this.textContent === "Easy") {
                numOfSquares = 3;
            } else {
                numOfSquares = 6;
            }
            //the above could be written as a tertirary function
            //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            //this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // does exact same as above 4 lines;        
            // good use case for terniary operator simple arguement with only 2 possible choises
            reset();
        });
    }
    for (var i = 0; i < squares.length; i++) {

        // add a click event listner to the squres
        squares[i].addEventListener("click", function () {
            // alert("clicked a square") // comment out this line after check
            //cgrab the color of the square 
            //alert(this.style.backgroundColor);  // do not forget the style to access the color just declare a variable
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if (clickedColor === pickedColor) {
                // alert("correct");
                messageDisplay.textContent = "Correct!";
                ChangeColors(clickedColor);
                resetButton.textContent = "Play Again?";
                h1.style.background = clickedColor;
            } else {
                // alert("wrong"); 
                //you want to fade the color square if wrong incorrect
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again?";
            }
        });
    }
    reset();
}






//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//function reset will do all the setup for all other functions
//picking picked color
//reseting the squares
// setting button labels
function reset() {

    
    // need to generate all new colors for array
    colors = generateRandomColors(numOfSquares);
    // need to pick a new random color from the array
    pickedColor = pickColor();
    //change colorDisplay in header to picked color
    colorDisplay.textContent = pickedColor;
    // get rid of message on reset otherwise it hangs around cluttering line
    messageDisplay.textContent = "";
    //set the reset button to new colors unless player wins then set to play agian in win code
    resetButton.textContent = "New Colors?";
    // change all the colors of sqares in the array to new colors
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    // set backgound in H1 back to black after win or reset
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
})



function ChangeColors(color) {
    // loop throught the squares and change the color to the correct color or pickedColor
    for (var i = 0; i < squares.length; i++) {
        // change all squares to the correct color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //funciton for picking the random color 
    // need to pick a random number and use this number to pick color out of array
    // get random number use (Math.random * 6) to get numbers we will use the length of array instead
    // Math.random returns numbers between 0 and 1 but not including 1 than use Math.floor to lose the after decimal
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into array;
        arr.push(randomColor());
    }
    //return the array
    return arr;
}


function randomColor() {
    // pic a "red" from 0 to 255
    var rClr = Math.floor(Math.random() * 256);
    // mult by 256 so lyou get one higher 
    //so highest number possible is 255 when usin floor
    // pic a "green" from 0 to 255
    var gClr = Math.floor(Math.random() * 256);
    // pic a "blue" from 0 to 255
    var bClr = Math.floor(Math.random() * 256);

    //need to place the colors in a string that mimics the rgb(r, g, b) paying attention to the spaces after the commas
    return "rgb(" + rClr + "," + " " + gClr + "," + " " + bClr + ")";
}