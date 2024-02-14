/* This function checks if the user has entered all informations correctly  */
function startGame() {
    // Define variables at the top of the function
    var checkedCounter = false;
    var horseNumber = 0;
    horseElements = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("4"), document.getElementById("5")];
    // Increment buttonClick when the function is called
    buttonClick++;

    // If the player has clicked more than once, exit the function
    if (buttonClick > 1) {
        return;
    }

    // Check if the player has selected a horse
    for (var i = 1; i <= 5; i++) {
        if (document.getElementById("horse" + i).checked) {
            horseNumber = i;
            checkedCounter = true;
            console.log(horseNumber + " is selected");
            break; // Exit the loop when a horse is found
        }
    }

    // If the player has not selected a horse, display an error message
    if (!checkedCounter) {
        alert("Please select a horse");
        buttonClick = 0;
        return;
    }

    // Get the amount of money the player has bet
    bet = parseFloat(document.getElementById("money").value);

    if (coins < bet) {
        if (coins == 1) {
            alert("You don't have enough coins.\rThere is only " + coins + " coin left!");
        } else {
            alert("You don't have enough coins.\rThere are only " + coins + " coins left!");
        }
        buttonClick = 0;
        return;
    }

    // If the amount of money is not a positive number, display an error message
    if (isNaN(bet) || bet <= 0) {
        alert("Please enter a valid amount of money");
        buttonClick = 0;
        return;
    }

    // Start the race
    startLoop();
}

function startLoop() {
    function updatePositions() {
        for (let i = 0; i < horsePositions.length; i++) {
            horsePositions[i] += Math.floor(Math.random() * 10) + 1;
            horseElements[i].style.left = horsePositions[i] + "px";
            updateRotation(i);
        }
        if (horsePositions.some(position => position <= win)) {
            requestAnimationFrame(updatePositions);
        } else {
            checkWinner();
        }
    }
    requestAnimationFrame(updatePositions);
}

function updateRotation(i) {
    if (!raceInProgress) return; // Check if the race is already finished

    // Apply rotation
    horseElements[i].style.transform = 'rotate(30deg)';

    setTimeout(() => {
        // Check if the race is still in progress before applying reverse rotation
        if (raceInProgress) {
            horseElements[i].style.transform = 'rotate(-30deg)'; // Reverse rotation
        }
    }, 500); // Wait 500ms (0.5s) for each direction

    // Continue rotation until the race is finished
    if (raceInProgress) {
        requestAnimationFrame(() => {
            updateRotation(i);
        });
    }
}