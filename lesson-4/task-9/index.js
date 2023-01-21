let sum = 0;
let integer = 0;
let remainder = 0;

for (let i = 1; i <= 1000; i += 1) {
  sum += i;
  integer = sum / 1234;
  remainder = sum % 1234;
}

console.log(integer > remainder);
