/* Global game state. Intentionally attached to window so every module
   (objectMovement, gameIsOver, modalWindow) sees the same values. */
var coins = 5;
var bet = 0;
var horseNumber = 0;
var rounds = 1;
var raceInProgress = false;
var buttonClick = 0;

/* Modal purchase state */
var coinsToBuy = 0;
var price = 0;

/* Race config */
var HURDLES_PER_LANE = 4;
var LANE_COUNT = 5;

/* Horse positions expressed as 0..100 (percentage of track) */
var horsePositions = [0, 0, 0, 0, 0];
var horseSpeeds = [0, 0, 0, 0, 0];
var horseElements = [];
var horseWrappers = [];
var horseBodies = [];

/* Per-horse hurdle schedule: array of { pos: %, cleared: bool } */
var hurdleSchedules = [[], [], [], [], []];

/* DOM references resolved after load */
var modal, modalBtn, modalClose, track, countdownOverlay, countdownText;

document.addEventListener("DOMContentLoaded", function () {
    modal = document.getElementById("myModal");
    modalBtn = document.getElementById("coins");
    modalClose = document.querySelector("#myModal .close");
    track = document.getElementById("track");
    countdownOverlay = document.getElementById("countdown");
    countdownText = document.getElementById("countdownText");

    for (var i = 1; i <= LANE_COUNT; i++) {
        horseElements.push(document.getElementById(String(i)));
        horseWrappers.push(document.querySelector('.horse-wrapper[data-horse="' + i + '"]'));
        horseBodies.push(document.querySelector('.horse-wrapper[data-horse="' + i + '"] .horse-body'));
    }

    /* Wire horse-pick radios to keep track of selected horse for UI polish.
       Once a bet is locked in (race started), ignore any further changes so
       the player can't switch horses mid-race to chase the leader. */
    document.querySelectorAll('input[name="bet"]').forEach(function (r) {
        r.addEventListener("change", function () {
            if (buttonClick === 1) return;
            horseNumber = parseInt(this.value, 10);
        });
    });

    /* Modal open/close */
    modalBtn.addEventListener("click", function () { modal.classList.remove("hidden"); });
    modalClose.addEventListener("click", function () { modal.classList.add("hidden"); });
    window.addEventListener("click", function (e) {
        if (e.target === modal) modal.classList.add("hidden");
    });

    updateCoinsUI();
    placeHurdles();
});

function updateCoinsUI() {
    var el = document.getElementById("coinCount");
    if (el) el.textContent = coins;
    var modalAmount = document.getElementById("modal-amount-of-coins");
    if (modalAmount) modalAmount.textContent = "You currently have: " + coins + " coins.";
}

function resetInput() {
    document.querySelectorAll('input[name="bet"]').forEach(function (r) { r.checked = false; });
    document.getElementById("money").value = "";
    horseNumber = 0;
}

/* Lock/unlock the betting controls so the chosen horse and amount can't be
   changed after the race has started. */
function setBetControlsLocked(locked) {
    document.querySelectorAll('input[name="bet"]').forEach(function (r) {
        r.disabled = locked;
    });
    document.getElementById("money").disabled = locked;

    var panel = document.getElementById("betPanel");
    if (panel) panel.classList.toggle("bets-locked", locked);
}

/* Generate hurdle positions shared across lanes in count but jittered per lane
   so every lane has the same number of hurdles (fairness) with unique layouts. */
function placeHurdles() {
    var basePositions = [];
    var segment = (82 - 16) / HURDLES_PER_LANE; // spread between 16% and 82%
    for (var i = 0; i < HURDLES_PER_LANE; i++) {
        basePositions.push(16 + segment * i + segment / 2);
    }

    for (var lane = 1; lane <= LANE_COUNT; lane++) {
        var container = document.querySelector('.hurdles[data-hurdles="' + lane + '"]');
        if (!container) continue;
        container.innerHTML = "";
        hurdleSchedules[lane - 1] = [];

        basePositions.forEach(function (base) {
            var jitter = (Math.random() - 0.5) * 6; // ±3%
            var pos = Math.max(12, Math.min(84, base + jitter));
            var el = document.createElement("div");
            el.className = "hurdle";
            el.style.left = pos + "%";
            el.innerHTML = '<span class="left"></span><span class="right"></span>';
            container.appendChild(el);
            hurdleSchedules[lane - 1].push({ pos: pos, cleared: false });
        });
    }
}
