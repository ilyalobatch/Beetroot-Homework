class Circle {
  constructor(radius) {
    // TASK No. 1
    this._radius = radius;
  }

  // TASK No. 2
  get radius() {
    return this._radius;
  }

  // TASK No. 3
  set radius(value) {
    this._radius = value;
  }

  // TASK No. 4
  get diameter() {
    return 2 * this._radius;
  }

  // TASK No. 5
  calculateArea() {
    return Math.PI * this._radius ** 2;
  }

  // TASK No. 6
  calculateCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle = new Circle(5);

console.log(circle._radius);
console.log(circle.diameter);
console.log(circle.calculateArea());
console.log(circle.calculateCircumference());

circle.radius = 7;
console.log(circle._radius);
console.log(circle.diameter);
console.log(circle.calculateArea());
console.log(circle.calculateCircumference());
