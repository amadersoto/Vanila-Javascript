var a = true
while (a) {
  var b = Math.floor(Math.random() * 10 + 1)
  if (b == 9) {
    console.log('winner')
    a = false
  } else {
    console.log('looser '+b)
  }
}