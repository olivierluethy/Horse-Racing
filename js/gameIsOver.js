/* End-of-race handling — winner display, payout, play-again, game-over. */

function checkWinner(winningLane) {
    var playerWon = (horseNumber === winningLane);
    setRaceStatus(playerWon ? "You won!" : "You lost");

    /* Freeze horses: winner dances, others go idle */
    for (var i = 0; i < LANE_COUNT; i++) {
        horseBodies[i].classList.remove("galloping", "jumping");
        if (i + 1 === winningLane) {
            horseBodies[i].classList.add("winner");
        } else {
            horseBodies[i].classList.add("idle");
        }
    }

    if (playerWon) {
        handleWin(winningLane);
    } else {
        handleLoss(winningLane);
    }

    document.getElementById("play").classList.add("hidden");
    document.getElementById("play").disabled = false;
    document.getElementById("resetInput").disabled = false;
    document.getElementById("playagain").classList.remove("hidden");
}

function handleWin(winningLane) {
    coins += bet * 2;
    updateCoinsUI();
    showWinnerBanner(winningLane, true);
    confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.6 }
    });
}

function handleLoss(winningLane) {
    coins -= bet;
    updateCoinsUI();
    showWinnerBanner(winningLane, false);

    if (coins <= 0) {
        setTimeout(gameover, 1200);
    }
}

function showWinnerBanner(winningLane, playerWon) {
    var msg = "Horse " + winningLane + " won!";
    var cls = playerWon ? "won" : "lost";
    ["whoWon", "whoWonMobile"].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.textContent = msg;
        el.classList.remove("won", "lost");
        el.classList.add(cls);
    });
}

function playagain() {
    rounds++;
    buttonClick = 0;
    raceInProgress = false;
    horsePositions = [0, 0, 0, 0, 0];

    for (var i = 0; i < LANE_COUNT; i++) {
        horseBodies[i].classList.remove("winner", "idle", "jumping");
        horseBodies[i].classList.add("galloping");
        horseWrappers[i].style.transform = "translate3d(0, -50%, 0)";
    }

    ["whoWon", "whoWonMobile"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) { el.textContent = ""; el.classList.remove("won", "lost"); }
    });

    setRaceStatus("Awaiting bet");
    document.getElementById("play").classList.remove("hidden");
    document.getElementById("playagain").classList.add("hidden");
    resetInput();
    placeHurdles();
}

function gameover() {
    var screen = document.getElementById("gameover");
    document.getElementById("games").textContent =
        "You were able to play " + rounds + (rounds === 1 ? " round" : " rounds");
    screen.classList.remove("hidden");
}
