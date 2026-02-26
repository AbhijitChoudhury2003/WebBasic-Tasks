//Shape Area Calculator using Abstract Method Implementation
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle1 = new Circle(5);
const rectangle1 = new Rectangle(4, 6);
console.log(`Area of Circle: ${circle1.calculateArea().toFixed(2)}`);
console.log(`Area of Rectangle: ${rectangle1.calculateArea()}`);
export {};
