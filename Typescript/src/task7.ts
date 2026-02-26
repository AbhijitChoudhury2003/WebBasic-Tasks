//Shape Area Calculator using Abstract Method Implementation

abstract class Shape {
  abstract calculateArea(): number;
}
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}
const circle1 = new Circle(5);
const rectangle1 = new Rectangle(4, 6);
console.log(`Area of Circle: ${circle1.calculateArea().toFixed(2)}`);
console.log(`Area of Rectangle: ${rectangle1.calculateArea()}`);





