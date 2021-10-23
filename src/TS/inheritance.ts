class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    public get firstName() {
        return this._firstName
    }

    public set firstName(value) {
        this._firstName = value
    }

    public get lastName() {
        return this._lastName
    }

    public set lastName(value) {
        this._lastName = value
    }

    public get age() {
        return this._age
    }

    public set age(value) {
        value < 0 ? this._age = 0 : this._age = value; 
    }
}

class Employee extends Person {
    private _inn;
    private _number;
    private _snils

    constructor(firstName, lastName, age, inn, number, snils) {
        super(firstName, lastName, age);
        this._inn = inn;
        this._number = number;
        this._snils = snils;
    }
}

const employee1 = new Employee('Stanislav', 'Vorozhun', 'dont remember', 15, 20, 30);

class Developer extends Employee {
    private _level;

    constructor(firstName, lastName, age, inn, number, snils, level) {
        super(firstName, lastName, age, inn, number, snils)
        this._level = level;
    }
}

const me = new Developer('Misha', 'Bireta', 21, 'dont know', 'dont know', 'dont know', 'Junior'); 