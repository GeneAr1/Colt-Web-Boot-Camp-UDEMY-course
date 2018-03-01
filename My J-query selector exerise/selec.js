// alert("connect")

// select all div give purpe backgound
$("div").css("background","purple");

// select eht dives with class "highlight" and mak them 200 px wide
$(".highlight").css("width", "200px");

// select the dive with id "third" and give it a orange border
$("#third").css("border", "3px solid orange" );

// select first dive only and give pink font
// could use div:first or div:first-of-type. first-of-type is fastest because it is built
// in CSS selsector while the others are JS functions and need to run so they are a little
//slower
$("div").first().css("color","pink");