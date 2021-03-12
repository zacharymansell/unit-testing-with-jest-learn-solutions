const add = function(x, y) {
  if (x < 0 || y < 0) throw new Error("both arguments must be nonnegative integers")

  if (arguments.length < 2) throw new Error("two arguments required")

  if (typeof x !== 'number' || typeof y !== 'number') throw new Error("both arguments must be numbers")

  return x + y;
}

class Item {
  constructor(name, price, code) {
      this.name = name;
      this.price = price;
      this.code = code;
  }
};

class VendingMachine {
  constructor() {
    this.snacks = []
    this.balance = 0
  }

  seeSelections() {
    // should display all available snacks
    return this.snacks;
  }

  stock(newSnacks = []) {
    // shoud update available snacks
    newSnacks.forEach(s => this.snacks.push(s))
  }

  deposit(amount) {
    // should update balance with amount deposited
    this.balance += amount;
  }

  buy(snackName) {
    for (let i = 0; i < this.snacks.length; i += 1) {
      const {name, price} = this.snacks[i]
      if (name === snackName) {
        // should notify customer when a snack cost more than available balance
        if (this.balance < price) throw new Error('snack costs more than available balance')

        // update balance based on snack price
        this.deposit(-price);

        // should update inventory with bought snacks
        return this.snacks.splice(i, 1)
      };
    }
    // should notify customer when a snack is unavailable
    return 'snack is unavailable';
  }
}

module.exports = {add, VendingMachine, Item}