//CONDITIONAL LOGIC
//booleans
var positive = true;
var negative = false;
var defaultOutput = "Output Here";
var numChx = document.getElementById("nums");
var output = document.getElementById("output");

numChx.addEventListener("change", (e) => {
  //if / else
  if (numChx.checked === true) {
    output.textContent = 12345;
  } else {
    output.textContent = defaultOutput;
  }
});

//CONDITIONAL OPERATORS
//<, >, ===, !==, &&, ||
var five = 5;
var ten = 10;

// IF block
if (ten > five) {
  // greater than
  console.log(ten + " is bigger than " + five);
}
// IF block
if (five !== ten) {
  // doesn't equal
  console.log("When will this function ever fire?");
}
//ELSE - IF block
else if (ten < five) {
  console.log("You did math wrong.");
}
//ELSE block
else {
  console.log("You REALLY did math wrong.");
}

// && "and", || "or" Operators
var zero = true;
var one = false;
// && looks for both values to be true
// || looks for one value to be true
if (five < ten || five !== ten) {
  console.log("true! :)");
} else {
  console.log("false... :(");
}

//ARRAYS
//[]                    0               1               2               4
var firstArray = ["first value", "second value", "third value", "fourth value"];
console.log(firstArray);
//LOOPS
// for loop, i
for (var i = 0; i < firstArray.length; i++) {
  console.log(firstArray[i]);
}

//Show off the Math.floor(Math.random()) function
var randomDigit = Math.floor(Math.random() * firstArray.length);

console.log(firstArray[randomDigit]);
