// this is literal pattern
var a = function (a, b) {
  return rect = {
    width: a,
    height: b,
    draw: function () {
      console.log('I am a Rectangle')
      this.draw2()
    },
    draw2: function () {
      console.log('my height is : ' + this.height)
      console.log('my width is : ' + this.width)
    }
  }
}

var b = a(10, 20)
b.draw()
var c = a(5, 10)
c.draw()

// this is constructor pattern

var obj = function (a, b) {
    this.width = a
    this.height = b
    this.draw = function(){
      console.log('I am rectangle')
      this.draw2()
    }
    this.draw2 = function () {
      console.log('my height is : ' + this.height)
      console.log('my width is : ' + this.width)
    }
}
var x = new obj(10, 20)
x.draw()