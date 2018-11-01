console.log("jQuery is just a big ole object stuffed with methods")

// The vanilla JS way
let list = document.querySelector("#list-of-stuff")
console.log('list', list) // logs the element itself

let list2 = $("#list-of-stuff")
console.log('jq list', list2) // logs a jQuery object that contains the element as a property

// Sometimes you'll see a variable that holds the value of a jQuery obj with a dollar sign at the front. That is optional
let $articles = $(".article--main")


// Example of adding an event listener
$(".delete").click( () => {
  console.log("Hey, that was easy!")
});

$("#destroyer").click( function() {
  $(".song-container").slideToggle()
  $(this).toggleClass("isRed")
})

// Select second of two things with this class
$(".article--main").eq(1).addClass("isRed")

$(".article--main").hover( function() {
  $(this).toggleClass("isBlue")
})


// Dynamically add an element, then select it with jQuery
const subHeader = document.createElement("h2")
subHeader.setAttribute("id", "subheader")
subHeader.innerHTML = `<em>What a strange analogy</em>`
$("header").append(subHeader)

// Dealing with selecting dynamically added elements
$(document).on("click", "#subheader", function() { $(this).slideToggle(700)}) //animations take an optional arg of milliseconds


// Additional interesting interactions not covered in the live code
// Select by attribute
var umbrellaElement = $('h1[name="fred"]')

// Select specific children
console.log("the h1: ", $(".container").children("h1"))

// Select specific child index (useful for ul/ol)
// Example of chaining selectors
console.log("third li: ", $("#letters").children(".letter").eq(2).html())
// console.log("letters id",  $("#letters"))

// Finding parent DOM elements
console.log("Index attr: ", $(".album").parents(".song-container").attr("index"))

// Finding an element
var album = $(".container").find(".album")
console.log("album", album)

// Selecting siblings
var aSibling = $(".a").next()
var aSibling = $(".b").prev()

// like innerHTML
console.log("aSibling: ", aSibling.html())

// For fun -- hint: "^" means "starts with"
$(document).on("click", "button[id^='button-']", function () {
  $(this).parents(".container").remove()
})
