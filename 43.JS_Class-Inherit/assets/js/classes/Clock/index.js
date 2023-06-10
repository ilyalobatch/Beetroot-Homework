export class Clock {
    constructor(time) {
        this.time = new Date(time);
        this.element = this.createClock();
    }

    getCurrentTime(element) {
        if (!element) {
            return
        }

        element.innerText = this.time.toTimeString();
    }

    getCurrentDateTime(element) {
        if (!element) {
            return
        }

        element.innerText = this.time.toLocaleString();
    }

    deleteClock() {
        this.element.parentNode.removeChild(this.element);
        console.log('The clock was successfully deleted');
    }

    createClock() {
        const clockEl = document.createElement('div');
        clockEl.classList.add('clock-element');

        const clockDisplay = document.createElement('div');
        clockDisplay.classList.add('clock-display');

        const clockButtons = document.createElement('div');
        clockButtons.classList.add('clock-buttons');

        const showTimeBtn = document.createElement('button');
        showTimeBtn.classList.add('show-time-btn');
        showTimeBtn.innerText = 'Show Time';
        showTimeBtn.addEventListener('click', () => this.getCurrentTime(clockDisplay));

        const showDateTimeBtn = document.createElement('button');
        showDateTimeBtn.classList.add('show-date-time-btn');
        showDateTimeBtn.innerText = 'Show Date/Time';
        showDateTimeBtn.addEventListener('click', () => this.getCurrentDateTime(clockDisplay));

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-clock-btn');
        deleteBtn.innerText = 'Delete Clock';
        deleteBtn.addEventListener('click', () => this.deleteClock());

        clockButtons.append(showTimeBtn, showDateTimeBtn, deleteBtn);
        clockEl.append(clockDisplay, clockButtons);

        return clockEl;
    }
}