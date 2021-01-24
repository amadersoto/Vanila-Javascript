var arr = [1, 2, 3, 5, 4, 89, 8, 9,-1]
var b = arr.every(function (value) { 
  return value % 2 == 0 // it will check all number is even or not
})
console.log(b)

var c = arr.every(function (value) {
  return value >= 0 // it will check any nagative number exist or not
})
console.log(c)

var d = arr.some(function (value) {
  return value % 2 == 0 // even+
})
// and
var e = arr.some(function (value) {
  return value % 2 == 1 // odd
})
console.log(d)
console.log(e)