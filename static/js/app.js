

/*var nbworkers = filteredData.map(row => row.row[1]);

console.log(nbworkers);*/
window.onload = function () {
    document.getElementById('main').style.visibility = 'hidden';
}

document.getElementById('state-info-input').onchange = function () {

    //console.log(data);
    document.getElementById('main').style.visibility = 'visible';

    document.getElementById("summary").innerHTML = "";

    // Select the input element and get the raw HTML node
    var inputElement = document.getElementById('state-info-input');
    var filteredData = null;
    // document.getElementById('mainresult').style.visibility ='hidden';
    if (inputElement) {
        var inputIndex = inputElement.selectedIndex;
        var inputValue = inputElement.value;
        var inputText = inputElement.options[inputIndex].text;

        if (inputIndex == 0) {
            document.getElementById('main').style.visibility = 'hidden';
        }
        else 
        {

            filteredData = data.filter(info => info.State === inputText);
            console.log(filteredData);
            if (filteredData && filteredData[0] && filteredData[0]["Total Number of Workers (in thousands)"]) {
                var workersNumber = filteredData[0]["Total Number of Workers (in thousands)"];
                console.log("Total Number of Workers (in thousands): " + workersNumber);
            }
            if (filteredData && filteredData[0] && filteredData[0]["Total Median Weekly Earnings"]) {
                var totalMedian = filteredData[0]["Total Median Weekly Earnings"];
                console.log("Total Median Weekly Earnings: " + totalMedian);
            }
            if (filteredData && filteredData[0] && filteredData[0]["Women Number of Workers (in thousands)"]) {
                var womenNumber = filteredData[0]["Women Number of Workers (in thousands)"];
                console.log("Women Number of Workers (in thousands): " + womenNumber);
            }
            if (filteredData && filteredData[0] && filteredData[0]["Women Median weekly earnings"]) {
                var womenMedian = filteredData[0]["Women Median weekly earnings"];
                console.log("Women Median weekly earnings: " + womenMedian);
            }
            if (filteredData && filteredData[0] && filteredData[0]["Men Number of workers (in thousands)"]) {
                var menNumber = filteredData[0]["Men Number of workers (in thousands)"];
                console.log("Men Number of workers (in thousands) " + menNumber);
            }
            if (filteredData && filteredData[0] && filteredData[0]["Median weekly earnings"]) {
                var menMedian = filteredData[0]["Median weekly earnings"];
                console.log("Men Median weekly earnings: " + menMedian);
            }
            if (filteredData && filteredData[0] && filteredData[0]["Women's earnings as a percentage of men's"]) {
                var earningsComparison = filteredData[0]["Women's earnings as a percentage of men's"];
                console.log("Women's earnings as a percentage of men's: " + earningsComparison);
            }
            if (filteredData && filteredData[0] && filteredData[0]["Rating"]) {
                var rating = filteredData[0]["Rating"];
                console.log("Rating: " + rating);
            }
            else {
                console.log("Data is invalid");
            }

            d3.select(".summary")
                .append("li").text(`Number of workers (in thousands): ${workersNumber}`)
                .append("li").text(`TotalMedian weekly earnings : ${totalMedian}`)
                .append("li").text(`Women Number of workers (in thousands): ${womenNumber}`)
                .append("li").text(`Women Median weekly earnings: ${womenMedian}`)
                .append("li").text(`Men Number of workers (in thousands): ${menNumber}`)
                .append("li").text(`Men Median weekly earnings : ${menMedian}`)
                .append("li").text(`Women's earnings as a percentage of men's: ${earningsComparison}`)
                .append("li").text(`Rating: ${rating}`)
            
            
            filteredData20181 = Q12018.filter(info => info["Area Name"] === inputText);
            console.log(filteredData20181);
            if (filteredData20181 && filteredData20181[0] && filteredData20181[0]["Employment"]) {
                var employment = filteredData20181[0]["Employment"];
                console.log("Employment: " + employment);
            }
            if (filteredData20181 && filteredData20181[0] && filteredData20181[0]["No Of Establishments"]) {
                var nbEstablishments = filteredData20181[0]["No Of Establishments"];
                console.log(" Nb Of Establishments: " + nbEstablishments);
            }
            
  
        }
    }
};






