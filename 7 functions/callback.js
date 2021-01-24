function add(a, b, cb) {
  var c = a + b
  var d = a * b
  var e = cb(c , d)
  return e
}
function sum(a, b) { // this is call back function
  return a+b
}
var x = add(5, 8, sum) // we can call a function name as a arguments
console.log(x)

// or this way

var result = add(5, 8, function minus(a , b) { // we can pass a function as a arguments
  return a - b
})
console.log(result)