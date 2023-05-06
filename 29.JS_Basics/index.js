// ----- I. Minimun

// 1. Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;
// 2. Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
// 3. Вкажи всі можливі способи коментування коду;
// 4. Які стилі написання імен змінних ти знаєш?

// ---------------------------------------------------------------------

// ----- II. Normal

// 1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
// 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
// 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

// ---------------------------------------------------------------------

// ----- III. Maximun

// 1. Запитай у користувача радіус кола і виведи площу такої окружності.
// 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
// 3. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

// --------- ANSWERS ---------

// ----- I. Minimun

// 1.Three ways:
// - On the bottom before closing tag </body> add <script src="(YOUR PATH TO JS FILE)"><script> (BEST SOLUTION!!!!)
// - Inside <head> tag add <script src="(YOUR PATH TO JS FILE)"><script>
// - Either inside <head> or before closing tag </body> add <script>WRITE HERE JS CODE<script>

// 2. Maybe I undestood this task wrongly...
// Correct 4 variables
// const fullName = "Illia Lobach";
// const full_name = "Volodymyr Senko";
// const FULL_NAME = "Iryna Kondratenko";
// const name1 = "Krivogub Oleh";

// Incorrect 5 variables
// const name-1 = "Illia Lobach"
// const 1fullname = "Illia Lobach"
// const n = "Illia Lobach"
// const -name = "Illia Lobach"
// const full&name = "Illia Lobach"

// 3. Single Line Comments & Multiline line Comments
// Single Line Comments example: (Everything on top :D (starting with 2 slashes "//""))
// Multiple line Comments example:
/* 
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Quibusdam omnis quae maiores id aperiam. 
Tempora, excepturi eveniet quos molestiae necessitatibus deleniti itaque maiores labore temporibus, consequatur aspernatur quod, sit eum!
*/

// 4. Three styles: var, let, const;

// ----- II. Normal

// 1.
// const name = prompt("What is your name?");
// alert(`Hello, ${name}`);

// 2.
// const currentYear = 2023;
// const age = Number(prompt("What is your date of birth?"));

// if (isNaN(age)) {
//   alert(`Please enter the number without any letters and symbols`);
// } else if (age === 0) {
//   alert(
//     `You didn't enter anything or entered 0. Please refresh this page and try again`
//   );
// } else {
//   alert(`Your age is ${currentYear - age}`);
// }

// 3.
// const squarePerimeter = (side) => {
//   perimeter = side * 4;
//   return perimeter;
// };

// const length = Number(prompt("Tell me the length of the square"));

// if (isNaN(length)) {
//   alert(`Please enter the number without any letters and symbols`);
// } else if (length === 0) {
//   alert(
//     `You didn't enter anything or entered 0. Please refresh this page and try again`
//   );
// } else {
//   alert(
//     `The length is ${length}, so Perimeter equals ${squarePerimeter(length)}`
//   );
// }

// ----- III. Maximun

// 1.
// const PI = 3.14;
// const circleArea = (radius) => {
//   area = PI * radius ** 2;
//   return radius;
// };

// const radius = Number(prompt("Tell me the radius length of the circle"));

// if (isNaN(radius)) {
//   alert(`Please enter the number without any letters and symbols`);
// } else if (radius === 0) {
//   alert(
//     `You didn't enter anything or entered 0. Please refresh this page and try again`
//   );
// } else {
//   alert(
//     `The radius length is ${radius}, so circle area equals ${circleArea(
//       radius
//     )}`
//   );
// }

// 2.
// const speedCalc = (distance, time) => {
//   speed = distance / time;
//   return speed;
// };

// const distance = Number(
//   prompt("Tell me what is the distance (in meters) to your destination?")
// );
// const time = null;

// if (isNaN(distance)) {
//   alert(`Please enter the number without any letters and symbols`);
// } else if (distance === 0) {
//   alert(`You didn't enter anything. Please refresh this page and try again`);
// } else {
//   time = Number(
//     prompt(
//       "Okay! What is the time (in seconds) you want to spend to reach your destination?"
//     )
//   );
//   if (isNaN(time)) {
//     alert(`Please enter the number without any letters and symbols`);
//   } else if (time === 0) {
//     alert(
//       `You didn't enter anything or entered 0. Please refresh this page and try again`
//     );
//   } else {
//     alert(
//       `Your distance is ${distance} and travelling time is ${time}, so you should travel with the ${speedCalc(
//         distance,
//         time
//       )} m/s speed`
//     );
//   }
// }

// 3.
const USD = 1;
const EUR = 0.91;

const converter = (amount) => {
  return (USD * amount) / EUR;
};

let amount = Number(
  prompt("Please choose amount you would like to convert from USD to EUR")
);

if (isNaN(amount)) {
  alert(`Please enter the number without any letters and symbols`);
} else if (amount === 0) {
  alert(
    `You didn't enter anything or entered 0. Please refresh this page and try again`
  );
} else {
  alert(
    `The amount to convert is ${amount} USD, so you will receive ${converter(
      amount
    )} EUR`
  );
}
