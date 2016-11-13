var data = require('./input/dataInput.js');
var input = data.getInput();

var analysis = require('./calculation/bestVehicle.js');

function bestOrbit(weather, route1, route2, trafficSpeed1, trafficSpeed2) {
  var vehicleSpeedOrbit1 = analysis.perfectVehicle(route1, trafficSpeed1, weather);
  var vehicleSpeedOrbit2 = analysis.perfectVehicle(route2, trafficSpeed2, weather);
  if(vehicleSpeedOrbit1.fastTime < vehicleSpeedOrbit2.fastTime) {
    console.log(route1 + " " + vehicleSpeedOrbit1.fastName);
  }
  else {
    console.log(route2 + " " + vehicleSpeedOrbit2.fastName);
  }
}

bestOrbit(input[0], input[1], input[2], parseInt(input[3]), parseInt(input[4]));
