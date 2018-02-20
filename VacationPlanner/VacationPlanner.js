// personalize the website
var name = window.prompt("Welcome! What's your name?");

var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;

// comment on trip length
var enterDays = document.getElementById("enterDays");

enterDays.onclick = calculateDays;

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

    // calculating hours, minutes, days
    var hours = numDays * 24;
    var minutes = hours * 60;
    var seconds = minutes * 60;
    var hoursMessage = document.getElementById("hoursMessage");
    var minutesMessage = document.getElementById("minutesMessage");
    var secondsMessage = document.getElementById("secondsMessage");
        
    hoursMessage.innerHTML = "That means you'll be traveling for " + hours + " hours.";
    minutesMessage.innerHTML = hours + " hours is " + minutes + " minutes.";
    secondsMessage.innerHTML = minutes + " minutes is " + seconds + " seconds.";   
    
    // showing the next button
    var timingNext = document.getElementById("timingNext");
    timingNext.removeAttribute("hidden");
}

// show the budget
timingNext.onclick = function showBudget(){
    document.getElementById("budgetSection").removeAttribute("hidden");
}

// making the enter button work
var enterBudget = document.getElementById("enterBudget");

enterBudget.onclick = calculateBudget;

// calculating all that budget stuff
function calculateBudget(){
    var daysInput = document.getElementById("days");
    var numDays = daysInput.value;

    var koreanExchange = 1067;
    var tripBudgetInput = document.getElementById("tripBudget");
    var tripBudget = tripBudgetInput.value;

    var convertBudget = tripBudget * koreanExchange;
    var dailyBudget = convertBudget / numDays;
    var convert10 = koreanExchange * 10;
    var convert500 = koreanExchange * 500;
    var tripExchangeMsg = document.getElementById("tripExchangeMsg");
    var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");
    var exchange10Msg = document.getElementById("exchange10Msg");
    var exchange500Msg = document.getElementById("exchange500Msg");

    tripExchangeMsg.innerHTML = "That means you'll need " + convertBudget + " KRW for your trip.";
    dailyExchangeMsg.innerHTML = "That means you can spend " + dailyBudget + " KRW per day.";
    exchange10Msg.innerHTML = "You'll need " + convert10 + " KRW for an item that would cost you 10 USD.";
    exchange500Msg.innerHTML = "You'll need " + convert500 + " KRW for an item that would cost you 500 USD.";
}

// background slideshow
//var images = ["images/southkorea.jpg", "images/southkorea2.jpg", "images/southkorea3.jpg", "images/southkorea4.jpg"];
//var currentImage = 0;

//setInterval(changeImage, 3000);

//function changeImage(){
//    currentImage++;
//    if (currentImage > images.length - 1) {
//        currentImage = 0;
//    }
//    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
//}

// adding a food slideshow to the bottom
var foodImages = ["images/koreanfood.jpg", "images/koreanfood2.jpg", "images/koreanfood3.jpg", "images/koreanfood4.jpg"];
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var foodImage = document.getElementById("foodImage");
var imageIndex = 0;

previous.onclick = prevImage;
next.onclick = nextImage;

function prevImage(){
    if (imageIndex == 0){
        imageIndex = foodImages.length - 1;
    }
    else {
        imageIndex--;
    }
    foodImage.setAttribute("src", foodImages[imageIndex]);
}

function nextImage(){
    if (imageIndex == foodImages.length - 1){
        imageIndex = 0;
    }
    else{
        imageIndex++;
    }
    foodImage.setAttribute("src", foodImages[imageIndex]);
}

// revealing the food slideshow
var yesFood = document.getElementById("yesFood");
var noFood = document.getElementById("noFood");

yesFood.onclick = revealFood;
noFood.onclick = hideFood;

function revealFood(){

}

function hideFood(){

}