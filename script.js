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
/* Blocks right clicking on a webpage to see the source code */
/* https://stackoverflow.com/questions/737022/how-do-i-disable-right-click-on-my-web-page */
/* document.addEventListener('contextmenu', event => event.preventDefault()); */

/* Function that makes the horses running */
function startLoop() {
    setTimeout(function() {
        /* After each loop, a new number will be generated and will be directly assigned to the variable */
        possition1 += Math.floor(Math.random() * 10) + 1;
        possition2 += Math.floor(Math.random() * 10) + 1;
        possition3 += Math.floor(Math.random() * 10) + 1;
        possition4 += Math.floor(Math.random() * 10) + 1;
        possition5 += Math.floor(Math.random() * 10) + 1;

        /* Check if a horse has already 1700px or more */
        if (parseInt(document.getElementById("1").style.left) <= win ||
            parseInt(document.getElementById("2").style.left) <= win ||
            parseInt(document.getElementById("3").style.left) <= win ||
            parseInt(document.getElementById("4").style.left) <= win ||
            parseInt(document.getElementById("5").style.left) <= win) {
            /* If not, the function will call itself */
            startLoop();
        }
        /* If not, the "checkWinner" functio will be called to check who won */
        else {
            checkWinner();
        }

        document.getElementById("1").style.left = possition1 + "px";
        document.getElementById("2").style.left = possition2 + "px";
        document.getElementById("3").style.left = possition3 + "px";
        document.getElementById("4").style.left = possition4 + "px";
        document.getElementById("5").style.left = possition5 + "px";
    }, 10)
}

/* This function checks if the user has entered all informations correctly  */
function startGame() {
    /* The avoid that the player clicks more than once, so that the horses run twice as fast */
    buttonClick++;
    /* If the player only clicked once */
    if (buttonClick == 1) {
        for (var x = 1; x < 6; x++) {
            /* Check if the player has selected a horse */
            if (document.getElementById("horse" + x).checked) {
                horseNumber = x;
                checkedCounter = true;
                document.getElementById("selectHorse_error").innerHTML = "";
                console.log(horseNumber + "is true");
            }
        }

        if (checkedCounter != true) {
            /* If the player has nothing selected, this error text will be given out */
            document.getElementById("selectHorse_error").innerHTML = "Please select a horse";
            buttonClick = 0;
        }

        /* Check if the amount of money is equal to zero */
        if (document.getElementById("money").value == 0) {
            /* If yes, the error message will be given out and the function will be closed */
            document.getElementById("money_error").innerHTML = "Please enter amount of money";
            buttonClick = 0;
            return;
        }
        /* If the amount of money is equal or smaller than zero */
        else if (document.getElementById("money").value <= 0) {
            /* If yes, the error message will be given out and the function will be closed */
            document.getElementById("money_error").innerHTML = "The amount must be bigger than zero";
            buttonClick = 0;
            return;
        }
        /* If the amount of money is bigger than zero, the "startLoop" Function will be called */
        else {
            document.getElementById("money_error").innerHTML = "";
            bet = document.getElementById("money").value;
            startLoop();
        }
    }
}

/* This function determines if the player has won or not */
function checkWinner() {
    if (parseInt(document.getElementById("1").style.left) > parseInt(document.getElementById("2").style.left) &&
        parseInt(document.getElementById("3").style.left) &&
        parseInt(document.getElementById("4").style.left) &&
        parseInt(document.getElementById("5").style.left)) {

        if (horseNumber == 1) {
            playerHasWon(1, 1);
        } else {
            playerHasLostRound(1, 0);

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                playerHasStillCoinsLeft();
            }
        }
    } else if (parseInt(document.getElementById("2").style.left) > parseInt(document.getElementById("1").style.left) &&
        parseInt(document.getElementById("3").style.left) &&
        parseInt(document.getElementById("4").style.left) &&
        parseInt(document.getElementById("5").style.left)) {
        if (horseNumber == 2) {
            playerHasWon(2, 1);
        } else {
            playerHasLostRound(2, 0);

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                playerHasStillCoinsLeft();
            }
        }
    } else if (parseInt(document.getElementById("3").style.left) > parseInt(document.getElementById("1").style.left) &&
        parseInt(document.getElementById("2").style.left) &&
        parseInt(document.getElementById("4").style.left) &&
        parseInt(document.getElementById("5").style.left)) {
        if (horseNumber == 3) {
            playerHasWon(3, 1);
        } else {
            playerHasLostRound(3, 0);

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                playerHasStillCoinsLeft();
            }
        }
    } else if (parseInt(document.getElementById("4").style.left) > parseInt(document.getElementById("1").style.left) &&
        parseInt(document.getElementById("2").style.left) &&
        parseInt(document.getElementById("3").style.left) &&
        parseInt(document.getElementById("5").style.left)) {
        if (horseNumber == 4) {
            playerHasWon(4, 1);
        } else {
            playerHasLostRound(4, 0);

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                playerHasStillCoinsLeft();
            }
        }
    } else if (parseInt(document.getElementById("5").style.left) > parseInt(document.getElementById("1").style.left) &&
        parseInt(document.getElementById("2").style.left) &&
        parseInt(document.getElementById("3").style.left) &&
        parseInt(document.getElementById("4").style.left)) {
        if (horseNumber == 5) {
            playerHasWon(5, 1);
        } else {
            playerHasLostRound(5, 0);

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                playerHasStillCoinsLeft();
            }
        }
    }
}

function gameover() {
    document.getElementById("title").style.display = "none";
    document.getElementById("lines").style.display = "none";
    document.getElementById("title-selecthorse").style.display = "none";
    document.querySelector("table").style.display = "none";
    document.body.style.backgroundColor = "black";
    document.getElementById("gameover").style.display = "block";
    document.getElementById("games").innerHTML = "You were able to play " + rounds + " round";
}

function resetInput() {
    for (var x = 1; x < 6; x++) {
        document.getElementById('horse' + x).checked = false;
    }
    document.getElementById("money").value = "";
}

function playagain() {
    possition1 = 10;
    possition2 = 10;
    possition3 = 10;
    possition4 = 10;
    possition5 = 10;
    buttonClick = 0;
    bet = 0;
    horseNumber = 0;
    rounds = 1;
    for (var x = 1; x < 6; x++) {
        document.getElementById(x).style.left = 10 + "px";
    }
    document.getElementById("whoWon").innerHTML = "";

    startGame();
}

function playerHasWon(winner, wonLost) {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    coins += bet * 2;
    document.getElementById("coins").innerHTML = "<img src='images/Coin.svg' alt=''>" + " " + coins + " " + "Coins";
    document.getElementById("play").style.display = "none";
    document.getElementById("playagain").style.display = "inline-block";
    if (wonLost == 1) {
        document.getElementById("whoWon").style.color = "green";
        document.getElementById("whoWon").innerHTML = "Number " + winner + " won!";
    } else {
        document.getElementById("whoWon").style.color = "red";
        document.getElementById("whoWon").innerHTML = "Number " + winner + " won!";
    }
}

function playerHasStillCoinsLeft() {
    rounds++;
    buttonClick == 0;
    document.getElementById("play").style.display = "none";
    document.getElementById("playagain").style.display = "inline-block";
}

function playerHasLostRound(winner, wonLost) {
    coins -= bet;
    document.getElementById("coins").innerHTML = "<img src='images/Coin.svg' alt=''>" + " " + coins + " " + "Coins";
    document.getElementById("whoWon").innerHTML = "Number " + winner + " won!";
    if (wonLost == 1) {
        document.getElementById("whoWon").style.color = "green";
        document.getElementById("whoWon").innerHTML = "Number " + winner + " won!";
    } else {
        document.getElementById("whoWon").style.color = "red";
        document.getElementById("whoWon").innerHTML = "Number " + winner + " won!";
    }
}

document.getElementById("modal-amount-of-coins").innerHTML = "You currently have: " + coins + " coins.";

function convertToBuy() {
    coinsToBuy = parseInt(document.getElementById("amountOfCoinsToBuy").value);
    if (coinsToBuy <= 0) {
        document.getElementById("price").value = "";
        document.getElementById("amountOfCoinsToBuy_error").innerHTML = "The amount must be bigger than 0";
    } else {
        document.getElementById("amountOfCoinsToBuy_error").innerHTML = "";
        document.getElementById("price").value = coinsToBuy * 10 + " CHF";
    }
}

document.getElementById("fakeBuy").addEventListener("click", function() {
    window.location = "https://www.paypal.com/ch/home";
})

document.getElementById("realBuy").addEventListener("click", function() {
    coins += coinsToBuy;
    document.getElementById("coins").innerHTML = "<img src='images/Coin.svg' alt=''>" + " " + coins + " " + "Coins";
    document.getElementById("modal-amount-of-coins").innerHTML = "You currently have: " + coins + " coins.";
})