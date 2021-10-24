class User {
    username: string;
    age: number;
}

class Car {
    mark: string;
    age: number;
}

interface Repository<T> {
    create: (obj: T) => T;
    get: () => T;
    delete: (obj: T) => T;
    update: (obj: T) => T;
}

class UserRepo implements Repository<User> {
    create(obj: User): User {
        return undefined
    }

    get(): User {
        return undefined
    }

    delete(obj: User): User {
        return undefined
    }

    update(obj: User): User {
        return undefined
    }
}

class CarRepo implements Repository<Car> {
    create(obj: Car): Car {
        return undefined
    }

    get(): Car {
        return undefined
    }

    delete(obj: Car): Car {
        return undefined
    }

    update(obj: Car): Car {
        return undefined
    }
}