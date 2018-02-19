// personalize the website
var name = window.prompt("Welcome! What's your name?");

var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;

// comment on trip length
var enterDays = document.getElementById("enterDays");

function calculateDays(){
    var daysInput = document.getElementById("days");
    var numDays = daysInput.value;
    var daysMessage = document.getElementById("daysMessage");
        if (numDays < 4) {
            daysMessage.innerHTML = "Short trips are always worth it!";
        }
        else if (numDays < 7) {
            daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
        }
        else {
            daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
        }
}

enterDays.onclick = calculateDays;