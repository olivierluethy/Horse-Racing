function playagain() {
    // Reset variables
    buttonClick = 0;
    bet = 0;
    rounds++;
    horsePositions = [10, 10, 10, 10, 10];
    horseElements = [];

    // Reset horse positions and clear winner message
    for (var x = 1; x < 6; x++) {
        document.getElementById(x).style.left = 10 + "px";
    }
    document.getElementById("whoWon").innerHTML = "";

    startGame();
}

function gameover() {
    document.querySelector(".formTable").style.display = "none";
    document.getElementById("lines").style.display = "none";
    document.getElementById("title-selecthorse").style.display = "none";
    document.querySelector("table").style.display = "none";
    document.body.style.backgroundColor = "black";
    document.getElementById("gameover").style.display = "block";
    if (rounds > 1) {
        document.getElementById("games").innerHTML = "You were able to play " + rounds + " rounds";
    } else {
        document.getElementById("games").innerHTML = "You were able to play " + rounds + " round";
    }
}

/* This function determines if the player has won or not */
function checkWinner() {
    const horses = [1, 2, 3, 4, 5];
    horses.sort((a, b) => parseInt(document.getElementById(b).style.left) - parseInt(document.getElementById(a).style.left));
    const winningHorse = horses[0];

    if (horseNumber == winningHorse) {
        raceInProgress = false; // Set race to be finished
        playerHasWon(winningHorse, 1);
    } else {
        playerHasLostRound(winningHorse, 0);

        if (coins <= 0) {
            gameover();
        } else {
            playerHasStillCoinsLeft();
        }
    }
}

function playerHasWon(winner, wonLost) {
    console.log("Player won");
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {
            y: 0.6
        }
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

function playerHasLostRound(winner, wonLost) {
    console.log("Player Lost");
    console.log("Money before: " + coins + " The bet: " + bet);
    if (wonLost == 0) {
        coins -= bet;
    }
    console.log("Money now: " + coins)
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