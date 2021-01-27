// ... is a rest and spread operator
// when ... assign in a function argument then it called rest operator
// otherwise ... called spread operator

let sum = (...rest) => {  // ...rest will word as a alternative of arguments and it will show only value of array
  return rest.reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3, 4, 5, 6))

let a = [1, 2, 3, 4, 5, 6]
console.log(...a) // it will show only value of array
//
let obj = {
  a: 10,
  b: 20,
  c: 30
}

let obj2 = {
  ...obj // it will show only value of array and obj not will be overriden
}
console.log(obj2)
console.log(obj2 === obj) // false

let obj3 = obj
console.log(obj3===obj) // true