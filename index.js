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
    let hasSnack = false;
    let index = null
    // should update inventory with bought snacks
    // update balance based on snack price
    // should notify customer when a snack is unavailable
    for (let i = 0; i < this.snacks.length; i += 1) {
      const s = this.snacks[i]
      if (s.name === snackName) {
        hasSnack = true
        this.balance += s.price;
        index = i;
        break;
      };
    }
    // should notify customer when a snack cost more than available balance
    if (hasSnack === false) return 'snack is unavailable'
    if (hasSnack) this.snacks.splice(index, 1)
  }
}

module.exports = {add, VendingMachine, Item}