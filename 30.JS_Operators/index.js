// ----- I. Minimun

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

// ---------------------------------------------------------------------

// ----- II. Normal

// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

// ---------------------------------------------------------------------

// ----- III. Maximun

// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
// Що повернуть вирази:
// 2 && 0 && 3
// 2 || 0 || 3
// 2 && 0 || 3

// --------- ANSWERS ---------

// ----- I. Minimun

// 1.
// const number1 = 0.1;
// const number2 = 0.2;
// const result = (number1 + number2).toFixed(1);
//
// console.log(result);

// 2.
// const number1 = "1";
// const number2 = 2;
// const result = Number(number1) + Number(number2);
//
// console.log(result);

// 3.
// const fileCapacity = 0.86;
// const memoryConverter = (memory) => {
//   return Math.floor(memory / fileCapacity);
// };
// const flashMemory = Number(
//   prompt("Please tell me what is your Flash Memory (in Gb)")
// );

// if (isNaN(flashMemory)) {
//   alert(`Please enter the number without any letters and symbols`);
// } else if (flashMemory <= 0) {
//   alert(
//     `You didn't enter anything or entered 0 or negative number. Please refresh this page and try again`
//   );
// } else {
//   alert(
//     `The Flash Memory is ${flashMemory} Gb, so in your Flash drive it is available to store ${memoryConverter(
//       flashMemory
//     )} files`
//   );
// }

// ----- I. Normal

// 1.
// const chocolateCounter = (pocketAmount, chocolatePrice) => {
//   return Math.floor(pocketAmount / chocolatePrice);
// };

// const changeAmount = (pocketAmount, chocolatePrice) => {
//   return pocketAmount % chocolatePrice;
// };
//
// const price = null;
// const pocket = Number(prompt("How much money you have? (in $)"));
//
// if (isNaN(pocket)) {
//   alert(`Please enter the number without any letters and symbols`);
// } else if (pocket <= 0) {
//   alert(
//     `You didn't enter anything or entered 0 or negative number. Please refresh this page and try again`
//   );
// } else {
//   price = prompt(
//     `Okay, choose the price of the chocolate (Available from 1$ to 10$)`
//   );
//   if (isNaN(price)) {
//     alert(`Please enter the number without any letters and symbols`);
//   } else if (price <= 0) {
//     alert(
//       `You didn't enter anything or entered 0 or negative number. Please refresh this page and try again`
//     );
//   } else if (price > 10) {
//     alert(
//       `There is no available chocolate for that price. Please refresh the page and start again`
//     );
//   } else if (pocket < price) {
//     alert(`Sorry, you don't have enough money :(`);
//   } else {
//     alert(
//       `Your pocket amount is ${pocket}$ and you chose chocolate with the price ${price}$. You can purchase ${chocolateCounter(
//         pocket,
//         price
//       )} chocolates and your change will be ${changeAmount(pocket, price)}$`
//     );
//   }
// }

// 2.
// const numReverser = (number) => {
//   return parseFloat(number.toString().split("").reverse().join(""));
// };

// const number = Number(prompt("Choose random 3-digit number (from 100 to 999)"));

// if (isNaN(number)) {
//   alert(`Please enter the number without any letters and symbols`);
// } else if (number <= 0) {
//   alert(
//     `You didn't enter anything or entered 0 or negative number. Please refresh this page and try again`
//   );
// } else if (number > 1000 || number < 100) {
//   alert(`Please choose number from 100 to 999. Refresh the page and try again`);
// } else {
//   alert(
//     `Your number was ${number}. Here is your reversed number ${numReverser(
//       number
//     )}`
//   );
// }

// ----- III. Maximum

// 1.
// const year = 12;
// const yearRate = 0.05;
// const twoMonthPlan = 2;
//
// const depositConverter = (amount) => {
//   return amount + amount * ((yearRate / year) * twoMonthPlan);
// };
//
// const depositAmount = Number(
//   prompt("What is the amount you would like to deposit for 2 Month Plan?")
// );
//
// if (isNaN(depositAmount)) {
//   alert(`Please enter the number without any letters and symbols`);
// } else if (depositAmount <= 0) {
//   alert(
//     `You didn't enter anything or entered 0 or negative number. Please refresh this page and try again`
//   );
// } else {
//   alert(
//     `You deposited ${depositAmount}. In the next 2 month you will receive ${depositConverter(
//       depositAmount
//     )}`
//   );
// }

// 2.
// 2 && 0 && 3 --> 0
// 2 || 0 || 3 --> 2
// 2 && 0 || 3 --> 3
