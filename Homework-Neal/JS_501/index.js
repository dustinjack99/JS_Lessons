const apiKey = "e3cc86768a706d3e46b6889f44404d95";
let city = "Memphis";
const body = document.getElementById("body");
function timeConvert(UNIX_timestamp) {
  var a = new Date((UNIX_timestamp - 18000) * 1000);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours(); //has to be "getHours," "getHour" doesn't read
  var min = a.getMinutes().toFixed(0); //ditto "getMinutes"
  var time = date + " " + month + " " + year + " " + hour + ":" + min + "0";
  return time;
}

function dayConvert(UNIX_timestamp) {
  var a = new Date((UNIX_timestamp - 18000) * 1000);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes().toFixed(0);
  var time = date + " " + month + " " + year + " " + hour + ":" + min + "0";
  return date;
}

const cityName = document.getElementById("cityName");
const cityPop = document.getElementById("cityPop");
const zeroArrTime = document.getElementById("zeroArrTime");
const zeroTemp = document.getElementById("zeroTemp");
const zeroSky = document.getElementById("zeroSky");
const zeroHumid = document.getElementById("zeroHumid");
const zeroWind = document.getElementById("zeroWind");
const oWM = "https://openweathermap.org/img/w/";
function tempConv(K) {
  //converting FROM units, declare K first
  // let C = 0; //convert temps in Kelvin to Celsius
  // C = K - 273.15;
  // return C.toFixed(1) + "° C";

  let F = 0; //convert temps in Kelvin to Fahrenheit
  F = (K - 273.15) * 1.8 + 32;
  return F.toFixed(1) + "° F"; //folded the temp symbol into the function itself
}
function iconSite(icon) {
  return oWM + icon + ".png";
}

//API MAGIC HAPPENS HERE//
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
)
  .then((thingie) => thingie.json())
  .then((weatherAPI) => {
    console.log(weatherAPI);
    function API(number) {
      return weatherAPI.list[number];
    }
    cityName.textContent = weatherAPI.city.name;
    cityPop.textContent = "Population: " + weatherAPI.city.population;
    zeroArrTime.textContent = "Weather for " + timeConvert(API(0).dt);
    zeroTemp.textContent = `${tempConv(API(0).main.temp)}`;
    const zeroSkyPic = document.getElementById("zeroSkyPic");
    const sky = iconSite(API(0).weather[0].icon);
    console.log(sky);
    zeroSkyPic.src = sky;
    zeroSky.textContent = API(0).weather[0].main;
    zeroHumid.textContent += API(0).main.humidity + "%";
    zeroWind.textContent += API(0).wind.speed + "mph";

    for (let i = 1; i < weatherAPI.list.length; i++) {
      const weatherReading = document.createElement("div");
      weatherReading.id = "weatherReading" + i;
      weatherReading.className = "weatherReading";
      const wRTime = document.createElement("h3");
      wRTime.textContent = "Weather for " + timeConvert(API(i).dt);
      console.log(timeConvert(API(i).dt));
      const wRTemp = document.createElement("p");
      wRTemp.textContent = `${tempConv(API(i).main.temp)}`;
      const icon = iconSite(API(i).weather[0].icon);
      const iconOnPage = document.createElement("img");
      iconOnPage.sorc = icon;
      const wRSky = document.createElement("p");
      wRSky.textContent = API(i).weather[0].main;
      const wRHumid = document.createElement("p");
      wRHumid.textContent = "Humidity: " + API(i).main.humidity + "%";
      const wRWind = document.createElement("p");
      wRWind.textContent = "Wind: " + API(i).wind.speed + "mph";

      if (!document.getElementById(`${dayConvert(API(i).dt)}`)) {
        const row = document.createElement("div");
        row.id = `${dayConvert(API(i).dt)}`;
        row.className = "rows";
        console.log(dayConvert(API(i).dt));
        body.appendChild(row);
        row.appendChild(weatherReading);
        weatherReading.appendChild(wRTime);
        weatherReading.appendChild(wRTemp);
        weatherReading.appendChild(iconOnPage);
        weatherReading.appendChild(wRSky);
        weatherReading.appendChild(wRHumid);
        weatherReading.appendChild(wRWind);
      } else {
        let row = document.getElementById(`${dayConvert(API(i).dt)}`);
        row.appendChild(weatherReading);
        weatherReading.appendChild(wRTime);
        weatherReading.appendChild(wRTemp);
        weatherReading.appendChild(iconOnPage);
        weatherReading.appendChild(wRSky);
        weatherReading.appendChild(wRHumid);
        weatherReading.appendChild(wRWind);
      }
    }
    console.log("GENERAL KENOBI!");
  }); //don't touch//
//API MAGIC HAPPENS HERE//

//---BEN'S CODE - FOR REFERENCE ONLY! WRITE IT OUT YOURSELF YOU LAZY FUCK!---//

// // Time
// const body = document.getElementById("body");
// function timeConverter(UNIX_timestamp) {
//   var a = new Date((UNIX_timestamp - 18000) * 1000);
//   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   var year = a.getFullYear();
//   var month = months[a.getMonth()];
//   var date = a.getDate();
//   var hour = a.getHours();
//   var min = a.getMinutes().toFixed(0);
//   var time = date + " " + month + " " + year + " " + hour + ":" + min + "0";
//   return time;
// }

// -Declares the constant "body," telling it to grab the element from the document under the "body" tag.
// -Declares a function "timeConverter(UNIX_timestamp)", containing a matrix of months,
// and promises for Day/Month/Year/Hour/Minute to be drawn from the API
// -Declares a variable "time" to be made from the previous variables as well as strings of characters
// to construct a timestamp formatted "XX MONTH 2021 HH:MM" for display on the page

// function dayConvert(UNIX_timestamp) {
//   var a = new Date((UNIX_timestamp - 18000) * 1000);
//   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   var year = a.getFullYear();
//   var month = months[a.getMonth()];
//   var date = a.getDate();
//   var hour = a.getHours();
//   var min = a.getMinutes().toFixed(0);
//   var time = date + " " + month + " " + year + " " + hour + ":" + min + "0";
//   return date;
// }

// // //Working with APIs
// const cityName = document.getElementById("cityName");
// // const cityPop = document.getElementById("cityPop");
// const zeroArrTime = document.getElementById("zeroArrTime");
// const zeroTemp = document.getElementById("zeroTemp");
// const zeroSky = document.getElementById("zeroSky");
// const zeroHumid = document.getElementById("zeroHumid");
// const zeroWind = document.getElementById("zeroWind");
// const oWM = "https://openweathermap.org/img/w/";
// function tempConvert(Kel) {
//   let Fahr = 0;
//   Fahr = (Kel - 273.15) * 1.8 + 32;
//   return Fahr.toFixed(1);
// }
// function iconSite(icon) {
//   return oWM + icon + ".png";
// }

// const apiKey = "e10454d6635074828a5524853dd6b0f1";
// let city = "sioux falls";

// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
//   .then((thingie) => thingie.json())
//   .then((weatherAPI) => {
//     console.log(weatherAPI);
//     // vv Saves typing if using weatherAPI.list[number]
//     function API(number) {
//       return weatherAPI.list[number];
//     }
//     // ^^ Saves typing if using weatherAPI.list[number]
//     cityName.textContent = weatherAPI.city.name;
//     // cityPop.textContent = "Population: " + weatherAPI.city.population;

//     zeroArrTime.textContent = "Weather for " + timeConverter(API(0).dt);
//     zeroTemp.textContent = `${tempConvert(API(0).main.temp)}° F`;
//     const zeroSkyPic = document.getElementById("zeroSkyPic");
//     // const sky = oWM + weatherAPI.list[0].weather[0].icon + ".png"; <<< Original long way
//     const sky = iconSite(API(0).weather[0].icon); // <<< The way to do it with a function. Reusable
//     console.log(sky);
//     zeroSkyPic.src = sky;
//     zeroSky.textContent = API(0).weather[0].main;
//     zeroHumid.textContent += API(0).main.humidity + "%";
//     zeroWind.textContent += API(0).wind.speed + "mph";
//     // for () <<<< where the other for loop for the rows will probably go.

//     for (let i = 1; i < weatherAPI.list.length; i++) {
//       // if (timeConverter.getHours(API(i)) < 4) {
//       const weatherReading = document.createElement("div");
//       weatherReading.id = "weatherReading" + i;
//       weatherReading.className = "weatherReading";
//       const wRTime = document.createElement("h3");
//       wRTime.textContent = "Weather for " + timeConverter(API(i).dt);
//       console.log(timeConverter(API(i).dt));
//       const wRTemp = document.createElement("p");
//       wRTemp.textContent = `${tempConvert(API(i).main.temp)}° F`;
//       const icon = iconSite(API(i).weather[0].icon);
//       const iconOnPage = document.createElement("img");
//       iconOnPage.src = icon;
//       const wRSky = document.createElement("p");
//       wRSky.textContent = API(i).weather[0].main;
//       const wRHumid = document.createElement("p");
//       wRHumid.textContent = "Humidity: " + API(i).main.humidity + "%";
//       const wRWind = document.createElement("p");
//       wRWind.textContent = "Wind: " + API(i).wind.speed + "mph";
//       if (!document.getElementById(`${dayConvert(API(i).dt)}`)) {
//         const row = document.createElement("div");
//         row.id = `${dayConvert(API(i).dt)}`;
//         row.className = "rows";
//         console.log(dayConvert(API(i).dt));
//         body.appendChild(row);
//         row.appendChild(weatherReading);
//         weatherReading.appendChild(wRTime);
//         weatherReading.appendChild(wRTemp);
//         weatherReading.appendChild(iconOnPage);
//         weatherReading.appendChild(wRSky);
//         weatherReading.appendChild(wRHumid);
//         weatherReading.appendChild(wRWind);
//       } else {
//         let row = document.getElementById(`${dayConvert(API(i).dt)}`);
//         row.appendChild(weatherReading);
//         weatherReading.appendChild(wRTime);
//         weatherReading.appendChild(wRTemp);
//         weatherReading.appendChild(iconOnPage);
//         weatherReading.appendChild(wRSky);
//         weatherReading.appendChild(wRHumid);
//         weatherReading.appendChild(wRWind);
//         console.log("hello there");
//       }
//     }
//   });
