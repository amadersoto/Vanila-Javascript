var arr = [1, 2, 3, 4, 5, 6]
var a = arr.find(function (value) {
  return value == 4 // it will return 4
})

var b = arr.findIndex(function (value) {
  return value == 4 // it will return the index number
})

console.log(a)
console.log(b)
