function add (number1, number2) {
  return number1 + number2;
}

function subtract (number1, number2) {
  return number1 - number2;
}

function multiply (number1, number2) {
  return number1 * number2;
}

function divide (number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The sum of " + number1 + " and " + number2 + " equals: " 
  + add(number1, number2) 
  + ". " + "The subtraction of " + number1 + " and " + number2 + " equals: "
  + subtract(number1, number2)
  + ". " + "The multiplication of " + number1 + " and " + number2 + " equals: " 
  + multiply(number1, number2)
  + ". " + "The division of " + number1 + " and " + number2 + " equals: "
  + divide(number1, number2));
  

  
  
 