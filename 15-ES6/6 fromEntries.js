var obj = {
  a: 10,
  b: 20
}
console.log(Object.entries(obj)) // old style

// in ES6

let objArr = [
  ['a', 10],
  ['b', 20]
]
console.log(Object.fromEntries(objArr))