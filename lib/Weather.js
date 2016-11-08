var weatherExport = module.exports = {};

function Weather(weatherName, craterNumChange, availableTransport) {
  this.weatherName = weatherName;
  this.craterNumChange = craterNumChange;
  this.availableTransport = availableTransport;
}// constructor for the weather.....


var weatherConditions = {};   //stores the weatherConditions....

var setWeather = function(weatherName, craterNumChange, availableTransport) {

  var weather = new Weather(weatherName, craterNumChange, availableTransport);

  climate[weather.weatherName] = weather;
} // set all the weather conditions....


//storing weather details....
setWeather('Sunny', 0.1, [vehicle.Bike, vehicle.TukTuk, vehicle.Car]);
setWeather('Rainy', 0.2, [vehicle.TukTuk, vehicle.Car]);
setWeather('Windy', 0, [vehicle.Bike, vehicle.TukTuk, vehicle.Car]);

weatherExport.getWeather = function() {
  return weatherConditions;
}
// exports all the weather
