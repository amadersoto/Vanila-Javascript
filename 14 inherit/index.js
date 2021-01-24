function Shape() {
  
}
Shape.prototype.common = function () {
    console.log('common')
  }

Square.prototype = Object.create(Shape.prototype)

function Square(width) {
  this.width = width
}

Square.prototype.draw = function () {
    console.log('drawing')
  }


var shape = new Shape()
var sqr = new Square(45)