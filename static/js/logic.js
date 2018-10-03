
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
      link.features[i].properties.earning_m = data[j]["Median weekly earnings"]
      link.features[i].properties.workers_m = data[j]["Men Number of workers (in thousands)"]
      link.features[i].properties.earning_w = data[j]["Women Median weekly earnings"]
      link.features[i].properties.workers_w = data[j]["Total Number of Workers (in thousands)"]

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
 



// //Rating Map
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

// // Percent Map
//   // Rating Map
//   L.choropleth(link, {
//     valueProperty: "percent",
//     //fill
//     scale: ["#ffffe5", "#004529"],
//     steps: 10,
//     // q for quartile, e for equidistant, k for k-means
//     mode: "q",
//     style: {
//       // Border color
//       color: "#000000",
//       weight: .5,
//       fillOpacity: 0.85
//     }
//   }).addTo(map);
 
//Men's Earnings Map
L.choropleth(link, {
  valueProperty: "earning_m",
  //fill
  scale: ["#f7fcf0", "#084081"],
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

// //Women's Earning Map
// L.choropleth(link, {
//   valueProperty: "earning_w",
//   //fill
//   scale: ["#fff7fb", "#014636"],
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

// //Men's Workers Map
// L.choropleth(link, {
// valueProperty: "workers_m",
// //fill
// scale: ["#00441b", "#f7fcfd"],
// steps: 10,
// // q for quartile, e for equidistant, k for k-means
// mode: "q",
// style: {
//   // Border color
//   color: "#000000",
//   weight: .5,
//   fillOpacity: 0.85
// }
// }).addTo(map);

// //Women's Workers Map
// L.choropleth(link, {
//   valueProperty: "workers_w",
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