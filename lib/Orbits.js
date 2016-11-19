var OrbitExport = module.exports ={};

function Orbits(orbitName, orbitDistance, numberOfCraters, orbitTraffic) {
  this.orbitName = orbitName;
  this.orbitDistance = orbitDistance;
  this.numberOfCraters = numberOfCraters;
  this.orbitTraffic = orbitTraffic;
} //constructor for orbits....
Orbits.prototype.craterCalculation = function(weather) {
  if(weather.weatherName === 'Sunny') {
    this.numberOfCraters = this.numberOfCraters - (weather.craterNumChange * this.numberOfCraters);
  }
  else {
    this.numberOfCraters = this.numberOfCraters - (weather.craterNumChange * this.numberOfCraters);
  }
  return this.numberOfCraters;
}

var orbitCollection = {}; //stores all the orbits mentioned.....

var setOrbits = function(orbitName, orbitDistance, numberOfCraters, orbitTraffic) {

  var orbit = new Orbits(orbitName, orbitDistance, numberOfCraters, orbitTraffic);

  orbitCollection[orbit.orbitName] = orbit;
}  //set all the orbit details....

//storing the orbit details
setOrbits('Orbit1', 18, 20, 0);
setOrbits('Orbit2', 20, 10, 0);

OrbitExport.getOrbits = function() {
  return orbitCollection;
}
// exports all the orbits......
