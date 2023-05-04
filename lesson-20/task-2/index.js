export class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} is stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(name, maxSpeed) {
    super(name, false);
    this.speed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
}

// const ship1 = new Ship('Aurora');
// ship1.stop();

// const vehicle1 = new Vehicle('Car');
// vehicle1.stop();
