var inputExport = module.exports = {};
//export the input....


var inputs = "";
for(var i = 0; i < process.argv[2] - 1; i++) {
  inputs = inputs + process.argv[i + 3];
  inputs = inputs + " ";
}
inputs = inputs + process.argv[i + 3];
var inputData = inputs.split(" ");
//reading and storing the input data for later use....


inputExport.getInput = function() {
  return inputData;
}
