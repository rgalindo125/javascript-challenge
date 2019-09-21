// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select('tbody');

// ***************************************************

tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

// Use d3 to update each cell's values with ufo data.
    Object.entries(ufoReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// ********************************************************

var submit = d3.select("#filter-btn");
var empty = d3.select("tbody")
submit.on("click", function() {
    empty.html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(bydate => bydate.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");
    
    // Use d3 to update each cell's values with data.
        Object.entries(filteredReport).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    var sightings2 = filteredData.map(ufo => ufo);
    tbody.html("");
    if (inputValue) {
    sightings2.forEach(ufosighting => {
         var row2 = tbody.append("tr");
       Object.entries(ufosighting).forEach(([key, value]) => {
            var cell2 = row2.append("td");
            cell2.text(value);
        });
    });
 }
    else {
        tbody.html("");
    tableData.forEach(sighting => {
    var row = tbody.append("tr");
   Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
 });
    }
 });