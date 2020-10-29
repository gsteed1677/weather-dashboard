//document to pull in all js before all loads

$(document).ready(function() {

//created function for on click button event
$(".clickSearch").on("click", function(e) {
    console.log("button clicked!");
    e.preventDefault()
    var citySearch = $("#textInput").val();
    console.log(citySearch);

    //clear input box
    $("#textInput").val("")
    
    callApi(citySearch);
});


 function callApi(citySearch) {
    var key = '637169d507746a6cc76b508c540669a2';
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        citySearch +
        '&appid=' +
        key + 
        '&units=imperial'
    )
      .then(function (response) {
        return response.json();
      }) // Convert data to json
      .then(function (data) {
        console.log(data);
      })
      .catch(function () {
        // catch any errors
      });
  }







// $("#today").empty();

// var title = $("<h3>").createClass("card-title").text(data.name);
// var card = $("<div>").addClass("card");
// var wind = $("<p>").addClass("card-text").text("Wind Speed " + data.wind.speed + "MPH");
// var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
// var temp = $("<p>").addClass("card-text").text("Temperature " + data.main.temp + "F");
// var cardBody = $("<div>").addClass("card-body");
// var img = $("<img>").attr("src", "http://openweathermap.org/img/w" + data.weather[0].icon + ".png");

// title.append(img);
// cardBody.append(title, temp, humid, wind);
// card.append(cardBody);
// $("#today").append(card);








})