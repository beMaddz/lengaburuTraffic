function calculate(weatherCondition, orbit1, orbit2, trafficSpeed1, trafficSpeed2) {
  var orbitChosen, weatherDetails, vehicleList;
  weatherDetails = climate[weatherCondition];
  var path1 = orbits[orbit1];
  path1.actualTrafficSpeed = trafficSpeed1;
  var path2 = orbits[orbit2];
  path2.actualTrafficSpeed = trafficSpeed2;
  orbitChosen = Math.max(path1.actualTrafficSpeed, path2.actualTrafficSpeed) === path1.actualTrafficSpeed ? path1 : path2;

  function timeCalculation(weatherDetails, orbitChosen) {
    vehicleList = weatherDetails.availableTransport;
    var craters = orbitChosen.numCraters;
    if(weatherDetails.names === 'Sunny')
      craters = craters - (weatherDetails.craterNumChange * craters);
    else
      craters = craters + (weatherDetails.craterNumChange * craters);
    var timeTaken = {};
    for(var i = 0; i < vehicleList.length; i++) {
      var travelSpeed = vehicleList[i].speed >= orbitChosen.actualTrafficSpeed ? orbitChosen.actualTrafficSpeed : vehicleList[i].speed;
      var totalTime = (orbitChosen.distance / travelSpeed) + ((vehicleList[i].timePerCrater * craters) / 60);
      timeTaken[vehicleList[i].names] = totalTime;
    }
    return timeTaken;
  }

  var vehicleTime = timeCalculation(weatherDetails, orbitChosen);
  var min = Infinity;
  var vehicleChosen = '';
  for(var t in vehicleTime) {
    min = Math.min(min, vehicleTime[t]);
    if(vehicleTime[t] === min)
      vehicleChosen = t;
  }
  
  console.log('Vehicle ' + vehicleChosen + ' on ' + orbitChosen.names);
}
calculate('Sunny', 'Orbit1', 'Orbit2', 12, 10);
calculate('Windy', 'Orbit1', 'Orbit2', 14, 20);
