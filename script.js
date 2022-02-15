// document.addEventListener('DOMContentLoaded', function() {
//     var win = 1450;

//     document.getElementById("1").style.left = 0 + "px";
//     document.getElementById("2").style.left = 0 + "px";
//     document.getElementById("3").style.left = 0 + "px";
//     document.getElementById("4").style.left = 0 + "px";
//     document.getElementById("5").style.left = 0 + "px";

//     var loop = setInterval(function() {
//         document.getElementById("1").style.left += 1 + "px";
//         document.getElementById("2").style.left += 1 + "px";
//         document.getElementById("3").style.left += 1 + "px";
//         document.getElementById("4").style.left += 1 + "px";
//         document.getElementById("5").style.left += 1 + "px";

//     }, 1000)

//     clearInterval(loop);

//     while (parseInt(document.getElementById("1").style.left) < win ||
//         parseInt(document.getElementById("2").style.left) < win ||
//         parseInt(document.getElementById("3").style.left) < win ||
//         parseInt(document.getElementById("4").style.left) < win ||
//         parseInt(document.getElementById("5").style.left) < win) {

//         document.getElementById("1").style.left += 1 + "px";
//         document.getElementById("2").style.left += 1 + "px";
//         document.getElementById("3").style.left += 1 + "px";
//         document.getElementById("4").style.left += 1 + "px";
//         document.getElementById("5").style.left += 1 + "px";


//         // document.getElementById("1").style.left += Math.floor(Math.random() * 50) + "px";
//         // document.getElementById("2").style.left += Math.floor(Math.random() * 50) + "px";
//         // document.getElementById("3").style.left += Math.floor(Math.random() * 50) + "px";
//         // document.getElementById("4").style.left += Math.floor(Math.random() * 50) + "px";
//         // document.getElementById("5").style.left += Math.floor(Math.random() * 50) + "px";
//     }


//     console.log(parseInt(document.getElementById("1").style.left) < win);
//     console.log(parseInt(document.getElementById("2").style.left) < win);
//     console.log(parseInt(document.getElementById("3").style.left) < win);
//     console.log(parseInt(document.getElementById("4").style.left) < win);
//     console.log(parseInt(document.getElementById("5").style.left) < win);
//     console.log(document.getElementById("2").style.left);
//     console.log(document.getElementById("3").style.left);
//     console.log(document.getElementById("4").style.left);
//     console.log(document.getElementById("5").style.left);
// })
var win = 1680;
var possition1 = 0;
var possition2 = 0;
var possition3 = 0;
var possition4 = 0;
var possition5 = 0;


function myLoop() {
    setTimeout(function() {
        possition1 += Math.floor(Math.random() * 10) + 1;
        possition2 += Math.floor(Math.random() * 10) + 1;
        possition3 += Math.floor(Math.random() * 10) + 1;
        possition4 += Math.floor(Math.random() * 10) + 1;
        possition5 += Math.floor(Math.random() * 10) + 1;

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

        if (parseInt(document.getElementById("1").style.left) < win ||
            parseInt(document.getElementById("2").style.left) < win ||
            parseInt(document.getElementById("3").style.left) < win ||
            parseInt(document.getElementById("4").style.left) < win ||
            parseInt(document.getElementById("5").style.left) < win) {
            myLoop();
        }
    }, 10)
}

myLoop();