// alert("connected");

// set up array of the 6 colors
// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]
//
//################## VARIABLE DECLARATION SECTION##############################
//
// set color array by calling generaterandomcolors funtion will take one argument number of colors to generate
var colors = generateRandomColors(6);

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



// ??###################LOGIC SECTION########################

resetButton.addEventListener("click", function () {
    // alert("CLICKED RESET BUTTON");
    // need to generate all new colors for array
    colors = generateRandomColors(6);
    // need to pick a new random color from the array
    pickedColor = pickColor();
    //change colorDisplay in header to picked color
    colorDisplay.textContent = pickedColor;

    // change all the colors of sqares in the array to new colors
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    // set backgound in H1 back to black after win or reset
    h1.style.background = "black";
})



for (var i = 0; i < squares.length; i++) {
    // add initial colors to the squares
    squares[i].style.backgroundColor = colors[i];

    // add a click event listner to the squres
    squares[i].addEventListener("click", function () {

        // alert("clicked a square") // comment out this line after check
        //cgrab the color of the square 
        //alert(this.style.backgroundColor);  // do not forget the style to access the color just declare a variable
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color

        if (clickedColor === pickedColor) {
            // alert("correct");
            messageDisplay.textContent = "correct";
            ChangeColors(clickedColor);
            resetButton.textContent = "Play Again";
            h1.style.background = clickedColor;
        } else {
            // alert("wrong"); 
            //you want to fade the color square if wrong incorrect
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });
}

function ChangeColors (color){
    // loop throught the squares and change the color to the correct color or pickedColor
    for (var i = 0; i < squares.length; i++) {
        // change all squares to the correct color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    //funciton for picking the random color 
    // need to pick a random number and use this number to pick color out of array
    // get random number use (Math.random * 6) to get numbers we will use the length of array instead
    // Math.random returns numbers between 0 and 1 but not including 1 than use Math.floor to lose the after decimal
    var random = Math.floor(Math.random()* colors.length);
    return colors[random];
};

function generateRandomColors(num){
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
return "rgb(" + rClr + "," + " "+ gClr + "," + " "+ bClr + ")";

}