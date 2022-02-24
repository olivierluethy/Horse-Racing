var win = 1700;
var possition1 = 10;
var possition2 = 10;
var possition3 = 10;
var possition4 = 10;
var possition5 = 10;
var buttonClick = 0;
var bet = 0;
var coins = 5;
var horseNumber = 0;
var rounds = 1;

document.getElementById("1").style.left = 10 + "px";
document.getElementById("2").style.left = 10 + "px";
document.getElementById("3").style.left = 10 + "px";
document.getElementById("4").style.left = 10 + "px";
document.getElementById("5").style.left = 10 + "px";

/* Blocks right clicking on a webpage to see the source code */
/* https://stackoverflow.com/questions/737022/how-do-i-disable-right-click-on-my-web-page */
document.addEventListener('contextmenu', event => event.preventDefault());

function startLoop() {
    setTimeout(function() {
        possition1 += Math.floor(Math.random() * 10) + 1;
        possition2 += Math.floor(Math.random() * 10) + 1;
        possition3 += Math.floor(Math.random() * 10) + 1;
        possition4 += Math.floor(Math.random() * 10) + 1;
        possition5 += Math.floor(Math.random() * 10) + 1;

        if (parseInt(document.getElementById("1").style.left) <= win ||
            parseInt(document.getElementById("2").style.left) <= win ||
            parseInt(document.getElementById("3").style.left) <= win ||
            parseInt(document.getElementById("4").style.left) <= win ||
            parseInt(document.getElementById("5").style.left) <= win) {
            startLoop();
        } else {
            checkWinner();
        }

        document.getElementById("1").style.left = possition1 + "px";
        document.getElementById("2").style.left = possition2 + "px";
        document.getElementById("3").style.left = possition3 + "px";
        document.getElementById("4").style.left = possition4 + "px";
        document.getElementById("5").style.left = possition5 + "px";

        console.log(document.getElementById("1").style.left);
        console.log(document.getElementById("2").style.left);
        console.log(document.getElementById("3").style.left);
        console.log(document.getElementById("4").style.left);
        console.log(document.getElementById("5").style.left);

        console.log(parseInt(document.getElementById("1").style.left));
        console.log(parseInt(document.getElementById("2").style.left));
        console.log(parseInt(document.getElementById("3").style.left));
        console.log(parseInt(document.getElementById("4").style.left));
        console.log(parseInt(document.getElementById("5").style.left));
    }, 10)
}

function startGame() {
    buttonClick++;
    if (buttonClick == 1) {
        if (document.getElementById('horse1').checked) {
            horseNumber = 1;
            document.getElementById("selectHorse_error").innerHTML = "";
        } else if (document.getElementById('horse2').checked) {
            document.getElementById("selectHorse_error").innerHTML = "";
            horseNumber = 2;
        } else if (document.getElementById('horse3').checked) {
            document.getElementById("selectHorse_error").innerHTML = "";
            horseNumber = 3;
        } else if (document.getElementById('horse4').checked) {
            document.getElementById("selectHorse_error").innerHTML = "";
            horseNumber = 4;
        } else if (document.getElementById('horse5').checked) {
            document.getElementById("selectHorse_error").innerHTML = "";
            horseNumber = 5;
        } else {
            document.getElementById("selectHorse_error").innerHTML = "Please select a horse";
            buttonClick = 0;
        }
        if (document.getElementById("money").value == 0) {
            document.getElementById("money_error").innerHTML = "Please enter amount of money";
            buttonClick = 0;
            return;
        } else if (document.getElementById("money").value <= 0) {
            document.getElementById("money_error").innerHTML = "The amount must be bigger than zero";
            buttonClick = 0;
            return;
        } else {
            document.getElementById("money_error").innerHTML = "";
            bet = document.getElementById("money").value;
            startLoop();
        }
    }
}

function checkWinner() {
    if (parseInt(document.getElementById("1").style.left) > parseInt(document.getElementById("2").style.left) &&
        parseInt(document.getElementById("3").style.left) &&
        parseInt(document.getElementById("4").style.left) &&
        parseInt(document.getElementById("5").style.left)) {

        if (horseNumber == 1) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            coins += bet * 2;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";
            document.getElementById("play").style.display = "none";
            document.getElementById("playagain").style.display = "inline-block";
        } else {
            coins -= bet;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                rounds++;
                buttonClick == 0;
                document.getElementById("play").style.display = "none";
                document.getElementById("playagain").style.display = "inline-block";
            }
        }
    } else if (parseInt(document.getElementById("2").style.left) > parseInt(document.getElementById("1").style.left) &&
        parseInt(document.getElementById("3").style.left) &&
        parseInt(document.getElementById("4").style.left) &&
        parseInt(document.getElementById("5").style.left)) {
        if (horseNumber == 2) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            coins += bet * 2;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";
            document.getElementById("play").style.display = "none";
            document.getElementById("playagain").style.display = "inline-block";
        } else {
            coins -= bet;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                rounds++;
                buttonClick == 0;
                document.getElementById("play").style.display = "none";
                document.getElementById("playagain").style.display = "inline-block";
            }
        }
    } else if (parseInt(document.getElementById("3").style.left) > parseInt(document.getElementById("1").style.left) &&
        parseInt(document.getElementById("2").style.left) &&
        parseInt(document.getElementById("4").style.left) &&
        parseInt(document.getElementById("5").style.left)) {
        if (horseNumber == 3) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            coins += bet * 2;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";
            document.getElementById("play").style.display = "none";
            document.getElementById("playagain").style.display = "inline-block";
        } else {
            coins -= bet;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                rounds++;
                buttonClick == 0;
                document.getElementById("play").style.display = "none";
                document.getElementById("playagain").style.display = "inline-block";
            }
        }
    } else if (parseInt(document.getElementById("4").style.left) > parseInt(document.getElementById("1").style.left) &&
        parseInt(document.getElementById("2").style.left) &&
        parseInt(document.getElementById("3").style.left) &&
        parseInt(document.getElementById("5").style.left)) {
        if (horseNumber == 4) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            coins += bet * 2;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";
            document.getElementById("play").style.display = "none";
            document.getElementById("playagain").style.display = "inline-block";
        } else {
            coins -= bet;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                rounds++;
                buttonClick == 0;
                document.getElementById("play").style.display = "none";
                document.getElementById("playagain").style.display = "inline-block";
            }
        }
    } else if (parseInt(document.getElementById("5").style.left) > parseInt(document.getElementById("1").style.left) &&
        parseInt(document.getElementById("2").style.left) &&
        parseInt(document.getElementById("3").style.left) &&
        parseInt(document.getElementById("4").style.left)) {
        if (horseNumber == 5) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            coins += bet * 2;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";
            document.getElementById("play").style.display = "none";
            document.getElementById("playagain").style.display = "inline-block";
        } else {
            coins -= bet;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                rounds++;
                buttonClick == 0;
                document.getElementById("play").style.display = "none";
                document.getElementById("playagain").style.display = "inline-block";
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
    document.getElementById('horse1').checked = false;
    document.getElementById('horse2').checked = false;
    document.getElementById('horse3').checked = false;
    document.getElementById('horse4').checked = false;
    document.getElementById('horse5').checked = false;
    document.getElementById("money").value = "";
}

function playagain() {
    win = 1700;
    possition1 = 10;
    possition2 = 10;
    possition3 = 10;
    possition4 = 10;
    possition5 = 10;
    buttonClick = 0;
    bet = 0;
    coins = 5;
    horseNumber = 0;
    rounds = 1;
    document.getElementById("1").style.left = 10 + "px";
    document.getElementById("2").style.left = 10 + "px";
    document.getElementById("3").style.left = 10 + "px";
    document.getElementById("4").style.left = 10 + "px";
    document.getElementById("5").style.left = 10 + "px";
    startGame();
}

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

document.getElementById("modal-amount-of-coins").innerHTML = "You currently have: " + coins + " coins.";

var coinsToBuy = 0;
var price = 0;

function convertToBuy() {
    var coinsToBuy = document.getElementById("amountOfCoinsToBuy").value;
    if (coinsToBuy <= 0) {
        document.getElementById("price").value = "";
        document.getElementById("amountOfCoinsToBuy_error").innerHTML = "The amount must be bigger than 0";
    } else {
        document.getElementById("amountOfCoinsToBuy_error").innerHTML = "";
        document.getElementById("price").value = coinsToBuy * 10 + " CHF";
    }
}