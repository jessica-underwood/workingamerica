// var link = require("../../gz_2010_us_040_00_500k.json");

// // Creating map object
// var map = L.map("map", {
//   center: [40.7128, -74.0059],
//   zoom: 3
// });

// // Adding tile layer
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(map);
// Creating map object
var map = L.map("map", {
  center: [40.09, -95.71],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);
 
//  var link ="/gz_2010_us_040_00_500k.json";


// var link = "../../gz_2010_us_040_00_500k.json"
// Grabbing our GeoJSON data..
// d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
   L.geoJson(link).addTo(map);
// });
// for (var i = 0; i < state.length; i++) {
//   L.circle(state[i].location, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: "purple",
//     // Setting our circle's radius equal to the output of our markerSize function
//     // This will make our marker's size proportionate to its population
//     radius: markerSize(state[i].population)
//   }).bindPopup("<h1>" + state[i].name + "</h1> <hr> <h3>Population: " + state[i].population + "</h3>").addTo(myMap);
// }
