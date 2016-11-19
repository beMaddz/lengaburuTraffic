var weatherExport = module.exports = {};

function Weather(weatherName, craterNumChange, availableTransport) {
  this.weatherName = weatherName;
  this.craterNumChange = craterNumChange;
  this.availableTransport = availableTransport;
}
// constructor for the weather.....


var weatherConditions = {};   //stores the weatherConditions....

var setWeather = function(weatherName,craterNumChange, availableTransport ) {

  var weather = new Weather(weatherName, craterNumChange, availableTransport);

  weatherConditions[weather.weatherName] = weather;
}
// set all the weather conditions....


//storing weather details....
setWeather('Sunny', 0.1, ['Car', 'Bike', 'TukTuk']);
setWeather('Rainy', 0.2, ['Car', 'TukTuk']);
setWeather('Windy', 0, ['Car', 'Bike', 'TukTuk']);

weatherExport.getWeather = function() {
  return weatherConditions;
}
// exports all the weather
