function currying(a) {
  return function (b) {
   return function (c) {
      return a + b + c
    }
  }
}
var sum = currying(5)(10)(15)
console.log(sum)
