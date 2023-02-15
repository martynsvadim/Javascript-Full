'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  const obj = {};

  const a = keysList.reduce((prev, item, index) => {
    obj[keysList[index]] = valuesList[index];
  }, 0);

  return obj;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);

// function buildObject(keysList, valuesList) {
//   const obj = {};

//   for (let i = 0; i < keysList.length; i++) {
//     obj[keysList[i]] = valuesList[i];
//   }

//   return obj;
// }
