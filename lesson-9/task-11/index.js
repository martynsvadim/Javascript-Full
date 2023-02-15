const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

const getCustomersList = (obj) => {
  const copyObject = { ...obj };

  const key = Object.keys(copyObject);

  const value = Object.values(copyObject);

  const indexOfElement = value.reduce((prev, item, index) => {
    value[index].id = key[index];
  }, 0);

  return value.sort((a, b) => {
    if (a.age < b.age) return -1;
  });
};

console.log(getCustomersList(customers));
