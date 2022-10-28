let Person = function(age, name, height) {
  this.age = age;
  this.name = name;
  this.height = height;
}

Person.prototype.birthday = function () {
  this.age += 1;
}

let d = new Person(20, "Daim", 65);
let k = new Person(16, "Krowbar", 72);

