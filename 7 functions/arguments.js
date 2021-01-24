function add(a, b, c) {
  for (var i = 0; i < arguments.length; i++){
    console.log(arguments[i])
  }
}
add(10, 20, 30)

// or we can leave a,b,c arguments
function add() {
  for (var i = 0; i < arguments.length; i++){
    console.log(arguments[i])
  }
}
add(10, 20, 30)

// when should i use argument constructor ?
function addall() {
  var sum = 0
  for (var i = 0; i < arguments.length; i++){
    sum +=arguments[i]
  }
  console.log(sum)
}
addall(1,2,3)
addall(5,10,1,5,15,20,30)