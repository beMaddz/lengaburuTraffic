var vehicleExport = module.exports = {};

function Vehicles(vehicleName, vehicleSpeed, vehicleTimePerCrater) {
  this.vehicleName = vehicleName;
  this.vehicleSpeed = vehicleSpeed;
  this.vehicleTimePerCrater = vehicleTimePerCrater;
} //constructor for the available Vehicles......


var vehicleCollection = {}; // stores all the vehicles.....

var setVehicle = function(vehicleName, vehicleSpeed, vehicleTimePerCrater) {

  var vehicle = new Vehicles(vehicleName, vehicleSpeed, vehicleTimePerCrater);

  vehicleCollection[vehicle.vehicleName] = vehicle;
} // set all the vehicle details.....


// storing the vehicle details.....
setVehicle('Bike', 10, 2);
setVehicle('TukTuk', 12, 1);
setVehicle('Car', 20, 3);


vehicleExport.getVehicles = function() {
  return vehicleCollection;
}
// exports all the vehicles....
