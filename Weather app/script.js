/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eee8efde7msh5d2dea03fc174fep18d485jsn64a1c1cd747b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
}

const getWeather = (city) =>{
cityname.innerHTML= city;


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
	cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
   
    humidity.innerHTML = response.humidity
  
    wind_speed.innerHTML = response.wind_speed 
   

	})
	.catch(err => console.error(err));
}

search.addEventListener('click',(e) =>{
	e.preventDefault()
	getWeather(city.value)
 
})


getWeather('Delhi')

*/

const cityname = document.getElementById('cityname');
const cloud_pct = document.getElementById('cloud_pct');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');
//const search = document.getElementsById('search');
const city = document.getElementById('city');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
}

const getWeather = (city) => {
  cityname.textContent = city;

  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.textContent= response.cloud_pct;
      temp.textContent = response.temp;
      humidity.textContent = response.humidity;
      wind_speed.textContent = response.wind_speed;
    })
    .catch(err => console.error(err));
};

search.addEventListener('click', (e) => {
	
  e.preventDefault();
  getWeather(city.value);
});

getWeather('Delhi');

