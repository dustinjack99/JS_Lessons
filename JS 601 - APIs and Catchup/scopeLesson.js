//SCOPE
// The way code sees other code

// A function's scope can reach "up", not "down"
// This applies no matter how nested the function or data is

//Global Scope
const saying = "hello";
const secondSaying = "hi2";
const thirdSaying = "hi3";
const bla = "bla";

function hello() {
  //Local Scope
  console.log(saying);
  // Local Scope accesses functions / data outside of its scope
  // Global Scope cannot access anything within a localized scope
  function secondHello() {
    console.log(secondSaying);

    function thirdHello() {
      console.log(thirdSaying);
    }

    thirdHello();
  }
  secondHello();
}

hello();
