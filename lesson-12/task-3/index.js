const cleanTransactionsList = (transactions) => {
  return transactions.reduce((acc, element) => {
    const el = element.toString().trim();
    if (!isNaN(element)) {
      return [...acc, '$' + Number(element).toFixed(2)];
    }
    return acc;
  }, []);
};

// const cleanTransactionsList = (transactions) => {
//   return transactions
//     .filter((element) => !isNaN(element))
//     .map((element) => '$' + Number(element).toFixed(2));
// };

console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']));
