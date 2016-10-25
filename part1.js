function Routes(names, distance, numCraters) {
  this.names = names;
  this.distance = distance;
  this.numCraters = numCraters;
}

function Transports(names, speed, timePerCrater) {
  this.names = names;
  this.speed = speed;
  this.timePerCrater = timePerCrater;
}

function Weather(names, craterNumChange, availableTransport) {
  this.names = names;
  this.craterNumChange = craterNumChange;
  this.availableTransport = availableTransport;
}

var orbits = {};
function addRoutes(names, distance, numCraters) {
  var route = new Routes(names, distance, numCraters);
  orbits[route.names] = route;
}

var vehicle = {};
function addTransports(names, speed, timePerCrater) {
  var mobiles = new Transports(names, speed, timePerCrater);
  vehicle[mobiles.names] = mobiles;
}

var climate = {};
function addWeather(names, craterNumChange, availableTransport) {
  var wea = new Weather(names, craterNumChange, availableTransport);
  climate[wea.names] = wea;
}
addRoutes('Orbit1', 18, 20);
addRoutes('Orbit2', 20, 10);
addTransports('Bike', 10, 2);
addTransports('TukTuk', 12, 1);
addTransports('Car', 20, 3);
addWeather('Sunny', 0.1, [vehicle.Bike, vehicle.TukTuk, vehicle.Car]);
addWeather('Rainy', 0.2, [vehicle.TukTuk, vehicle.Car]);
addWeather('Windy', 0, [vehicle.Bike, vehicle.TukTuk, vehicle.Car]);

console.log(JSON.stringify(climate));
