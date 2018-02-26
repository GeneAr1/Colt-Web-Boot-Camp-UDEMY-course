// alert("connected");

// set up array of the 6 colors
var  colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

// loop through the array and assign the squares each on of the colors later 
// we can randomize first get all the squares out ot the document

var squares = document.querySelectorAll(".square");

for (var i = 0; i < squares.length; i++){

    squares[i].style.background = colors[i];
}