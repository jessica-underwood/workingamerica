
console.log(data[0].State);
// iterate over link, for each match state name, push/append object.keys 
// properties.data 

for (let i = 0; i < link.features.length; i++) {
  // console.log(link.features[i].properties.NAME);
  for (let j = 0; j < data.length; j++) {
    // console.log("data" + data[j].State);
    if (link.features[i].properties.NAME == data[j].State) {
      console.log("Bingo!");
      link.features[i].properties.rating = data[j]["Rating"]
      link.features[i].properties.percent = data[j]["Women's earnings as a percentage of men's"]
      // link.features[i].properties.rating = data[j]["Rating"]
      // link.features[i].properties.rating = data[j]["Rating"]
      // link.features[i].properties.rating = data[j]["Rating"]
      // link.features[i].properties.rating = data[j]["Rating"]

      ;
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
 



  // Rating Map
  // L.choropleth(link, {
  //   valueProperty: "rating",
  //   //fill
  //   scale: ["#00441b", "#f7fcfd"],
  //   steps: 10,
  //   // q for quartile, e for equidistant, k for k-means
  //   mode: "q",
  //   style: {
  //     // Border color
  //     color: "#000000",
  //     weight: .5,
  //     fillOpacity: 0.85
  //   }
  // }).addTo(map);

// Percent Map
  // Rating Map
  L.choropleth(link, {
    valueProperty: "percent",
    //fill
    scale: ["#ffffe5", "#004529"],
    steps: 10,
    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#000000",
      weight: .5,
      fillOpacity: 0.85
    }
  }).addTo(map);
 
