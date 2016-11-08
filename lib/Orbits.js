var OrbitExport = module.exports ={};

function Orbits(orbitName, orbitDistance, numberOfCraters, placesConnected) {
  this.orbitName = orbitName;
  this.orbitDistance = orbitDistance;
  this.numberOfCraters = numberOfCraters;
  this.placesConnected = placesConnected;
} //constructor for orbits....

var orbitCollection = {}; //stores all the orbits mentioned.....

var setOrbits = function(orbitName, orbitDistance, numberOfCraters, placesConnected) {

  var orbit = new Orbits(orbitName, orbitDistance, numberOfCraters, placesConnected);

  orbitCollection[orbit.orbitName] = orbit;
}  //set all the orbit details....

//storing the orbit details
setOrbits('Orbit1', 18, 20, []);
setOrbits('Orbit2', 20, 10, []);

OrbitExport.getOrbits = function() {
  return orbitCollection;
}
// exports all the orbits......
