// alert("HELLO");

// Going to use an array to model our ToDo list

var todos = ["Finish my taxes"];
var input = prompt("What would you like to do?");



// use a loop to keep asking over again until user enters "quit"

while (input !== "quit") {


    if (input === "list") {
        //list todos
        console.log(todos);
    } else if (input === "new") {
        // get a new todo from user
        var newTodo = prompt("What is your new ToDo")
        // add to todo arraynew
        todos.push(newTodo);
        console.log(todos);
    }
    // ask again for what to do
    input = prompt("What would you like to do?");

    // Quit the app when quit is entered
};
console.log("quit entered closing the appliction");