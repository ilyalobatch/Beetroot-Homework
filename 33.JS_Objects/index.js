// ----- I. Minimun

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// 1. Метод, який виводить на екран інформацію про автомобіль.
// 2. Додавання ім’я водія у список.
// 3. Перевірка водія на наявність його ім’я у списку.
// 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

// ---------------------------------------------------------------------

// ----- II. Normal

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 1. Для виведення часу на екран.
// 2. Зміни часу на передану кількість секунд.
// 3. Зміни часу на передану кількість хвилин.
// 4. Зміни часу на передану кількість годин.
// 5. Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

// ---------------------------------------------------------------------

// ----- III. Maximun

// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// 1. Складання 2-х об'єктів-дробів.
// 2. Віднімання 2-х об'єктів-дробів.
// 3. Множення 2-х об'єктів-дробів.
// 4. Ділення 2-х об'єктів-дробів.
// 5. Скорочення об'єкта-дробу.

// --------- ANSWERS ---------

// ----- I. Minimun

// 1-4.
const car = {
  manufacturer: "Audi",
  model: "A5",
  year: 2015,
  averageSpeed: 90,
  fuelTankCapacity: 54,
  fuelConsumption: 6.8, // Per 100 km
  drivers: [],

  // TASK No. 1
  generalInfo() {
    const {
      manufacturer,
      model,
      year,
      averageSpeed,
      fuelTankCapacity,
      fuelConsumption,
      drivers,
    } = car;
    console.log(`Manufacturer - ${manufacturer}`);
    console.log(`Model - ${model}`);
    console.log(`Build year - ${year}`);
    console.log(`Average speed - ${averageSpeed} km/h`);
    console.log(`Fuel Tank Capacity - ${fuelTankCapacity} ltr`);
    console.log(`Fuel Consumption per 100 km - ${fuelConsumption} ltr`);
    console.log(
      `All Drivers - ${
        !drivers.length ? "Nobody used this before" : `${drivers}`
      }`
    );

    return;
  },

  // TASK No. 2
  addNewDriver(driverName) {
    if (!driverName) {
      return `Please enter driver's name`;
    } else if (this.drivers.includes(driverName)) {
      return `This driver already in the list`;
    }

    this.drivers.push(driverName);

    return `${driverName} was added to list`;
  },

  // TASK No. 3
  hasDriver(driverName) {
    if (!driverName) {
      return `Please enter driver's name`;
    }

    return this.drivers.includes(driverName);
  },

  // TASK No. 4
  travellingInfo(distance) {
    const totalTravellingTime = Number(
      (distance / this.averageSpeed).toFixed(1)
    );
    const totalTravellingFuel = Number(
      (distance * (this.fuelConsumption / 100)).toFixed(1)
    );
    const breakTime = Math.floor(totalTravellingTime / 4);

    if (this.fuelTankCapacity < totalTravellingFuel) {
      return `This trip will consume more fuel than your Fuel Tank Capacity`;
    }

    return `Your full travelling time will take ${
      totalTravellingTime + breakTime
    } hrs. Travelling by car will take ${totalTravellingTime} hrs and break will take ${breakTime} hrs. Total fuel consumed during this trip will be ${totalTravellingFuel} ltr`;
  },
};

// ----- II. Normal

// 1-5.
const time = {
  hours: 23,
  minutes: 33,
  seconds: 27,

  // TASK No. 1
  currentTime() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  },

  // Function that is used in other Tasks
  subtractSeconds() {
    while (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes += 1;
    }
  },

  // Function that is used in other Tasks
  subtractMinutes() {
    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }
  },

  // Function that is used in other Tasks
  subtractHours() {
    while (this.hours >= 24) {
      this.hours -= 24;
    }
  },

  // TASK No. 2
  addSeconds(additionalSeconds) {
    if (additionalSeconds <= 0) {
      return `Should be more than 0`;
    }

    this.seconds += Math.floor(additionalSeconds);
    this.subtractSeconds();
    this.subtractMinutes();
    this.subtractHours();

    return this.currentTime();
  },

  // TASK No. 3
  addMinutes(additionalMinutes) {
    if (additionalMinutes <= 0) {
      return `Should be more than 0`;
    }

    this.minutes += Math.floor(additionalMinutes);
    this.subtractMinutes();
    this.subtractHours();

    return this.currentTime();
  },

  // TASK No. 4
  addHours(additionalHours) {
    if (additionalHours <= 0) {
      return `Should be more than 0`;
    }

    this.hours += Math.floor(additionalHours);
    this.subtractHours();

    return this.currentTime();
  },
};

// ----- III. Maximum

// 1-5.
// Those Fractions are for examples
const firstFraction = {
  numerator: 3,
  denominator: 4,
};
const secondFraction = {
  numerator: 7,
  denominator: 8,
};
const thirdFraction = {
  numerator: 16,
  denominator: 32,
};
const fourthFraction = {
  numerator: 48,
  denominator: 128,
};

const fraction = {
  // Function that is used in other Tasks
  equalDenominator(firstFraction, secondFraction) {
    const { numerator: firstNumenator, denominator: firstDenominator } =
      firstFraction;
    const { numerator: secondNumenator, denominator: secondDenominator } =
      secondFraction;
    const denominator = firstDenominator * secondDenominator;

    return [
      {
        numerator: firstNumenator * secondDenominator,
        denominator,
      },
      {
        numerator: secondNumenator * firstDenominator,
        denominator,
      },
    ];
  },

  // TASK No. 1
  subtractFractions(firstFraction, secondFraction) {
    const [firstEqualizedFraction, secondEqualizedFraction] =
      this.equalDenominator(firstFraction, secondFraction);
    const { numerator: firstNumenator } = firstEqualizedFraction;
    const { numerator: secondNumenator } = secondEqualizedFraction;
    const { denominator } = firstEqualizedFraction;

    return (firstNumenator - secondNumenator) / denominator;
  },

  // TASK No. 2
  sumFractions(firstFraction, secondFraction) {
    const [firstEqualizedFraction, secondEqualizedFraction] =
      this.equalDenominator(firstFraction, secondFraction);
    const { numerator: firstNumenator } = firstEqualizedFraction;
    const { numerator: secondNumenator } = secondEqualizedFraction;
    const { denominator } = firstEqualizedFraction;

    return (firstNumenator + secondNumenator) / denominator;
  },

  // TASK No. 3
  multiplyFractions(firstFraction, secondFraction) {
    const { numerator: firstNumenator, denominator: firstDenominator } =
      firstFraction;
    const { numerator: secondNumenator, denominator: secondDenominator } =
      secondFraction;

    return (
      (firstNumenator * secondNumenator) /
      (firstDenominator * secondDenominator)
    );
  },

  // TASK No. 4
  divideFractions(firstFraction, secondFraction) {
    const { numerator: firstNumenator, denominator: firstDenominator } =
      firstFraction;
    const { numerator: secondNumenator, denominator: secondDenominator } =
      secondFraction;

    return (
      (firstNumenator * secondDenominator) /
      (firstDenominator * secondNumenator)
    );
  },

  // TASK No. 5
  shortenedFraction(fraction) {
    let { numerator, denominator } = fraction;
    let index = 1;
    while (index <= numerator) {
      if (numerator % index === 0 && denominator % index === 0) {
        numerator /= index;
        denominator /= index;
        index = 1;
      }
      index++;
    }

    return `${numerator}/${denominator}`;
  },
};
