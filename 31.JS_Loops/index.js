// ----- I. Minimun

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// 5. Запитай у користувача число і виведи всі дільники цього числа.

// ---------------------------------------------------------------------

// ----- II. Normal

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//     від 200 до 300 - знижка буде 3%;
//     від 300 до 500 - 5%;
//     від 500 і вище - 7%.
// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

// ---------------------------------------------------------------------

// ----- III. Maximun

// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

// --------- ANSWERS ---------

// ----- I. Minimun

// 1.
// const age = prompt("Please enter your age!");
// const personIs = "You are";
// console.log(`Number is (${age})`);
//
// if (isNaN(Number(age)))
//   alert("Please enter the number without any letters and symbols");
// else if (!age) alert("Please enter something");
// else if (age < 0) alert("Oh my God! You are from the past!");
// else if (age >= 0 && age <= 11) alert(`${personIs} child!`);
// else if (age >= 12 && age <= 17) alert(`${personIs} kid!`);
// else if (age >= 18 && age <= 59) alert(`${personIs} adult!`);
// else if (age >= 60) alert(`${personIs} senior!`);

// 2.
// const number = prompt("Please enter number between 0-9!");
// const symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
//
// if (isNaN(Number(number)))
//   alert("Please enter the number without any letters and symbols");
// else if (!number) alert("Please enter something");
// else if (number < 0 || number > 9) alert("No no no honey, choose between 0-9!");
// else if (number >= 0 && number <= 9)
//   alert(`Here is your symbol - "${symbols[number]}"`);

// 3. -----------------------------------------------
// const firstNumber = prompt("Please enter 1st number!");
// const secondNumber = prompt(
//   "Please enter 2nd number (should be greater than 1st number)!"
// );

// if (isNaN(Number(firstNumber || secondNumber)))
//   alert("Please enter the number without any letters and symbols");
// else if (!firstNumber || !secondNumber)
//   alert("You forgot to fill one of the numbers or both of them");
// else if (secondNumber === firstNumber)
//   alert(
//     `No calculations done. Your number is same in both options - ${firstNumber}`
//   );
// else if (secondNumber < firstNumber)
//   alert("No no no sweetpie, 2nd number should be greater than 1st number");
// else if (secondNumber > firstNumber) {
//   let result = Number(firstNumber);
//   for (let num = Number(firstNumber); num <= Number(secondNumber); num++) {
//     result += num;
//   }
//   console.log(result);
// }

// 4.-----------------------------
// 5.-----------------------------

// ----- II. Normal

// 1.
// const fiveDigitNumber = prompt("Please enter 5-digit Number");
// const array = Math.abs(Number(fiveDigitNumber)).toString().split("");
//
// if (isNaN(Number(fiveDigitNumber)))
//   alert("Please enter the number without any letters and symbols");
// else if (!fiveDigitNumber) alert("Please enter something");
// else if (array.length !== 5) alert("No no no my love, it should be 5-digit");
// else if (array.length === 5) {
//   array[0] === array[4] && array[1] === array[3]
//     ? alert("This is Palindrome")
//     : alert("This is not Palindrome");
// }

// 2.
// const purchase = prompt("What is the amount of your purchase?");
// const purchaseAmount = Number(purchase);
// function discountCalculator(discount) {
//   return `You have discount of ${discount}%! Your check was ${purchaseAmount}$, now it is ${
//     purchaseAmount - purchaseAmount * (discount / 100)
//   }$ `;
// }
//
// if (isNaN(Number(purchase)))
//   alert("Please enter the number without any letters and symbols");
// else if (!purchase) alert("Please enter something");
// else if (purchaseAmount <= 0) alert("Poor guy...");
// else if (purchaseAmount < 200)
//   alert(`No any discounts! Your check is ${purchaseAmount}$!`);
// else if (purchaseAmount >= 200 && purchaseAmount < 300)
//   alert(discountCalculator(3));
// else if (purchaseAmount >= 300 && purchaseAmount < 500)
//   alert(discountCalculator(5));
// else if (purchaseAmount >= 500) alert(discountCalculator(7));

// 3.
// function numberFilter() {
//   let promptValue = null;
//   let number = null;
//   const array = [];
//   for (let i = 1; i <= 10; i++) {
//     promptValue = prompt(`Please enter random number No. ${i}`);
//     number = Number(promptValue);
//     if (isNaN(number)) {
//       return alert("Please enter the number without any letters and symbols");
//     } else if (!promptValue) {
//       return alert("Ooops, you forgot to enter number. Start again :(");
//     } else {
//       array.push(number);
//     }
//   }
//   const arrayPositives = array.filter((item) => item > 0);
//   const arrayNegatives = array.filter((item) => item < 0);
//   const arrayZeros = array.filter((item) => item === 0);
//   const arrayEvens = array.filter((item) => item % 2 === 0);
//   const arrayOdds = array.filter((item) => item % 2 !== 0);
//   alert(`You have ${arrayPositives.length} Positive numbers`);
//   alert(`You have ${arrayNegatives.length} Negatives numbers`);
//   alert(`You have ${arrayZeros.length} Zero numbers`);
//   alert(`You have ${arrayEvens.length} Even numbers`);
//   alert(`You have ${arrayOdds.length} Odd numbers`);
// }
//
// numberFilter();

// 4. -----------------------------

// ----- III. Normal

// 1.
// const correctAnswer = prompt("Please choose random number between 0-100!");
// const correctNumber = Number(correctAnswer);
// const liarMessage = `You are a liar :c`;
// let question = null;
// let startNumber = 0;
// let endNumber = 101;
// let middleNumber = null;
//
// function numberFinder() {
//   middleNumber = Math.floor((startNumber + endNumber) / 2);
//   //--- When customer enter symbols
//   if (isNaN(correctNumber))
//     return alert("Please enter the number without any letters and symbols");
//   //--- When customer doesn't enter anything
//   if (!correctAnswer) return alert("Please enter something");
//   //--- When customer enter number NOT between 0-100
//   if (correctNumber > 100 || correctNumber < 0)
//     return alert("No no no baby, it should be between 0-100!");
//   //--- When customer enter number
//   if (correctNumber !== middleNumber) {
//     question = prompt(
//       `Is it greater than ${middleNumber}? (Y or N)`
//     ).toLowerCase();
//     //--- When customer answer YES and it us true
//     if (question === "y" && correctNumber > middleNumber) {
//       startNumber = middleNumber;
//       return numberFinder();
//       //--- When customer answer YES and it us false
//     } else if (question === "y" && correctNumber < middleNumber) {
//       return alert(liarMessage);
//     }
//     //--- When customer answer NO and it us true
//     if (question === "n" && correctNumber < middleNumber) {
//       endNumber = middleNumber;
//       return numberFinder();
//       //--- When customer answer NO and it us false
//     } else if (question === "n" && correctNumber > middleNumber) {
//       return alert(liarMessage);
//     }
//     //--- When customer number is the same as middleNumber
//   } else {
//     question = prompt(
//       `Correct number is ${middleNumber}? (Y or N)`
//     ).toLowerCase();
//     if (question === "y") {
//       return alert("Hooray! I figured out your number :3");
//     } else if (question === "n") {
//       return alert(liarMessage);
//     }
//   }
// }
//
// numberFinder();

// 2. ----------------------------------------
// const array = [2, 3, 4, 5, 6, 7, 8, 9];
// const array2 = [];

// function calc() {
//   for (let i = 0; i <= 10; i++) {
//     array2.push(array[0] * i);
//   }
//   console.table(array2);
// }

// calc();
