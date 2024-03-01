// CONDITIONAL LOGIC
// booleans

var whateverYourTrueVariable = true;
var whateverYourFalseVariable = false;

var numChx = document.getElementById("nums");
var output = document.getElementById("output");

// console.log(numChx);

numChx.addEventListener("change", function () {
  //   console.log(numChx.checked);
  //   console.log(output.textContent);
  // If / Else Statement
  if (numChx.checked === true) {
    output.textContent = "the value of the checkbox is true!";
  } else {
    output.textContent = "the value of the checkbox is false!";
  }
});

// CONDITIONAL OPERATORS
// ===   (Equality Operator)    == (double equals must burn and die)
// !==   (Inequality Operator)
// >     (Greater Than Operator)
// <     (Less Than Operator)
// &&    (And Operator)
// ||    (Or Operator)

var five = 5;
var ten = 10;

//greater than
if (ten > five) {
  //   console.log("yup! ten is greater than five!");
}

if (ten < five) {
  //   console.log("nope! ten is not less than five!");
}

// ELSE - IF blocks

// 1. if block
if (five === ten) {
  //   console.log("when will this function ever fire?");
} else if (ten < five) {
  //   console.log("You did math wrong");
} else if (five !== ten) {
  //   console.log("Hooray! We did it!");
} else {
  //   console.log("I'm here for safety");
}

// && "and", || "or" Operators

var zero = false; // 0 === false
var one = true; // 1 === true

// && - checks for both conditions to be true!
if (five < ten && five > ten) {
  //   console.log("true :)");
} else {
  //   console.log("false :(");
}

// || - checks for one of the conditions to be true!
if (five < ten || five > ten) {
  //   console.log("true :)");
} else {
  //   console.log("false :(");
}

//ARRAYS
// collections of data, stored in a special structure

// access values by index number!
// []                   0               1              2               3
var firstArray = ["first value", "second value", "third value", "fourth value"];

//LOOPS
// console.log(firstArray[0]);
// console.log(firstArray[1]);
// console.log(firstArray[2]);
// console.log(firstArray[3]);

// for loop
for (var index = 0; index < firstArray.length; index++) {
  //   console.log(firstArray[index]);
}

// How do I access something random in JavaScript?

var randomNumber = Math.floor(Math.random() * firstArray.length);

// console.log(firstArray[randomNumber]);

// explain why == suuuuuuuucks

// console.log(1 === "1");

// console.log(1 == "1");

function addLikeNumbers(number1, number2) {
  if (number1 == number2) {
    console.log(number1 + number2);
  } else {
    console.error(
      "You did a bad thing. Strings and unequal numbers make me sad"
    );
  }
}

addLikeNumbers(0, []);
var bla = [1, 2, 3, 45, 35, 23, 4, 345, 345];
console.log("array one", bla);
console.log("array two", bla);
console.log({ bla });
console.log(bla);
console.log(bla);
