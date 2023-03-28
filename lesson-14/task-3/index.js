let num = 0;

export const add = (number) => {
  num = number + num;
};

export const decrease = (number) => {
  num = num - number;
};

export const reset = () => {
  num = 0;
};

export const getMemo = () => {
  console.log(num);
};

add(5);
decrease(6);
reset();
getMemo();
