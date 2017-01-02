// all code by @jpmmcbride find me on twitter or GitHub & message me with questions

// define variables to do arithmatic & keep count of numbers
var masterString = "";
var masterCount = 0;
var masterArith = 0;

// function for onclick events of numbers
function numberClick (number) {
  masterString += number.toString();
  document.getElementById("masterDisplay").innerHTML = masterString;
  masterCount = parseFloat(masterString);
  console.log(masterString.length);
}

// define the calculator object
var calculator = { 
  clearAll : function () {
    masterString = "";
    masterCount = 0;
    masterArith = 0;
    document.getElementById("masterDisplay").innerHTML = masterString;
  },
  
  clear : function () {
    masterString = masterArith;
    masterCount = 0;
    document.getElementById("masterDisplay").innerHTML = masterString;
  },
  
  add : function () {
    masterString += " + ";
    masterCount = 0;
    document.getElementById("masterDisplay").innerHTML = masterString;
    
    console.log(masterCount);
    console.log(masterArith);
  },
  
  sub : function () {
    masterString += " - ";
    masterCount = 0;
    document.getElementById("masterDisplay").innerHTML = masterString;
  },
  
  multiply : function () {
    masterString += " * ";
    masterCount = 0;
    document.getElementById("masterDisplay").innerHTML = masterString;
  },
  
  divide : function () {
    masterString += " / ";
    masterCount = 0;
    document.getElementById("masterDisplay").innerHTML = masterString;
  },
  
  equals : function () {
    masterString = eval(masterString).toString();
    masterArith = eval(masterString);
    masterCount = 0;
    document.getElementById("masterDisplay").innerHTML =
      eval(masterString);
    
    console.log(masterString);
    console.log(masterArith);
    console.log(masterCount);
  },
  
  error : function () {
    if (masterString.length > 25) {
      document.getElementById("masterDisplay").innerHTML = "ERROR";
    }
  }
}
  
// get functions for onclick of the calculator buttons & check for errors
document.getElementById("one").onclick = function () {
  numberClick(1);
  calculator.error();
}
document.getElementById("two").onclick = function () {
  numberClick(2);
  calculator.error();
}
document.getElementById("three").onclick = function () {
  numberClick(3);
  calculator.error();
}
document.getElementById("four").onclick = function () {
  numberClick(4);
  calculator.error();
}
document.getElementById("five").onclick = function () {
  numberClick(5);
  calculator.error();
}
document.getElementById("six").onclick = function () {
  numberClick(6);
  calculator.error();
}
document.getElementById("seven").onclick = function () {
  numberClick(7);
  calculator.error();
}
document.getElementById("eight").onclick = function () {
  numberClick(8);
  calculator.error();
}
document.getElementById("nine").onclick = function () {
  numberClick(9);
  calculator.error();
}
document.getElementById("decimal").onclick = function () {
  numberClick('.');
  calculator.error();
}
document.getElementById("zero").onclick = function () {
  numberClick(0);
  calculator.error();
}


// get functions for onclick of clear buttons
document.getElementById("clearAll").onclick = function (){
  calculator.clearAll();}
document.getElementById("clear").onclick = function (){
  calculator.clear();}

// get function for addition & check for errors
document.getElementById("add").onclick = function (){
  calculator.add();
  calculator.error();}

// get function for subtraction & check for errors
document.getElementById("sub").onclick = function (){
  calculator.sub();
  calculator.error();}

// get function for multiplication & check for errors
document.getElementById("multiply").onclick = function (){
  calculator.multiply();
  calculator.error();}

// get function for division onclick & check for errors
document.getElementById("divide").onclick = function (){
  calculator.divide();
  calculator.error();}

// get function to evaluate equation & check for errors
document.getElementById("equals").onclick = function (){
  calculator.equals();
  calculator.error();}