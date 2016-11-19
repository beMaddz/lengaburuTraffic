var expoFastVehicle = module.exports = {};
//best vehicle export object.......

var dataWeather = require('../lib/Weather.js');
//import the weather details.....

var dataOrbit = require('../lib/Orbits.js');
//import the orbit detais......

var dataVehicle = require('../lib/Vehicles.js')
//import the vehicle details......

var weatherConditions = dataWeather.getWeather();
var orbitCollection = dataOrbit.getOrbits();
var vehicleCollection = dataVehicle.getVehicles();

function leastVehicleTime(vehicle, orbit, weather) {
  var vehicleFastest = {};
  var leastTime = Infinity;
  var fastVehicle = '';
  for(var t in vehicle) {
    var checkVehicle = vehicle[t];
    for(var w = 0; w < weather.availableTransport.length; w++) {
      if(checkVehicle.vehicleName === weather.availableTransport[w]) {

        checkVehicle.VehicleTime(orbit, weather);
        //modifying the time taking by vehicles in a particular weather..........

      }
    }
    fastVehicle = leastTime > checkVehicle.time ? checkVehicle.vehicleName : fastVehicle;
    leastTime = leastTime > checkVehicle.time ? checkVehicle.time : leastTime;
  }
  vehicleFastest.fastName = fastVehicle;
  vehicleFastest.fastTime = leastTime;
  return vehicleFastest;
}
// function for the fastest vehicle......


expoFastVehicle.perfectVehicle = function(orbitName, trafficSpeed, weather) {
  var inputOrbit = orbitCollection[orbitName];

  inputOrbit.orbitTraffic = trafficSpeed;
  //changing the orbit traffic with the input......

  var inputWeather = weatherConditions[weather];

  inputOrbit.craterCalculation(inputWeather);
  // modifying the number of craters according to weather.....

  var chosenVehicle = leastVehicleTime(vehicleCollection, inputOrbit, inputWeather);
  return chosenVehicle;
}
//exports the fastest vehicle details......
