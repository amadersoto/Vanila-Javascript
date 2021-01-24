var arr = [1, 2, 3, 4, 5, 6]
var a = arr.reduce(function (currentValue, previousValue) {
  return currentValue + previousValue
}, 100) //this is initial value

// to get max value of array

var b = arr.reduce(function (currentvalue, previousvalue) {
  return Math.max(currentvalue,previousvalue)
}, 0)

console.log(a)
console.log(b)