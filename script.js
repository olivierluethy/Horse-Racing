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

document.getElementById("1").style.left = 0 + "px";
document.getElementById("2").style.left = 0 + "px";
document.getElementById("3").style.left = 0 + "px";
document.getElementById("4").style.left = 0 + "px";
document.getElementById("5").style.left = 0 + "px";

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
        if (document.getElementById("money").value.length == 0) {
            alert("Please enter your bet!");
            buttonClick = 0;
            return;
        } else {
            bet = document.getElementById("money").value;
            if (document.getElementById('horse1').checked) {
                horseNumber = 1;
                startLoop();
            } else if (document.getElementById('horse2').checked) {
                horseNumber = 2;
                startLoop();
            } else if (document.getElementById('horse3').checked) {
                horseNumber = 3;
                startLoop();
            } else if (document.getElementById('horse4').checked) {
                horseNumber = 4;
                startLoop();
            } else if (document.getElementById('horse5').checked) {
                horseNumber = 5;
                startLoop();
            } else {
                alert("Please select the horse!");
                buttonClick = 0;
                return;
            }
        }
    } else {

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
        } else {
            coins -= bet;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                rounds++;
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
        } else {
            coins -= bet;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                rounds++;
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
        } else {
            coins -= bet;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                rounds++;
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
        } else {
            coins -= bet;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                rounds++;
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
        } else {
            coins -= bet;
            document.getElementById("coins").innerHTML = "<img src='images/coin.png' alt=''>" + " " + coins + " " + "Coins";

            if (coins <= 0) {
                gameover();
            } else if (coins > 0) {
                rounds++;
            }
        }
    }
}

function gameover() {
    document.getElementById("title").style.display = "none";
    document.getElementById("lines").style.display = "none";
    document.getElementById("title-selecthorse").style.display = "none";
    document.getElementById("selectHorse").style.display = "none";
    document.body.style.backgroundColor = "black";
    document.getElementById("gameover").style.display = "block";
    document.getElementById("games").innerHTML = "You were able to play " + rounds + " round";
}