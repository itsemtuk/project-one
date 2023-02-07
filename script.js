// The below code fills in the first row of the table
var category = "Fern";
var queryURL = "https://house-plants2.p.rapidapi.com/category/" + category + "&apikey=48a7f35cbbmsh1b5e31dc2bd27b6p1f4b21jsn3f4de91390bd";



// settings for API call
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6943474b94mshe185a424994f3c3p1e5b01jsn0d386b989267',
    'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
  }
};

fetch('https://house-plants2.p.rapidapi.com/all', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

var plant = document.getElementById("locard");


// Adam's attempt at API call bens edit. successfully received a response. However, am struggling to call data from within the response.


// Weather API Fetch 

const encodedParams = new URLSearchParams();
encodedParams.append("apiKey", "20fd700a8fmshaf893e7aac8fa88p12495ajs");
encodedParams.append("locationKey", "328328");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '20fd700a8fmshaf893e7aac8fa88p12495ajsn02ca0c80868d',
		'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


  // Get location key by user. 

var x = document.getElementById("locard");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

/*  W E A T H E R    A P I   */

function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "131250860830988b51dba3e6bb62323a";

  let latitude = 47.058700;
  let longitude = 15.457632;
  let url = api +
    "?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    apiKey +
    "&units=imperial";


  fetch(url)
    .then(response => response.json())
    .then(data => {
      var temp = data.main.temp;
      temp = (temp - 32) * 5 / 9;
      temp = temp.toFixed(1);
      temperature.innerHTML = temp + "° C";


      temperature.innerHTML = temp; // OUTPUT
      location.innerHTML = data.name; // OUTPUT
      description.innerHTML = data.weather[0].main; //OUTPUT
      temperature.innerHTML = temp;

      document.getElementById("weather-pic").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
    });
}


getWeather();