/**
 * test rest/spread
 */

const foo = {
  a: 1,
  b: 2,
}

const bar = [1, 2, 3]

const spread = {
  ...foo,
  c: 3,
  bar,
  baz: [...bar, 4],
}

console.log(spread) // => {a: 1, b: 2, c: 3, bar: Array(3), baz: Array(4)}

/**
 * test async/await
 */

const mockAsyncRequest = x => {
  return new Promise(resolve => {
    setTimeout(() => resolve(x), 2000)
  })
}

const fn = async () => {
  const response = await mockAsyncRequest(7)
  console.log(`async request responded with: ${response}`) // => async request responded with: 7
}

console.log('async request fired') // => async request fired
fn()

/**
 * test class properties
 */

class Car {
  engine = '2.0'
  color = 'silver'
  model = 'vw'

  constructor(engine, color, model) {
    this.engine = engine || this.engine
    this.color = color || this.color
    this.model = model || this.model
  }

  changeColor = newColor => (this.color = newColor)
}

console.log(new Car()) // => Car {engine: "2.0", color: "silver", model: "vw", changeColor: ƒ}
console.log(new Car('1.6', 'red', 'renault')) // => Car {engine: "1.6", color: "red", model: "renault", changeColor: ƒ}

/**
 * test Symbols
 */

const sym = Symbol('foo')
console.log(sym) // => Symbol(foo)

/**
 * test generators
 */

function* idMaker() {
  let index = 0
  while (index < 3) yield index++
}

const gen = idMaker()

console.log(gen.next().value) // => 0
console.log(gen.next().value) // => 1
console.log(gen.next().value) // => 2
console.log(gen.next().value) // => undefined
