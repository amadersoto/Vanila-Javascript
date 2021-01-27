class selim {
  constructor(width, height) {
    this.width = width
      this.height = height
  }
  draw() {
    console.log('i am drawing method')
  }
}

let obj = new selim(10,20)
console.log(obj)

let a = obj.draw()
console.log(a)