var a = true
for (; ;){
  var b = Math.round(Math.random() * 10 + 1)
  if (b == 9) {
    console.log('winner')
    break // without break it will infinity loop
  } else {
    console.log('looser ' + b)
  }
}