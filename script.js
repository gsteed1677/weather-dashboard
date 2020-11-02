//document to pull in all js before all loads

$(document).ready(function() {
var key = '637169d507746a6cc76b508c540669a2';
var forecastDiv = $("#weatherForecast");

if (localStorage.getItem("citySearch")) {
    citiesArray = JSON.parse(localStorage.getItem("citySearch"));
    writeSearchHistory(citiesArray);
} else {
    citiesArray = [];
};


//created function for on click button event
$(".clickSearch").on("click", function(e) {
    console.log("button clicked!");
    e.preventDefault()
    var citySearch = $("#textInput").val();
    console.log(citySearch);
    //clear input box
    $("#textInput").val("")
    
    callApi(citySearch);
    fiveDayForecast(citySearch);
})


// //Local storage 


//call api and fetch data to be used
function callApi(citySearch) {
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

        //clear container for new search
        $("#today").empty();

        //var for html creation and attributes
        var title = $("<h3>").addClass("card-title").text(data.name);
        var card = $("<div>").addClass("card");
        var wind = $("<p>").addClass("card-text").text("Wind Speed " + data.wind.speed + " MPH");
        var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
        var temp = $("<p>").addClass("card-text").text("Temperature " + data.main.temp + " F");
        var cardBody = $("<div>").addClass("card-body");
        var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

        title.append(img);
        cardBody.append(title, temp, humid, wind);
        card.append(cardBody);
        $("#today").append(card);

        //You could call a function that adds your search term to the array of search history
      })
      .catch(function () {
        // catch any errors
      });

    }


//new function for five day forecast - using AJAX from last weeks class
function fiveDayForecast(citySearch) {
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&units=imperial&APPID=${key}`;

    $.get(queryURL).then(function(response){
        let forecastInfo = response.list;
        forecastDiv.empty();
        $.each(forecastInfo, function(i) {
            if (!forecastInfo[i].dt_txt.includes("12:00:00")) {
                return;
            }
            let forecastDate = new Date(forecastInfo[i].dt*1000);
            let weatherIcon = `https://openweathermap.org/img/wn/${forecastInfo[i].weather[0].icon}.png`;

            forecastDiv.append(`
            <div class="col-md">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <h4>${forecastDate.getMonth()+1}/${forecastDate.getDate()}/${forecastDate.getFullYear()}</h4>
                        <img src=${weatherIcon} alt="Icon">
                        <p>Temp: ${forecastInfo[i].main.temp} F</p>
                        <p>Humidity: ${forecastInfo[i].main.humidity}%</p>
                    </div>
                </div>
            </div>
            `)
        })
    })
};



  // local storage and dom function
  // 1. need add search history
  // 2. crea


  })