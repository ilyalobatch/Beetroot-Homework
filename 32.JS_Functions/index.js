// ----- I. Minimun

// 1. Напиши всі можливі варіанти створення функцій.
// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
// 3. Напиши функцію, яка приймає 2 числа і повертає :
//      -1, якщо перше число менше, ніж друге;
//      1 - якщо перше число більше, ніж друге;
//      0 - якщо числа рівні.
// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// ---------------------------------------------------------------------

// ----- II. Normal

// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

// --------- ANSWERS ---------

// ----- I. Minimun

// 1.
// 1) Function expression = function myFunf() {} || const myFunc = () => {};
// 2) Function declaration = const myFunc = function() {}
// 3) IIFE (Immediately invoked function expression) = (function() {
// ******
// })();

// 2.
// const myFunc = function () {
//   return `I counted ${arguments.length} arguments in function`;
// };

// 3.
// const myFunc = (firstNumber, secondNumber) => {
//   if (firstNumber < secondNumber) {
//     return -1;
//   } else if (firstNumber === secondNumber) {
//     return 0;
//   }
//   return 1;
// };

// 4.
// const factorialize = (number) => {
//   if (number < 0) {

//     return "Number should be positive!";
//   } else if (number === 0 || number === 1) {

//     return 1;
//   }

//   return number * factorialize(number - 1);
// };

// 5.
// const concatinator = (firstNumber, secondNumber, thirdNumber) => {
//   const concatNumber = parseFloat(
//     [firstNumber, secondNumber, thirdNumber].join("")
//   );

//   return concatNumber;
// };

// 6.
// const areaCalc = (length, width = null) => {
//   if (width !== null) {

//     return length * width;
//   }

//   return length * length;
// };

// ----- II. Normal

// 1.
// const isPerfectNumber = (inputNumber) => {
//   let sum = 0;
//   for (index = 1; index < inputNumber; index++) {
//     if (inputNumber % index === 0) {
//       sum += index;
//     }
//   }
//   if (sum !== inputNumber) {

//     return false;
//   }

//   return true;
// };

// 2.
// const perfectNumberSet = (minNumber, maxNumber) => {
//   const numberSet = [];
//   if (minNumber > maxNumber) {

//     return `Min Number should be less than Max Number`;
//   }
//   for (let index = minNumber; index <= maxNumber; index++) {
//     // isPerfectNumber function is taken from task No. 1
//     if (isPerfectNumber(index)) {
//       numberSet.push(index);
//     }
//   }
//   if (!numberSet.length) {

//     return `No any perfect numbers in that diaposon`;
//   }

//   return numberSet;
// };
