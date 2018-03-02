//turn of specific todos by clicking

$("li").click(function () {

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
$("span").click(function (event) {
    $(this).parent().fadeOut(700, function () {
        //call remove on .this no need for parent already there
        $(this).remove();
    });
    // $(this).parent().remove();
    event.stopPropagation(); //stp[s event bubbling up
});