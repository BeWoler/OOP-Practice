class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    public greeting() {
        console.log(`Hello, im a person and my name is ${this._firstName}`)
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

    public greeting() {
        console.log(`Hello, im a employee and my name is ${this.firstName}`)
    }
}

const employee1 = new Employee('Stanislav', 'Vorozhun', 'dont remember', 15, 20, 30);

class Developer extends Employee {
    private _level;

    constructor(firstName, lastName, age, inn, number, snils, level) {
        super(firstName, lastName, age, inn, number, snils)
        this._level = level;
    }

    public greeting() {
        console.log(`Hello, im a developer and my name is ${this.firstName}`)
    }
}

const developer = new Developer('Misha', 'Bireta', 21, 'dont know', 'dont know', 'dont know', 'Junior'); 
const employee = new Employee('Stas', 'Vorozhun', 'hz', 'dont know', 'dont know', 'dont know'); 
const person = new Person('Misha', 'Bireta', 21);

developer.greeting();
employee.greeting();
person.greeting();

const personList: Person[] = [developer, employee, person]

function massGreeting(persons: Person[]) {
    for(let i = 0; i < personList.length; i++) {
        const person = persons[i]
        person.greeting();
    }
}

massGreeting(personList);