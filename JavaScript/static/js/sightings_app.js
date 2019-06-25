
// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//populate the table
function createSightingTable(data){

    
    tbody.html("")
   
    data.forEach((element) => {
        var row = tbody.append('tr');

        //loop through each field in data
        Object.entries(element).forEach(([key,value])=> {
            var cell = row.append("td");
            cell.text(value);
                            
        });
    });
}

function handleClick() {
    d3.event.preventDefault();      
    var filteredData = tableData.filter(row => row.datetime === d3.select("#datetime").property("value"));
    createSightingTable(filteredData);    
}  

d3.select("#filter-btn").on("click",handleClick);

createSightingTable(tableData);
