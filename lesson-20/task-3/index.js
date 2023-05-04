export class Wallet {
  _balance = 0;

  getBalance() {
    return this._balance;
  }

  deposit(sum) {
    this._balance += sum;
  }

  withdraw(number) {
    if (number > this._balance) {
      console.log('No enough funds');
    }
    this._balance = this._balance - number;
  }
}

wallet1 = new Wallet();
