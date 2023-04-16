const timer = {
  secondsPassed: 0,
  minPassed: 0,
  startTimer() {
    return setInterval(() => {
      timer.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minPassed += 1;
        this.secondsPassed = 0;
      }
    }, 300);
  },
  getTime() {
    return `${timer.minPassed} : ${timer.secondsPassed}`;
  },
};

console.log(timer.startTimer());
console.log(timer.getTime());
