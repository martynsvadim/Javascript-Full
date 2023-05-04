export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(number) {
    this.age = number;
    if (this.age >= 25) {
      this.requestNewPhoto();
    }

    if (this.age < 0) {
      return false;
    }
    return this.age;
  }

  static createEmpty() {
    const user = new User('', null);
  }
}

const user1 = new User('Ann', 19);

// console.log(user1.setAge(35));
