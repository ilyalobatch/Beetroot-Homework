import {User} from "../User";

export class Admin extends User {
    constructor(props) {
        super(props);

        this.users = [];
    }

    addUser(userName) {
        if (!this.users.includes(userName)) {
            this.users.push(userName);
            console.log(`User ${userName} was successfully added to the list of users`);
        } else {
            console.log(`User ${userName} is already present in the list of users`);
        }
    }

    removeUser(userName) {
        if (!this.users.includes(userName)) {
            console.log(`User ${userName} is not present in the list of users`);
        } else {
            const userIndex = this.users.indexOf(userName);
            this.users.splice(userIndex, 1);
            console.log(`User ${userName} was successfully deleted from the list of users`);
        }
    }

    changeUserRole(userName, role) {
        console.log(`The role was successfully changed to ${role} for ${userName} User`);
    }

    getAllUsers() {
        return this.users;
    }

    removeAllUsers() {
        this.users = [];
        console.log('The list of users was cleared');
    }

}