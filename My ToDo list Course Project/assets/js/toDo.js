//turn of specific todos by clicking

//fix click make it an on function and use the logic run when an li inside
// a ul is clicked
$("ul").on("click", "li", function () {

    // this line replaces all the lines below by toggleing the class
    //using jQuery it and using css class it will keep track of change and
    // change color and line through
    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    $(this).toggleClass("completed");
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // // if li is gray
    // // need to use rgb to compare css.("color") returns rgb
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     //turn it black
    //     $(this).css("color", "black");
    //     $(this).css("text-decoration", "none");
    //     //else turn it gray
    // } else {
    //     // $(this).css("color", "gray");
    //     // $(this).css("text-decoration", "line-through");
    //     //  or declare an object in css less typing
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
});
//click on X to delete todo
// need to change click to on and same logic as above
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(700, function () {
        //call remove on .this no need for parent already there
        $(this).remove();
    });
    // $(this).parent().remove();
    event.stopPropagation(); //stp[s event bubbling up
});
//  
//Need to add listner to text input letting us know if a new todo is being added
//use event to see if the enter key was pressed to confirm todo entry
//when enter is pressed in input box want to take text out of box
//put it in new todo by making new li and clear the text box.
$("#todolisn").keypress(function (event) {
    if (event.which === 13) {
        // need to get value on input use .val and save to variable
        // getter
        var toDoText = $(this).val();
        //setter
        $(this).val("");
        //creat a new li put toDoText in field and add/append to ul list        
        // use append, need to first select element to append to.
        // append will take HTML and use + to add toDoText
        // $("ul").append("<li>This is a new appended LI</li>");
        $("ul").append("<li><span>X   </span>" + toDoText + "</li>");

    }

});