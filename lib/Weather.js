var weatherExport = module.exports = {};

var vehicleType = require("./lib/Vehicles.js");
var vehicleCollection = vehicleType.getVehicles();
function Weather(weatherName, craterNumChange, availableTransport) {
  this.weatherName = weatherName;
  this.craterNumChange = craterNumChange;
  this.availableTransport = availableTransport;
}
// constructor for the weather.....


var weatherConditions = {};   //stores the weatherConditions....

var setWeather = function(weatherName, craterNumChange, availableTransport) {

  var weather = new Weather(weatherName, craterNumChange, availableTransport);

  weatherConditions[weather.weatherName] = weather;
}
// set all the weather conditions....


//storing weather details....
setWeather('Sunny', 0.1, [vehicleCollection.Bike, vehicleCollection.TukTuk, vehicleCollection.Car]);
setWeather('Rainy', 0.2, [vehicleCollection.TukTuk, vehicleCollection.Car]);
setWeather('Windy', 0, [vehicleCollection.Bike, vehicleCollection.TukTuk, vehicleCollection.Car]);

weatherExport.getWeather = function() {
  return weatherConditions;
}
// exports all the weather
