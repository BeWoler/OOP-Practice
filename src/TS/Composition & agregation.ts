// Композиция и агрегация

class Engine {
    drive() {
        console.log('Engine is working');
    }
}

class Wheel {
    drive() {
        console.log('The wheels go');
    }
}

class Freshener {
    fresh: true;
}

class Flat {
    freshener: Freshener;

    constructor(freshener) {
        this.freshener = freshener;
    }
}

class Car {
    engine: Engine;
    wheels: Wheel[];
    freshener: Freshener;

    constructor(freshener) {
        // Агрегация
        this.freshener = freshener;
        // Композиция
        this.engine = new Engine();
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
    }

    // Делегирование
    drive() {
        this.engine.drive();
        for(let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive();
        }
    }
}

const bmw = new Car();
bmw.drive();