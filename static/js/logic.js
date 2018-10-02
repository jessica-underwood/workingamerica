



// // Creating map object
// var map = L.map("map", {
//   center: [40.7128, -74.0059],
//   zoom: 3
// });
// console.log(link);
console.log(data[0].State);
// iterate over link, for each match state name, push/append object.keys 
// properties.data 

for (let i = 0; i < link.features.length; i++) {
  // console.log(link.features[i].properties.NAME);
  for (let j = 0; j < data.length; j++) {
    // console.log("data" + data[j].State);
    if (link.features[i].properties.NAME == data[j].State) {
      console.log("Bingo!");
      link.features[i].properties.data = data[j];
    }
  }
}

console.log(link);

// // Adding tile layer
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(map);
// Creating map object
var map = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 3
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);
 
// var link ="../../gz_2010_us_040_00_500k.json";
var mapStyle = {
  color: "white",
  fillColor: "pink",
  fillOpacity: 0.5,
  weight: 1.5
};

// var link = "../../gz_2010_us_040_00_500k.json"
// Grabbing our GeoJSON data..
//d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(link, {
    style: mapStyle
  }).addTo(map);

  d3.json(function(data){

  })
// });
