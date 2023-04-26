// const obj = {
//   name: 'Argo',
//   age: 17,
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

export function getOwnProperty(obj) {
  let array = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      array.push(prop);
    }
  }
  return array;
}

console.log(getOwnProperty(obj));
