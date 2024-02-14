/* When horse has this pixels, it wins */
var win = screen.width;
/* Start position of each horse */
var possition1 = 10,
    possition2 = 10,
    possition3 = 10,
    possition4 = 10,
    possition5 = 10;
var buttonClick = 0;
/* Amount of money the player wans to bet */
var bet = 0;
/* When the player winns, he gets coins. For the start you get 5 coins */
var coins = 5;
/* The horseNumer that has been selected by the player with radio buttons */
var horseNumber = 0;
/* The amount of rounds the player played */
var rounds = 1;
/* Amount of coins the player wants to buy */
var coinsToBuy = 0;
/* The price which the player has to pay for the coins */
var price = 0;
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("coins");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var raceInProgress = true; // Variable to track if the race is in progress

// When the user clicks the button, open the modal 
btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
for (var x = 1; x < 6; x++) {
    document.getElementById(x).style.left = 10 + "px";
}

var checkedCounter = false;

/* Function that makes the horses running */
var horsePositions = [10, 10, 10, 10, 10];
var horseElements = [];

function resetInput() {
    for (var x = 1; x < 6; x++) {
        document.getElementById('horse' + x).checked = false;
    }
    document.getElementById("money").value = "";
}