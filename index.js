class Rectangle {
  constructor(shortSide, longSide) {
    this.shortSide = shortSide
    this.longSide = longSide
  }

  getArea() {
    return this.shortSide * this.longSide
  }
}

class Square extends Rectangle {
  constructor(shortSide, longSide) {
    super(shortSide, longSide)
  }
}

const rectangle = new Rectangle(10, 5)
//* This works great
const squre = new Square(10, 10)

console.log(rectangle.getArea()) // 50
console.log(squre.getArea()) // 100

//! Here it explodes
//! If we give the square two different side lengths as parameters. This code will not work here. So a square is not a rectangle.
const squre = new Square(5, 10)
console.log(squre.getArea()) // 50
