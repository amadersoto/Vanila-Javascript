var arr = [2, 1, 5, 0, 36, 3, 0, 4, 8, 9, 5, 4, 7, 6, 2] // accendeing order
arr.sort(function (a, b) {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
})
console.log(arr)

var persons = [
  {
    name: 'A',
    age: 10
  },
  {
    name: 'B',
    age: 30
  },
  {
    name: 'C',
    age: 40
  },
  {
    name: 'D',
    age: 20
  }
]
persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1
  } else if (a.age < b.age) {
    return -1
  } else {
    return 0
  }
})
console.log(persons)