export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }

  if (this.age >= 0) {
    console.log(this.age);
  }
  if (this.age < 0) {
    return false;
  }
};

const user1 = new User('Anna', 25);
user1.setAge();
