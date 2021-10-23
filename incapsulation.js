class Rectangle {
    _width;
    _height;

    constructor(w, h) {
        this._width = w;
        this._height = h;
    }

    get width() {
        return this._width
    }

    set width(value) {
        value <= 0 ? this._width = 1 : this._width = value
    }

    calcArea() {
        return this._width * this._height;
    }

    calcPerimeter() {
        return (this._width + this._height) * 2;
    }   
}

const rect = new Rectangle(5, 10);
rect.width = -2;
console.log(rect) // width = 1
