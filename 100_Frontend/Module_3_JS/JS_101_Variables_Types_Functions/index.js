//link this file you idiot

// variable types

//DEBUGGING
// console.log("anything we want");

//VARIABLES
var pTag = document.getElementById("replaceThisZero");
console.log(pTag);
// const addButton = document.getElementById("add");
// const subtractButton = document.getElementById("subtract");
const insecureButton = document.getElementById("insecure");

// console.log(addButton);
// addButton.addEventListener("click", () => {
//   pTag.textContent++;
//   // ++ increment
// });

// subtractButton.addEventListener("click", () => {
//   pTag.textContent--;
//   // -- decrement
// });

function add(a, b) {
  pTag.textContent = a + b;
  // return a + b;
}
//OPERATORS
// +
// -
// *
// /
const string1 = "hello";
const string2 = "world";
insecureButton.addEventListener("click", () => add(string1, string2));
//FUNCTIONS
//declare, arguments, calling
//event listeners
// ++ / --
