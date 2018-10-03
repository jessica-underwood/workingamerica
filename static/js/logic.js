
console.log(data[0].State);
// iterate over link, for each match state name, push/append object.keys 
// properties.data 

for (let i = 0; i < link.features.length; i++) {
  // console.log(link.features[i].properties.NAME);
  for (let j = 0; j < data.length; j++) {
    // console.log("data" + data[j].State);
    if (link.features[i].properties.NAME == data[j].State) {
      console.log("Bingo!");
      link.features[i].properties.rating = data[j]["Rating"];
    }
  }
}

console.log(link);

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


  // Creating a GeoJSON layer with the retrieved data
  L.choropleth(link, {
    // Define what  property in the features to use
    valueProperty: "rating",

    // Set color scale
    scale: ["#ffffb2", "#b10026"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    }
  }).addTo(map);

 
