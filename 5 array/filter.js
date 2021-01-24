var a = [1, 2, 3, 4, 5, 6]
var b = a.filter(function (value) { // filter returns new array like map
  return value % 2 == 0
})
console.log(b)

var c = a.filter(function (value) {
  return value > 2 // it will return all index after 2
})
console.log(c)