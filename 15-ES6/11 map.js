let map = new Map([
  ['a', 10],
  ['b', 20]
])

map.set('c', 30)          // add from outside
map.set({'selim': 10})    // we can declear an object as a key
map.delete('c')
console.log(map)
console.log(map.get('b'))
console.log(map.keys())
console.log(map.values())
console.log(map.entries())

// for of loop

for (let [key, value] of map) {
  console.log(key,value)
}

// forEach loop

map.forEach((key, value) => {
  console.log(key, value)
})