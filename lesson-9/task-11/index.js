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
  const value = Object.entries(obj);

  const total = value.reduce((acc, item) => {
    const values = { ...item[1], id: item[0] };

    return [...acc, values];
  }, []);

  return total.sort((a, b) => a.age - b.age);
};

console.log(getCustomersList(customers));
