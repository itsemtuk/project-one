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


/* code to call api? 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
	}
};

fetch('https://house-plants2.p.rapidapi.com/category/Fern', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); 
  
  then find the array index and what we're looking for e.g  console.log(response[0])

  May need to provide users with a lsit of house plants??  getAll will give us the master list.   - store variable of all the plants.  many pick one or two to use as an example.   (how can the user search through thi)

  Can have it list out the available plants for the user?  Try searching for "fern or ..." 

  Use get all?
  when the user searches we need to have a way for them to change the search (swap the fern over)
  */