var data = require('./input/readDataInput.js');
var input = data.getInput();
//importing the entered inputs....


var analysis = require('./calculation/bestVehicle.js');
//importing the calculated data.....

function bestOrbit(weather, route1, route2, trafficSpeed1, trafficSpeed2) {

  var vehicleSpeedOrbit1 = analysis.perfectVehicle(route1, trafficSpeed1, weather);
  var vehicleSpeedOrbit2 = analysis.perfectVehicle(route2, trafficSpeed2, weather);
  //executing and storing the fastest vehicle data ........

  if(vehicleSpeedOrbit1.fastTime < vehicleSpeedOrbit2.fastTime) {
    console.log("Vehicle " + vehicleSpeedOrbit1.fastName + " on " + route1);
  }
  else {
    console.log("Vehicle  " + vehicleSpeedOrbit2.fastName + " on " + route2);
  }
  //comparing between the orbit and printing the best route.......

}

bestOrbit(input[0], input[1], input[2], parseInt(input[3]), parseInt(input[4]));
//executing the function with the input.....
