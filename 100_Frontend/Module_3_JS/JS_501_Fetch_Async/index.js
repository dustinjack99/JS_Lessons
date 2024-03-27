// PART 1

//ASYNC JS
// Requests, responses
// You send off request, wait for response
// Once we enter Async land, we can't go back.

//FETCH
// Enter address of what we're fetching, get back a response object.
// Promises -> A value that we save for later.
// .then(), async / await

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log("what happens here??", bla);

const key = "e5e28d699069f90b230ad4d66e6a33b1";
const city = "sydney";

// fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`)
//   //JSON = JavaScript Object Notation
//   .then((response) => response.json())
//   .then((data) => {
//     //All functionality happens,
//     // AFTER the promise resolves.
//     console.log(data);
//     console.log(data.city.coord.lat + data.city.coord.lon);
//   });

//APIs
// Application Program Interface

// Free info and data you can pull from other websites.
// This info exists on the backend of websites
// So far, we've been learning the front end!

`Take 15 minutes to Google and explore all the kinds of APIs
available. There's a ton!`;

//API key = e5e28d699069f90b230ad4d66e6a33b1
//Fetch address = api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

// PART 2

// Find your own free, open-source API to use!
// Take about 15 mins to explore APIs and find one you like.
// Google is your friend.

// PART 3

// Let's use the APIs you found to fetch data and display it on your website.
