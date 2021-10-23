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

rect.calcArea();

rect.calcPerimeter();