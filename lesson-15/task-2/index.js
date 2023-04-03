export const createCalculator = () => {
  let num = 0;

  return {
    add: (number) => (num = num + number),

    decrease: (number) => (num = num - number),

    reset: () => (num = 0),

    getMemo: () => num,
  };
};
