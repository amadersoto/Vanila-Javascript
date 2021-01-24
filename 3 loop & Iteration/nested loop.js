var a = 5
for (var i = 1; i <= a; i++){
  var b = ''
  for (var j = 1; j <= i; j++){
    b += j
  }
  console.log(b)
}

var a = 5
for (var i = 1; i <= a; i++){
  var b = ''
  for (var j = 1; j <= a; j++){
    b += '*'
  }
  console.log(b)
}