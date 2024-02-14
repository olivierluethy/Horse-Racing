function playerHasStillCoinsLeft() {
    rounds++;
    buttonClick == 0;
    document.getElementById("play").style.display = "none";
    document.getElementById("playagain").style.display = "inline-block";
}

document.getElementById("modal-amount-of-coins").innerHTML = "You currently have: " + coins + " coins.";
document.getElementById("fakeBuy").disabled = true;
document.getElementById("fakeBuy").style.cursor = "no-drop";

function convertToBuy() {
    coinsToBuy = parseInt(document.getElementById("amountOfCoinsToBuy").value);
    if (coinsToBuy || coinsToBuy === 0) {
        if (coinsToBuy <= 0) {
            document.getElementById("amountOfCoinsToBuy_error").innerHTML = "The amount must be bigger than 0";
            document.getElementById("fakeBuy").disabled = true;
            document.getElementById("fakeBuy").style.cursor = "no-drop";
        } else {
            document.getElementById("amountOfCoinsToBuy_error").innerHTML = "";
            document.getElementById("price").value = coinsToBuy / 10 + " CHF";
            document.getElementById("fakeBuy").disabled = false;
            document.getElementById("fakeBuy").style.cursor = "pointer";
        }
    } else {
        document.getElementById("amountOfCoinsToBuy_error").innerHTML = "Please enter a valid amount";
        document.getElementById("fakeBuy").disabled = true;
        document.getElementById("price").value = "";
        document.getElementById("fakeBuy").style.cursor = "no-drop";
    }
}

document.getElementById("fakeBuy").addEventListener("click", function() {
    window.location = "https://www.paypal.com/ch/home";
})