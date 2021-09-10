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
const squre = new Square(10, 10)

console.log(rectangle.getArea())
console.log(squre.getArea())
