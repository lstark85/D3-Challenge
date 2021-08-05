// Create dimensions of chart

// Designate the width of the graph
var width = parseInt(d3.select("#scatter").style("width"));

// Designate the height of the graph
var height = width - width / 3.9;

// Margin spacing for graph
var margin = 20;

// space for placing words
var labelArea = 110;

// padding for the text at the bottom and left axes
var tPadBot = 40;
var tPadLeft = 40;

// create the scatter plot
var svg = d3.select("scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg")
    .attr("class", "chart"); 

// create round state codes and size them
