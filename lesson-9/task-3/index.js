'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */
function getKeys(obj) {
  Object.keys(obj).forEach((key) => console.log(key));
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
