export function getOwnProperty(obj) {
  let array = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      array.push(prop);
    }
  }
  return array;
}
