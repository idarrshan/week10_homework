// vega_line.js
var vgLine = "line.vg.json"; // Reference to the line Vega-Lite specification file
vegaEmbed("#vg_line", vgLine).then(function(result) {
  console.log("Line chart rendered successfully");
}).catch(console.error);
