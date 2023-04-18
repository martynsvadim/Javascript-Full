const timer = {
  secondsPassed: 0,
  minPassed: 0,
  intervalId: null,
  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minPassed}:0${this.secondsPassed}`;
    }
    return `${this.minPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.minPassed = 0;
    this.secondsPassed = 0;
  },
};
