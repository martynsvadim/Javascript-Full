const cleanTransactionsList = (transactions) => {
  return transactions
    .map((element) => (element === 'string' ? element.trim() : element))
    .map((element) => Number(element))
    .filter((element) => !isNaN(element))
    .map((element) => '$' + element.toFixed(2));
};

console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']));
