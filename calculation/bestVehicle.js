var expoFastVehicle = module.exports = {};

var dataWeather = require('../lib/Weather.js');
var dataOrbit = require('../lib/Orbits.js');

var weatherConditions = dataWeather.getWeather();
var orbitCollection = dataOrbit.getOrbits();

function craterCalculation(craters, weather, changeInCrater) {
  var newCraterNum = 0;
  if(weather === 'Sunny') {
    newCraterNum = craters - (changeInCrater * craters);
  }
  else {
    newCraterNum = craters + (changeInCrater * craters);
  }
  return newCraterNum;
}

function vehicleTime(vehicle, orbit, crater) {
  var vehicleFastest = {};
  var leastTime = Infinity;
  var fastVehicle = '';
  for (var v = 0; v < vehicle.length; v++) {
    var travelSpeed = vehicle[v].vehicleSpeed >= orbit.orbitTraffic ? orbit.orbitTraffic : vehicle[v].vehicleSpeed;
    var time = (orbit.orbitDistance / travelSpeed) + ((vehicle[v].vehicleTimePerCrater * crater) / 60);
    fastVehicle = leastTime > time ? vehicle[v].vehicleName : fastVehicle;
    leastTime = leastTime > time ? time : leastTime;
  }
  vehicleFastest.fastName = fastVehicle;
  vehicleFastest.fastTime = leastTime;
  return vehicleFastest;
}

expoFastVehicle.perfectVehicle = function(orbitName, trafficSpeed, weather) {
  var inputOrbit = orbitCollection[orbitName];
  inputOrbit.orbitTraffic = trafficSpeed;
  var inputWeather = weatherConditions[weather];
  var vehicle = inputWeather.availableTransport;
  var totalCraters = craterCalculation(inputOrbit.numberOfCraters, inputWeather.weatherName, inputWeather.craterNumChange);
  var chosenVehicle = vehicleTime(vehicle, inputOrbit, totalCraters);
  return chosenVehicle;
}
