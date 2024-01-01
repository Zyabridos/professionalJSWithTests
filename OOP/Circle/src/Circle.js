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
