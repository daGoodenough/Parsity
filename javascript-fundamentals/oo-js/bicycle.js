import { Vehicle } from './vehicle.js'

let Bike = function(x, y) {
  Vehicle.call(this, x, y, 2, 2);
}

Bike.prototype = Object.create(Vehicle.prototype)

let myBike = new Bike(0,3)

console.log(myBike)