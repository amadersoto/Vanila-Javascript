let arr = [1, 2, 3]
let a = arr[Symbol.iterator]()

for (let v of arr) {
  console.log(v)
}

for (let v of 'selim') {
  console.log(v)
}

let obj = {
  a: 10,
  b: 20,
  c: 30
}

let obj2 = obj[Symbol.iterator] // it's not a function. that's why there is no ()
console.log(obj2)