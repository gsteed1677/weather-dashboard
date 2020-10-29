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


// var title =$("<h3>").addClass("card-title").text(data.name + "")






// $(".lastCity").on("click", "li", function() {
//     callApi($(this).text());
// })

// function makeRow(text) {
//     var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
//     $(".lastCity").append(li);
// }





})