let a = [1, 2, 3]

function iterat(collection) {
  let i = 0
  return {
    next() {
      return {
        done: i >= collection.length,
        value: collection[i++]
      }
    }
  }
}

let b = iterat(a)
console.log(b.next()) //false
console.log(b.next()) // false
console.log(b.next()) // false
console.log(b.next()) // true

// in ES6 we can do this bellow the line

let arr = [1, 2, 3]

let c = arr[Symbol.iterator]()

console.log(c)
console.log(c)
console.log(c)
console.log(c)
