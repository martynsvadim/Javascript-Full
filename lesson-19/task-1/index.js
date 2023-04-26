export const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchour up`);
  },
  stopMachine() {
    console.log(`${this.name} lifting anchour down`);
  },
};

Object.setPrototypeOf(ship, vehicle);
ship.startMachine();
ship.move();
ship.stopMachine();
ship.stop();
