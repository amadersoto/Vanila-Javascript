let set = new Set([1, 2, 3])
set.add(4)
set.add(5)
set.add(1) // not overriden
set.add(2) // not overriden

set.delete(4)
set.clear()
console.log(set.has(3))

console.log(set.keys()) // keys and values are same
console.log(set.values())

let it = set.keys()
// or
let itr = set.values()
console.log(it.next())

// checking iterable or not

function check(set) {
  return typeof set[Symbol.iterator] === 'function'
}
console.log(check(set))

// for of loop

for (let v of set) {
  console.log(v)
}
