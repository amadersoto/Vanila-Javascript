let obj = {
  a: 10,
  b: 20,
  add() {
    console.log(this)
  }
}
obj.add()