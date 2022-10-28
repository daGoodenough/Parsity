var Vehicle = function (x, y, speed, gas) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.gas = gas;
};

Vehicle.prototype.move = function() {
this.x = this.x + this.speed * this.randomStep();
this.y = this.y + this.speed * this.randomStep();
this.gas -= 1;
};

Vehicle.prototype.randomStep = function() {
if (Math.random() < 0.5) {
return -1;
} else {
return 1;
}
};

var Car = function (x, y, gas) {
Vehicle.call(this, x, y, 5, gas);
};

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
console.log("Beep! Beep!");
};

myCar = new Car(0,0, 26);

var FastCar = function(x, y, gas) {
  Car.call(this, x, y, gas);
}

FastCar.prototype = Object.create(Car.prototype)

FastCar.prototype.move = function() {
  this.x = this.x + this.speed * this.randomStep() * 2;
  this.y = this.y + this.speed * this.randomStep() * 2;
  this.gas -= 3;
}

let myFastCar = new FastCar(5, 6, 15);

console.log(myFastCar)

let ReallyFastCar = function (x, y, gas) {
  FastCar.call(this, x, y, gas);
}


ReallyFastCar.prototype = Object.create(FastCar.prototype)

let myRealFastCar = new ReallyFastCar(20, 20, 12)
console.log (myRealFastCar)

var Bicycle = function (x, y,) {
Vehicle.call(this, x, y, 2, 0);
};

Bicycle.prototype = Object.create(Vehicle.prototype);

Bicycle.prototype.honk = function () {
console.log('Hey! Watch out!');
};

Bicycle.prototype.move = function () {
  this.x = this.x + this.speed * this.randomStep();
  this.y = this.y + this.speed * this.randomStep();
}

let myBike = new Bicycle(0, 2)