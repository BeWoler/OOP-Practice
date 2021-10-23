class User {
    private _username;
    private _password;
    private _id;

    constructor(username, password) {
        this._username = username;
        this._password = password;
        this._id; // generateRandomId();
    }

    public get username() {
        return this._username;
    }

    public set username(value) {
        this._password = value
    }

    public get password() {
        return this._password;
    }

    public set password(value) {
        this._password = value
    }

    public get id() {
        return this._id;
    }
}

const user = new User('BeWoler', 12345);
// user.id = 2; // error