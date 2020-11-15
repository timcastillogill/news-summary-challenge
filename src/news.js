// class News {

//   constructor() {
    
//   };


// };

$(document).ready(function() {

  function displayNews(topic) {
    let url = 'https://content.guardianapis.com/search?q=' + topic;
    let token = '&api-key=79bf1a12-c541-470f-a194-2389cc01568e';
    let request = $.get(url + token, function(data) {
      $('#headlineOne').text(data.results);
    })
    console.log(request);
  }; displayNews('politics');





})
/// Weather
// function displayWeather(city) {
//   let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city;
//   let token = '&appid=2e73c213db3e36f1e5a8e5b382f3b084';
//   let units = '&units=metric';
//   $.get(url + token + units, function(data) {
//     $('#current-temperature').text(data.main.temp);
//   })
// };
//   displayWeather('london');

//   $('#select-city').submit(function(event) {
//     event.preventDefault();
//     let city = $('#current-city').val();
//     displayWeather(city);
//   })




// /// Hint
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       const json = JSON.parse(this.responseText);
//       var array = json.response.results
//       console.log(array[0])
//       document.getElementById("news").innerHTML = array[0].webTitle;
//     }
//   };
//   xhttp.open("GET", "https://content.guardianapis.com/search?q=football&api-key=78fb758b-9cd0-48e8-96c1-fe29eb42c6d0", true);
//   xhttp.send();
// }
// loadDoc();