//turn of specific todos by clicking

$("li").click(function () {

    // if li is gray
    // need to use rgb to compare css.("color") returns rgb
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        //turn it black
        $(this).css("color", "black");
        $(this).css("text-decoration", "none");
        //else turn it gray
    } else {
        // $(this).css("color", "gray");
        // $(this).css("text-decoration", "line-through");
        //  or declare an object in css less typing
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
});