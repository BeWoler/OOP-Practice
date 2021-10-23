class Rectangle2 {
    private _width;
    private _height;

    constructor(w, h) {
        this._width = w;
        this._height = h;
    }

    public get width() {
        return this._width
    }

    public set width(value) {
        value <= 0 ? this._width = 1 : this._width = value
    }

    calcArea() {
        return this._width * this._height;
    }

    calcPerimeter() {
        return (this._width + this._height) * 2;
    }   
}

const rect2 = new Rectangle2(5, 10);
rect2.width = -2;
console.log(rect2) // width = 1
