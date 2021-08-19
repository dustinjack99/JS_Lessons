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
const zeroDesc = document.getElementById("zeroDesc");
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

function degConv(deg) {
  // return weatherAPI.wind.deg, need to refine to 8-point compass instead of 16 (no NNE/WSW, etc.)
  // console.log(deg);
  var wDir = "";
  if (deg < 0 || deg > 360) {
    console.log(
      "Error with degConv function - either returned value for 'deg' is outside of parameters, or we're all going to die."
    );
  }
  if (deg >= 0 && deg <= 11.25) {
    wDir = "N";
  }
  if (deg > 348.75 && deg <= 360) {
    wDir = "N";
  }
  if (deg > 33.75 && deg <= 56.25) {
    wDir = "NE";
  }
  if (deg > 78.75 && deg <= 101.25) {
    wDir = "E";
  }
  if (deg > 123.75 && deg <= 146.25) {
    wDir = "SE";
  }
  if (deg > 168.75 && deg <= 191.25) {
    wDir = "S";
  }
  if (deg > 213.75 && deg <= 236.25) {
    wDir = "SW";
  }
  if (deg > 258.75 && deg <= 281.25) {
    wDir = "W";
  }
  if (deg > 303.75 && deg <= 326.25) {
    wDir = "NW"; //<<8-point Compass directions end here
  }
  if (deg > 11.25 && deg <= 33.75) {
    wDir = "NNE";
  }
  if (deg > 56.25 && deg <= 78.75) {
    wDir = "ENE";
  }
  if (deg > 101.25 && deg <= 123.75) {
    wDir = "ESE";
  }
  if (deg > 146.25 && deg <= 168.75) {
    wDir = "SSE";
  }
  if (deg > 191.25 && deg <= 213.75) {
    wDir = "SSW";
  }
  if (deg > 236.25 && deg <= 258.75) {
    wDir = "WSW";
  }
  if (deg > 281.25 && deg <= 303.75) {
    wDir = "WNW";
  }
  if (deg > 326.25 && deg <= 348.75) {
    wDir = "NNW";
  }
  // else console.log(deg);
  // console.log(wDir);
  // console.log(
  //   "Error: This value is outside of 8-point compass; refine wDir parameters."
  // );

  return wDir;
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
    zeroSkyPic.src = sky;
    zeroSky.textContent = API(0).weather[0].description; //swapped ".weather.main" for ".weather.description" for more detail
    zeroHumid.textContent += API(0).main.humidity + "%";
    zeroWind.textContent += API(0).wind.speed + "mph";
    zeroWindDeg.textContent += degConv(API(0).wind.deg); //call degConv function

    for (let i = 1; i < weatherAPI.list.length; i++) {
      const weatherReading = document.createElement("div");
      weatherReading.id = "weatherReading" + i;
      weatherReading.className = "weatherReading";
      const wRTime = document.createElement("h3");
      wRTime.textContent = "Weather for " + timeConvert(API(i).dt);
      const wRTemp = document.createElement("p");
      wRTemp.textContent = `${tempConv(API(i).main.temp)}`;
      const icon = iconSite(API(i).weather[0].icon);
      const iconOnPage = document.createElement("img");
      iconOnPage.src = icon; //<<<figured out why icon wasn't appearing for loop results; typo on ".src" note
      const wRSky = document.createElement("p");
      wRSky.textContent = API(i).weather[0].description;
      const wRHumid = document.createElement("p");
      wRHumid.textContent = "Humidity: " + API(i).main.humidity + "%";
      const wRWind = document.createElement("p");
      wRWind.textContent =
        "Wind: " + API(i).wind.speed + "mph" + " " + degConv(API(i).wind.deg);

      if (!document.getElementById(`${dayConvert(API(i).dt)}`)) {
        const row = document.createElement("div");
        row.id = `${dayConvert(API(i).dt)}`;
        row.className = "rows";
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
