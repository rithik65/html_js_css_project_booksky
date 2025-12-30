// //selecting popup box, popup overlay, button

document.addEventListener("DOMContentLoaded", function() {
    var popupoverlay = document.querySelector(".popup-overlay");
    var popupbox = document.querySelector(".popup-box");
    var addpopupbutton = document.getElementById("add-popup-button");

    addpopupbutton.addEventListener("click", function() {
        popupoverlay.style.display = "block";
        popupbox.style.display = "block";
    });


//select cancel button

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})

//select container, add-book, book-title-input, book-author-input, book-description-input

var container= document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})
});
function deletebook(event)
{
    event.target.parentElement.remove()
}






// // Selecting popup box, popup overlay, button
// document.addEventListener("DOMContentLoaded", function() {
//     var popupoverlay = document.querySelector(".popup-overlay");
//     var popupbox = document.querySelector(".popup-box");
//     var addpopupbutton = document.getElementById("add-popup-button");

//     // When "+" is clicked → show popup
//     addpopupbutton.addEventListener("click", function() {
//         popupoverlay.style.display = "flex"; // use flex to center the popup
//         popupbox.classList.add("show-popup"); // optional animation class
//     });

//     // Select cancel button
//     var cancelpopup = document.getElementById("cancel-popup");
//     cancelpopup.addEventListener("click", function(event) {
//         event.preventDefault();
//         popupoverlay.style.display = "none";
//         popupbox.classList.remove("show-popup");
//     });

//     // Select container, add-book, book-title-input, book-author-input, book-description-input
//     var container = document.querySelector(".container");
//     var addbook = document.getElementById("add-book");
//     var booktitleinput = document.getElementById("book-title-input");
//     var bookauthorinput = document.getElementById("book-author-input");
//     var bookdescriptioninput = document.getElementById("book-description-input");

//     // When Add button inside popup is clicked
//     addbook.addEventListener("click", function(event) {
//         event.preventDefault();

//         // Create new book box
//         var div = document.createElement("div");
//         div.setAttribute("class", "book-container");
//         div.innerHTML = `
//             <h2>${booktitleinput.value}</h2>
//             <h5>${bookauthorinput.value}</h5>
//             <p>${bookdescriptioninput.value}</p>
//             <button onclick="deletebook(event)">Delete</button>
//         `;
//         container.append(div);

//         // Hide popup after adding
//         popupoverlay.style.display = "none";
//         popupbox.classList.remove("show-popup");

//         // Clear inputs
//         booktitleinput.value = "";
//         bookauthorinput.value = "";
//         bookdescriptioninput.value = "";
//     });
// });

// // Function to delete a book
// function deletebook(event) {
//     event.target.parentElement.remove();
// }
