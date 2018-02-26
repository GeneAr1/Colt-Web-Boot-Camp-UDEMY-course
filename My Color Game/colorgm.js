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
var pickedColor = colors[3];    // will randomize later

var colorDisplay = document.querySelector("#colorDisplay"); // get the picked color to show up on the web page
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    // add initial colors to the squares
    squares[i].style.backgroundColor = colors[i];
    
    // add a click event listner to the squres
    squares[i].addEventListener("click", function() {

        // alert("clicked a square") // comment out this line after check
        //cgrab the color of the square 
        //alert(this.style.backgroundColor);  // do not forget the style to access the color just declare a variable
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color

        if (clickedColor === pickedColor) {
            alert("correct");
        } else {
            alert("wrong");
        }
        

    });


}