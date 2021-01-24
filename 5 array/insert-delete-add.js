var a = [1, 2, 3, 4, 5, 6, 7, 8,]
a.push(9) // add after last index
a.unshift(9) // add before 0 index
a.pop(9) // remove last index
a.shift() // remove 1st index
a.splice(3,4,11) // after 3 index > remove 4 indexes > then add 11
console.log(a)