// VARIABLES

//old JS
var varString = "string";
// console.log(varString, "first assignment");

//can be reassigned, even with other data types
varString = 23;
// console.log(varString, "second assignment");

//ES6
// let / const
let letString = "string";
// console.log(letString, "first assignment");

//still be reassigned, does not hoist
letString = 23;
// console.log(letString, "second assignment");

const constString = [];
// console.log(constString, "first assignment");

//cannot reassign
constString.push(2);
// console.log(constString, "second assignment");

// ARROW FUNCTIONS

// redefine the context of keyword 'this'

//old JS
function sum(a, b) {
  return a + b;
}

//ES6
const sum = (a) => a;

//old JS Fetch
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    return data;
  })
  .catch(function (error) {
    return error;
  });

//ES6 fetch
fetch(url)
  .then((resp) => resp.json())
  .then((data) => data)
  .catch((err) => err);

//ASYNC / AWAIT

//old JS
function apiCall(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      return error;
    });
}

//ES6
const ES6apiCall = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (err) {
    return err;
  }
};

// STRING INTERPOLATION

//old JS
var username = "Dustin";
var hobby = "spoiling his cats";

var stringConcat = username + " " + hobby;
// console.log(stringConcat);

//ES6
const username = "Dustin";
const hobby = "spoiling his cats";

const tempLiteral = `${username} loves ${hobby}`;
// console.log(tempLiteral);

// OBJECT LITERAL SYNTAX

//old JS
function getCar(manufacturer, model, year) {
  return {
    manufacturer: manufacturer,
    model: model,
    year: year,
  };
}
// console.log(getCar("Toyota", "Camry", "2020"));

//ES6
// example paired with desc
const getCar = (manufacturer, model, year) => {
  return { manufacturer, model, year };
};

console.log(getCar("Mercury", "Linx", "1986"));

// console.log(getCar(carObj));
