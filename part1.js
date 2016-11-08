var expo = module.exports = {};

//constructor function for orbits.

function Routes(names, distance, numCraters, destinations) {
  this.names = names;
  this.distance = distance;
  this.numCraters = numCraters;
  this.destinations = destinations;
}

//constructor function for Vehicles.

function Transports(names, speed, timePerCrater) {
  this.names = names;
  this.speed = speed;
  this.timePerCrater = timePerCrater;
}

//constructor function for weatherConditions.

function Weather(names, craterNumChange, availableTransport) {
  this.names = names;
  this.craterNumChange = craterNumChange;
  this.availableTransport = availableTransport;
}

var orbit = {};  //stores the Orbit instances.
//function to create and store objects of Orbit..
function addRoutes(names, distance, numCraters, destinations) {
  var route = new Routes(names, distance, numCraters, destinations);
  orbit[route.names] = route;
}

var vehicle = {}; //stores the Vehicle instances.
//function to create and store objects of vehicle..
function addTransports(names, speed, timePerCrater) {
  var mobiles = new Transports(names, speed, timePerCrater);
  vehicle[mobiles.names] = mobiles;
}

var climate = {};   //stores the weatherConditions instances.
//function to create and store objects of climate..
function addWeather(names, craterNumChange, availableTransport) {
  var wea = new Weather(names, craterNumChange, availableTransport);
  climate[wea.names] = wea;
}

//calling functions to add the instances properties
addRoutes('Orbit1', 18, 20);
addRoutes('Orbit2', 20, 10);
addTransports('Bike', 10, 2);
addTransports('TukTuk', 12, 1);
addTransports('Car', 20, 3);
addWeather('Sunny', 0.1, [vehicle.Bike, vehicle.TukTuk, vehicle.Car]);
addWeather('Rainy', 0.2, [vehicle.TukTuk, vehicle.Car]);
addWeather('Windy', 0, [vehicle.Bike, vehicle.TukTuk, vehicle.Car]);

//module to use the objects in another file, using export..

expo.path = function() {
  return orbit;
};
expo.transport = function() {
  return vehicle;
};
expo.weather = function() {
  return climate;
};
