// alert("connected");

// var firstLi = document.querySelector("li");

// select all li's?
var allLis = document.querySelectorAll("li");

for (let i = 0; i < allLis.length; i++) {

    allLis[i].addEventListener("mouseover", function () {

        // console.log("hey");
        this.classList.add("selected");
    });

    allLis[i].addEventListener("mouseout", function () {

        // console.log("hey");
        this.classList.remove("selected");

    });
// add a class done to the html and use gray out of strikethrough
    allLis[i].addEventListener("click", function () {

        this.classList.toggle("done");
    });

}