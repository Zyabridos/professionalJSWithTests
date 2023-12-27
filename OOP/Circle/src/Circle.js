export default class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return Math.PI * (this.radius ** 2);
  }
}

const circle = new Circle(3);
console.log(circle);
console.log(circle.getArea()); // 28.274...
console.log(circle.getCircumference()); // 28.274...
