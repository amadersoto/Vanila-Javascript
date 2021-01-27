//function we can deaclear in ES6 like this
let a = (a, b) => {
  return a + b
}
console.log(a(10, 20))

// or

let add = (a, b) => a + b
console.log(add(10, 20))

// if single paramiter >

let b = x => x * x
console.log(b(5))