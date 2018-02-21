// this is for the 'Testing Mouse Clicks'
var list1 = document.getElementById("yours");
var list2 = document.getElementById("mine");

var item = list1.children[3];

list1.onmousedown = function giveIt(){
  list2.appendChild(item);
}

list2.onmousedown = function giveItBack(){
  list2.removeChild(item);
  list1.appendChild(item);
}

// This is for the 'Testing Form Validation'
var numberInput = document.getElementById("number");
var numValidation = document.getElementById("nameValidation");
var nanValidation = document.getElementById("nanValidation");

function verify(){
  if (numberInput.value >= 1 && numberInput.value <= 100){
    nameValidation.style.display = "block";
    return false;
  }
  else if (isNaN(numberInput.value)){
    nanValidation.style.display = "block";
  }
  else {
    nameValidation.style.display = "none";
    return true;
  }
}

numberInput.onchange = function(){
  if (isNaN(numberInput.value)){
    nanValidation.style.display = "block";
  }
  else if (numberInput.value >= 1 && numberInput.value <= 100){
    nameValidation.style.display = "block";
    return false;
  }
  else if (!isNaN(numberInput.value)){
    nanValidation.style.display = "none";
  }
  else {
    nameValidation.style.display = "none";
    return true;
  }
}