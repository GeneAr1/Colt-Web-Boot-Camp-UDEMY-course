//add alert to make sure conncected
//alert("Connected");

// VARS

var p1button = document.querySelector("#p1btn");
var p2button = document.getElementById("p2btn");
var rsetbtn = document.getElementById("resetbtn");

var h1p1 = document.querySelector(".player1");
var h1p2 = document.querySelector(".player2");
var maxMoves = document.querySelector(".playingto");

var gameOver = false;


var p1Score = 0;
var p2Score = 0;
var winScore = 5
var numInput = document.querySelector("input");
var p = document.querySelector("p");

// Button code

p1button.addEventListener("click", function () {
    // alert("clicked");
    if (!gameOver) {
        p1Score++;
        if (p1Score === winScore) {
            console.log("Game Over");
            // colors the number green using CSS?
            h1p1.classList.add("winner");
            gameOver = true;
        }
        h1p1.textContent = p1Score;
    }

});

p2button.addEventListener("click", function () {
    // alert("clicked");
    if (!gameOver) {
        p2Score++;
        if (p2Score === winScore) {
            console.log("Game Over");
            // colors the number green
            h1p2.classList.add("winner");
            gameOver = true;
        }
        h1p2.textContent = p2Score;
    }
});

rsetbtn.addEventListener("click", function () {
    // alert("clicked");
    resetGame();
});

function resetGame() {

    // logic for the reset button need to change state of gameOver
    // also need to reset the players scores to zero 
    p1Score = 0;
    p2Score = 0;
    // reset the display value
    h1p1.textContent = p1Score;
    h1p2.textContent = p2Score;
    // reset the winning color by removing class "winner"
    h1p1.classList.remove("winner");
    h1p2.classList.remove("winner");
    // Now reset the game so it restarts
    gameOver = false;
}


// use change input this event listner runs on any state change
numInput.addEventListener("change", function() {

    // alert("input state change")
    // p.textContent = "changed";
    // maxMoves.textContent = "changed";
    maxMoves.textContent = numInput.value;
    winScore = Number(numInput.value);

});
