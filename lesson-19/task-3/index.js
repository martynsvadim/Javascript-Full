function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (number) {
  if (number < 0) {
    return false;
  }
  this.age = number;
  if (number >= 25) {
    this.requestNewPhoto();
  }
  return number;
};

const user1 = new User('Anna', 1);
user1.setAge(30);
