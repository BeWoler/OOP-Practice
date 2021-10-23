class Rectangle {
    width;
    height;

    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    calcArea() {
        return this.width * this.height
    }

    calcPerimeter() {
        return (this.width + this.height) * 2
    }
}

const rect = new Rectangle(5, 10);
const rect2 = new Rectangle(15, 30);
const rect3 = new Rectangle(20, 45);

rect.calcArea();
rect2.calcArea();
rect3.calcArea();

rect.calcPerimeter();
rect2.calcPerimeter();
rect3.calcPerimeter();