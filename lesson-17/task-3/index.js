export function deffer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'am ${this.name}!`);
  },
};

const defferedHi = deffer(user.sayHi.bind(user), 1000);
defferedHi();
