//document to pull in all js before all loads

$(document).ready(function() {

//created function for on click button event
$(".clickSearch").on("click", function(e) {
    console.log("button clicked!");
    e.preventDefault()
    var citySearch = $("#textInput").val();
    console.log(citySearch);
    callApi();
})

function callApi(citySearch) {
    var fetchApi = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=637169d507746a6cc76b508c540669a2&units=imperial"
    fetch(fetchApi)
    .then(function (response) {
        console.log(response)
    })
}








})