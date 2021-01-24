// premitive data type
Number = 10 // integer
Number = 5.12 // float
String = 'text'
String = "text"
String = `text`
var x = String(123)
var y = String(5.1245)
var a = 125
console.log(Number.parseFloat(a)) // convert integer to float
var b = 125.1256
console.log(Number.parseInt(b))  // convert float to integer
console.log(b.toString())  // convert float to integer

console.log(Number.MAX_VALUE())
console.log(Number.MIN_VALUE())

console.log(1/0) // infinity
console.log('text' * 10) // infinity

// boolean data type
true, false, null, undefined, NaN,
  var n = Boolean(true)
  var m = Boolean(false)
// object data type
Array , Object , Function.