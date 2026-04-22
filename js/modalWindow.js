/* Coin-purchase modal behavior. */

document.addEventListener("DOMContentLoaded", function () {
    var buyBtn = document.getElementById("fakeBuy");
    buyBtn.disabled = true;

    buyBtn.addEventListener("click", function () {
        if (buyBtn.disabled) return;
        window.location = "https://www.paypal.com/ch/home";
    });
});

function convertToBuy() {
    var input = document.getElementById("amountOfCoinsToBuy");
    var errorEl = document.getElementById("amountOfCoinsToBuy_error");
    var priceEl = document.getElementById("price");
    var buyBtn = document.getElementById("fakeBuy");

    coinsToBuy = parseInt(input.value, 10);

    if (isNaN(coinsToBuy)) {
        errorEl.textContent = "Please enter a valid amount";
        priceEl.value = "";
        buyBtn.disabled = true;
        return;
    }

    if (coinsToBuy <= 0) {
        errorEl.textContent = "The amount must be greater than 0";
        priceEl.value = "";
        buyBtn.disabled = true;
        return;
    }

    errorEl.textContent = "";
    priceEl.value = (coinsToBuy / 10).toFixed(2) + " CHF";
    buyBtn.disabled = false;
}
