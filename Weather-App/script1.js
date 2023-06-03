const weatherApi = {
  key: "bd2e601ff0408d9d4765c57b597371c6",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?",
};

const searchInputBox = document.getElementById("input-box");

// event listener function on keypress
searchInputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);

    const video = document.getElementById("myVideo");
  video.style.visibility = "hidden";

    document.querySelector(".weather-body").style.display = "block";
    
  }

});

// get weather report
function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather data not available");
      }
      return response.json();
    })
    .then(showWeatherReport)
    .catch((error) => {
      console.log(error.message);
      // Display an error message to the user if weather data is not available
    });
}

// show weather report
function showWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temperature = document.getElementById("temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)} &deg;C`;

  let weatherType = document.getElementById("weather");
  weatherType.innerHTML = `${weather.weather[0].main}`;

  let humidity = document.getElementById("humidity");
  humidity.innerHTML = `Humidity : ${Math.round(weather.main.humidity)} %`;

  let wind = document.getElementById("wind");
  wind.innerHTML = `Wind : ${Math.round(weather.wind.speed)} km/h`;

  let date = document.getElementById("date");
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);

  //condition for images to display according to weather type

  const video = document.getElementById("myVideo");
  video.style.visibility = "hidden";

 

  if (weatherType.textContent === "Clear") {
    document.body.style.backgroundImage = 'url("./assests/clear-sky.jpg")';
  } else if (weatherType.textContent === "Clouds") {
    document.body.style.backgroundImage = 'url("./assests/clouds.jpg")';
  } else if (weatherType.textContent === "Rain") {
    document.body.style.backgroundImage = 'url("./assests/rain.jpg")';
  } else if (weatherType.textContent === "Drizzle") {
    document.body.style.backgroundImage = 'url("./assests/drizzle.jpg")';
  } else if (weatherType.textContent === "Snow") {
    document.body.style.backgroundImage = 'url("./assests/snow.jpg")';
  } else if (weatherType.textContent === "Thunderstorm") {
    document.body.style.backgroundImage = 'url("./assests/thunder.jpg")';
  } else if (weatherType.textContent === "Mist") {
    document.body.style.backgroundImage = 'url("./assests/mist.jpg")';
  } else if (weatherType.textContent === "Haze") {
    document.body.style.backgroundImage = 'url("./assests/haze.jpg")';
  } else if (weatherType.textContent === "Fog") {
    document.body.style.backgroundImage = 'url("./assests/fog.jpg")';
  } else {
    document.body.style.backgroundImage = 'url("./assests/just.jpg")';
  }
}

// date management

function dateManage(dateArg) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "Febuary",
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

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;
}

