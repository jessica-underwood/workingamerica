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
  center: [40.7128, -74.0059],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);
 
// var link ="../../gz_2010_us_040_00_500k.json";


// var link = "../../gz_2010_us_040_00_500k.json"
// Grabbing our GeoJSON data..
//d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(link).addTo(map);
// });
