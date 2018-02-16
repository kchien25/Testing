// greetings
var userName = window.prompt("Please enter your name: ");

var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += userName;


// getting numbers
var num1 = parseInt(window.prompt("Enter a number: "));
var num2 = parseInt(window.prompt("Enter another number: "));

var span1 = document.getElementById("operand1");
var span2 = document.getElementById("operand2");

span1.innerHTML = num1;
span2.innerHTML = num2;

// operations

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

// displaying

document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
document.getElementById("subtraction").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + difference;
document.getElementById("multiplication").innerHTML = "The product of " + num1 + " and " + num2 + " is " + product;
document.getElementById("division").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quotient;
document.getElementById("modulus").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + modResult;