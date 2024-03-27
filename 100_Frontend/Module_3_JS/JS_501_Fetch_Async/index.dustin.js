// PART 1
// Playing around with async JS

// ASYNC JS
// Requests + Responses

// FETCH

// takes one argument (Straing), usually a URL, but a computer address that is open to talking to your PC
const bla = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
    // What the heck is JSON??
    // JavaScript Object Notation
  })
  .then((users) => {
    // all of your functionality has to live here!
    // console.log(users);

    // for loop

    // for Each loop

    const bodyElement = document.getElementById("body");
    const listElement = document.createElement("ul");

    bodyElement.appendChild(listElement);

    // Array FOR EACH approach
    users.forEach((user, index) => {
      const listItemElement = document.createElement("li");
      //   console.log(user.name);

      // no string interpolation
      // listItemElement.textContent = user.name + " " + index;

      // string interpolation
      listItemElement.textContent = `${user.name} (index: ${index})`;

      listElement.appendChild(listItemElement);
    });

    // FOR loop approach
    // for (let i = 0; i < users.length - 1; i++) {
    //   console.log(users[i]);
    // }
  });

// Promise
// A placeholder value that exists until a request is resolved.
// console.log(bla, "ourFirstPromise");

// API - Application Programming Interface
// Explain what an API is

// A set of rules that a computer can access and retrieve information across the internet.

// PART 2
// Hunting down an API

// PART 3
// Fetching data from an API, and putting it in the UI (website)

// How to access APIs that require credentials / access tokens

const accessToken = "e5e28d699069f90b230ad4d66e6a33b1";
const cityBtn = document.getElementById("city-btn");
const cityInput = document.getElementById("city-input");

// need a variable that tracks what the input value is
let cityValue = "";

cityInput.addEventListener("change", (event) => {
  cityValue = event.target.value;
});

cityBtn.addEventListener("click", () => {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${accessToken}`
  )
    //JSON = JavaScript Object Notation
    .then((response) => response.json())
    .then((data) => {
      //All functionality happens,
      // AFTER the promise resolves.
      console.log(data);
      const date = new Date(data.city.sunrise);
      console.log(date);
    });
});
