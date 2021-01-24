var arr = [1, 2, 3, 4, 5]
var sum = 0
arr.forEach(function (value,index,arr) { // foreach modify existing array
  sum += value
})
console.log(sum)