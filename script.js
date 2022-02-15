document.addEventListener('DOMContentLoaded', function() {
    var win = 1450;

    document.getElementById("1").style.left = 0 + "px";
    document.getElementById("2").style.left = 0 + "px";
    document.getElementById("3").style.left = 0 + "px";
    document.getElementById("4").style.left = 0 + "px";
    document.getElementById("5").style.left = 0 + "px";

    var loop = setInterval(function() {
        document.getElementById("1").style.left += 1 + "px";
        document.getElementById("2").style.left += 1 + "px";
        document.getElementById("3").style.left += 1 + "px";
        document.getElementById("4").style.left += 1 + "px";
        document.getElementById("5").style.left += 1 + "px";

    }, 1000)

    clearInterval(loop);

    while (parseInt(document.getElementById("1").style.left) < win ||
        parseInt(document.getElementById("2").style.left) < win ||
        parseInt(document.getElementById("3").style.left) < win ||
        parseInt(document.getElementById("4").style.left) < win ||
        parseInt(document.getElementById("5").style.left) < win) {

        document.getElementById("1").style.left += 1 + "px";
        document.getElementById("2").style.left += 1 + "px";
        document.getElementById("3").style.left += 1 + "px";
        document.getElementById("4").style.left += 1 + "px";
        document.getElementById("5").style.left += 1 + "px";


        // document.getElementById("1").style.left += Math.floor(Math.random() * 50) + "px";
        // document.getElementById("2").style.left += Math.floor(Math.random() * 50) + "px";
        // document.getElementById("3").style.left += Math.floor(Math.random() * 50) + "px";
        // document.getElementById("4").style.left += Math.floor(Math.random() * 50) + "px";
        // document.getElementById("5").style.left += Math.floor(Math.random() * 50) + "px";
    }


    console.log(parseInt(document.getElementById("1").style.left) < win);
    console.log(parseInt(document.getElementById("2").style.left) < win);
    console.log(parseInt(document.getElementById("3").style.left) < win);
    console.log(parseInt(document.getElementById("4").style.left) < win);
    console.log(parseInt(document.getElementById("5").style.left) < win);
    console.log(document.getElementById("2").style.left);
    console.log(document.getElementById("3").style.left);
    console.log(document.getElementById("4").style.left);
    console.log(document.getElementById("5").style.left);
})