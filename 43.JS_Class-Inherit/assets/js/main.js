import {User} from "./classes/User";
import {Clock} from "./classes/Clock";
import {Admin} from "./classes/Admin";

const createUserForm = document.querySelector('.create-user-form');
const createClockForm = document.querySelector('.create-clock-form');
const clockContainer = document.querySelector('.clock-container');

const getFormValues = (formEl) => {
    const assignKeyValuePairs = (accumulator, current) => {
        accumulator[current[0]] = current[1];
        return accumulator;
    }

    const entries = new FormData(formEl).entries();
    return Array.from(entries).reduce(assignKeyValuePairs, {});
}

document.addEventListener('DOMContentLoaded', () => {
    createUserForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formValues = getFormValues(event.target);

        if (!formValues.name || !isNaN(+formValues.name)) {
            return alert('The name of the User should not be an empty string or contain digits only')
        }
        
        if (formValues.role === 'admin') {
            const newAdmin = new Admin(formValues.name, formValues.role);
            console.log(`New Admin ${newAdmin.getName()} created successfully`);
        } else {
            const newUser = new User(formValues.name, formValues.role);
            console.log(`New User ${newUser.getName()} created successfully`);
        }
    });

    createClockForm.addEventListener('submit', (event) => {
        event.preventDefault();


        const formValues = getFormValues(event.target);
        const newClock = new Clock(formValues.clockTime);
        
        clockContainer.append(newClock.element);
    })
});