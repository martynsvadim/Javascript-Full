const filterNames = (arr, text) => {
  const result = arr
    .filter((name) => name.length > 5)
    .filter((name) => name.includes(text));
  return result;
};

console.log(filterNames(['Nastya', 'Vanya', 'Oliviya', 'Alexandr'], 'ya')); // ['Nastya', 'Oliviya']
