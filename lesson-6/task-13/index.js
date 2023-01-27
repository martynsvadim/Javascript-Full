function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      return balances[i] < amount ? -1 : balances[i] - amount;
    }
  }
}

console.log(withdraw(['Ann', 'John', 'Alex'], [1400, 87, -6], 'Ann', 10));
