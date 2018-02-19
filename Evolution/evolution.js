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