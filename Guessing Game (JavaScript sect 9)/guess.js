// create secret number  ( for extra practice set up a random number generator and a loop)

var secretNumber = 6;

// ask user for guess

var guess = prompt("Please enter you guess"); 

// prompt will return guess as a string could fix here 
// by making the line
//                         var guess = Number(prompt("Please enter your guess"))
//
// or you could use        var stringGuess = prompt("stuff");
//                         var guess = Number(stringGuess)
//
//  THAN JUST USE guess 

alert(guess);

// check if guess ois write
// use Number(guess) to turn "guess" into a number
//
if (Number(guess) === secretNumber) {

    alert("YEA, YOU CHOSE WISELY");
}
//otherwise you missed check if number to high
else if (Number(guess) > secretNumber) {

    alert("L O S E R, you guessed two high");
}
// check if guess is two low
// could use just else in this case if number not correct or to high only to low is left

else

// else if (Number(guess) < secretNumber) {

    alert("Major L O S E R,  you guessed to low.");
// }
