const {add, VendingMachine, Item} = require('./index')

describe('add', () => {
  test('adds two numbers correctly', () => {
    expect(add(0,7)).toBe(7)
  })

  test('returns an error if either number is negative', () => {
    // Must wrap the code in an anonymous function, or else the error will be
    // thrown unexpectedly!
    expect(()=> {
      add(-4, 6)
    }).toThrowError(/both arguments must be nonnegative integers/)
  })

  it('throws an error if only one argument is provided', () => {
    expect(() => {
      add(6)
    }).toThrow(/two arguments required/)
  })

  it('throws an error if an argument isn\'t a number', () => {
    expect(() => {
      add("Hello", 5)
    }).toThrow(/both arguments must be numbers/)
  })
})

describe('VendingMachine', () => {
  let machine = null;
  beforeEach(() => {
    machine = new VendingMachine();
  })
  test('stock should update the internal snacks property', () => {
    const item = new Item('pop', 1, 101)
    machine.stock([item])
    expect(machine.snacks[0]).toEqual(item)

    const anotherItem = new Item('coke', 3, 102)
    machine.stock([anotherItem])
    expect(machine.snacks).toEqual([item, anotherItem])
  })

  test('see selections should should return an array of added snacks', () => {
    const item = new Item('harry potter book', 1, 101)
    machine.stock([item])
    expect(machine.seeSelections()).toEqual([item])
  })

  it('should update the internal balance property when money is deposited', () => {
    machine.deposit(100);
    expect(machine.balance).toEqual(100)

    machine.deposit(1);
    expect(machine.balance).toEqual(101)
  })

  test('that buy() alerts a customer when a snack is unavailable', () => {
    expect(machine.buy('tabloid')).toEqual('snack is unavailable');
  })

  test('that buy() updates inventory with bought snacks', () => {
    const item = new Item('toy train', 300, 1)
    const item2 = new Item('toy train', 300, 2)
    machine.stock([item, item2])
    machine.buy('toy train')
    expect(machine.snacks).toEqual([item2])
  })

  test('that buy() adds the price of the snack to the VM balance', () => {
    const item = new Item('katsu sando', 3, 1)
    machine.stock([item])
    machine.buy('katsu sando')
    expect(machine.balance).toEqual(3)
  })
})