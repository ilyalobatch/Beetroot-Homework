// ----- I. Minimun

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// 1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// 2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

// ---------------------------------------------------------------------

// ----- II. Normal

// 1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// 2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

// ---------------------------------------------------------------------

// ----- III. Maximun

// 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// 2. Підрахунок суми всіх (не) придбаних продуктів.
// 3. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

// --------- ANSWERS ---------

// ----- I. Minimun

const shopItem = (title, quantity, isPurchased, price = 1) => ({
  title,
  quantity,
  isPurchased,
  price,

  get totalSum() {
    return this.price * this.quantity;
  },
});

const shopList = [
  shopItem("milk", 2, true, 2.5),
  shopItem("bread", 2, false, 1),
  shopItem("chocolate", 4, false, 2),
  shopItem("water", 3, true, 0.5),
  shopItem("apple", 6, true, 0.25),
];

// Function used in other Tasks
const findItem = (productName) => {
  return shopList.find(({ title }) => title === productName);
};

// TASK No. 1
const sortedListByPurchase = () => {
  return shopList.sort((item) => (item.isPurchased ? 1 : -1));
};

// TASK No. 2
const purchaseProduct = (productName) => {
  const targetItem = findItem(productName);

  if (!targetItem) {
    return `There is no such product as ${productName} in your list`;
  }

  targetItem.isPurchased = true;

  return `${productName} is purchased`;
};

// ----- II. Normal

// TASK No. 1
const deleteProduct = (productName) => {
  // const targetIndex = shopList.findIndex(({ title }) => title === productName);
  // if (targetIndex === -1) {
  //   return `No such product in the list`;
  // }

  // shopList.splice(targetIndex, 1);

  // return `${productName} was removed from list`;

  const correctedList = shopList.filter(({ title }) => title !== productName);

  return correctedList;
};

// TASK No. 2
const addProduct = (productName) => {
  const targetItem = findItem(productName);

  if (!targetItem) {
    shopList.push(shopItem(`${productName}`, 1, false));
    return `${productName} was added to your list`;
  }

  targetItem.quantity += 1;

  return `One more ${productName} is added to list`;
};

// ----- III. Maximum

// TASK No. 1
const totalListAmount = () => {
  return shopList.reduce((acc, cur) => acc + cur.totalSum, 0);
};

// TASK No. 2
const totalRemainingProductsAmount = () => {
  const nonPurchasedItems = shopList.filter((item) => !item.isPurchased);

  return nonPurchasedItems.reduce((acc, cur) => acc + cur.totalSum, 0);
};

// TASK No. 3
const sortedListBySum = () => {
  return shopList.sort((next, prev) => {
    return prev.totalSum - next.totalSum;
  });
};
