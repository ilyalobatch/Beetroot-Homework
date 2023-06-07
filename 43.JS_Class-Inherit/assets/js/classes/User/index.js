export class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    login() {
        console.log('User was logged in successfully');
    }

    logout() {
        console.log('User was logged out');
    }

    changeName(name) {
        this.name = name;
        console.log(`User's name changed to ${name} successfully`);
    }

    changePassword(password) {
        console.log(`User's password changed to ${password} successfully`);
    }
}