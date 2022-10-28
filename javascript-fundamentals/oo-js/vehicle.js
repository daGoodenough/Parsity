var Vehicle = function (x, y, speed, wheels) {
  this.x = x;
  this.y = y;
  this.wheels = wheels
  this.speed = speed;
};

Vehicle.prototype.move = function () {
  this.x = this.x + this.speed * this.randomStep();
  this.y = this.y + this.speed * this.randomStep();
};

Vehicle.prototype.randomStep = function () {
  if (Math.random() < 0.5) {
    return -1;
  } else {
    return 1;
  }
};

var Bike = function(x, y) {
  Vehicle.call(this, x, y, 2, 2)
}

Bike.prototype = Object.create(Vehicle.prototype);

Bike.prototype.honk = function () {
  console.log("Hey, get out my way!")
}

let AngryBike = function(x, y) {
  Bike.call(this, x, y);
}

AngryBike.prototype = Object.create(Bike.prototype)

AngryBike.prototype.honk = function () {
  Object.getPrototypeOf(AngryBike.prototype).honk.call(this);
  Object.getPrototypeOf(AngryBike.prototype).honk.call(this);
}

let imAngry = new AngryBike(0, 0);
console.log(imAngry)

let myBike = new Bike(-4, 3)



// Create the Car 'class', which takes an x and y like Vehicle.
// The difference, however, is that we don't give it a speed
// as we want that to be fixed for all cars.
var Car = function (x, y) {
  // To create a car, call Vehicle using Vehicle.call
  // This sets 'this' to the correct 'this' (namely, the car's this).
  // Note we pass in 5 directly into the function as we want
  // all cars to have average speed of 5 (units of something).
  Vehicle.call(this, x, y, 5, 4);
};

// We now set the Car's prototype to the Vehicle's prototype.
// Object.create creates a new object whose prototype
// is based on the given prototype.
//Car.prototype = Object.create(Vehicle.prototype);

// Here we create a new method specifically for all cars.
//Car.prototype.honk = function () {
  //console.log("Beep! Beep!");
//};

// Finally create a car...
var myCar = new Car(0, 0);

// ...which can move as it's a vehicle
// move the car at a speed of 5 (as all cars move at 5!)
//myCar.move();

// ...and honk since it's a Car...
//myCar.honk();