// The below code fills in the first row of the table
var category = "Fern";
var queryURL = "https://house-plants2.p.rapidapi.com/category/" + category + "&apikey=48a7f35cbbmsh1b5e31dc2bd27b6p1f4b21jsn3f4de91390bd";



// settings for API call
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://house-plants2.p.rapidapi.com/all",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "48a7f35cbbmsh1b5e31dc2bd27b6p1f4b21jsn3f4de91390bd",
		"X-RapidAPI-Host": "house-plants2.p.rapidapi.com"
	}
};


// Adam's attempt at API call. successfully received a response. However, am struggling to call data from within the response.


$.ajax(settings).then(function(response) {
  console.log(response);
  // the above code successfully produces API call

  //bellow is experimenting with adding information from within the API call to a table like in the class example.
  var tableRow = $("<tr>");
  var tabTitle=$("<td>");
  tabTitle.text("response.Categories");
  var tabYear = $("<td>");
  tabYear.text("response.Disease");
  var tabActors = $("<td>");
  tabActors.text("response.Use");
  // Append the td elements to the new table row
  tableRow.append(tabTitle);
  tableRow.append(tabYear);
  tableRow.append(tabActors);
  // Append the table row to the tbody element
  $("tbody").append(tableRow);
});




// Repeat the above logic to add rows for two more movies of your choice    --  a more condensed method
var movies = ["Dune", "Frozen", "Up", "The Jungle Book", "Mulan"];
for (let i = 0; i<movies.length; i++) {
  $.ajax(settings).then(function (response) {
    console.log(response);
    // Create and save a reference to new empty table row
    var myNewRow = $("<tr>");
    // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
    var name = $('<td>').text(response.Categories);
    var year = $('<td>').text(response.Disease);
    var actors = $('<td>').text(response.Use);
    // Append the td elements to the new table row
    // Append the table row to the tbody element
    $("tbody").append(myNewRow.append(name, year, actors));
  });
}
// BONUS: Once complete, try to make your code as DRY as possible through the use of functions
