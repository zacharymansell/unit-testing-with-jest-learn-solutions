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
  })

  test('see selections should should return an array of added snacks', () => {

  })
})