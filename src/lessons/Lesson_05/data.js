// Повторение метода map()
// Пример: создать новый массив на основании numbers, где каждый элемент нового массива будет умножен на 2
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((value) => {
  return value * 2;
});

console.log(newNumbers);

// Пример с forEach

// const numbers1 = [1, 2, 3, 4, 5];
// let newNumbers1 = [];

//  numbers1.forEach((value) => {
//   newNumbers1.push(value * 2);
// });

// console.log(newNumbers1);

// Задача: Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна". Создайте еще один массив с возрастами: 18, 27, 74, 34; Создайте и заполните при помощи метода map новый массив новыми элементами по образу: "Семен 18 лет/годов"

const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];

const namesWithAge = names.map((name, index) => {
  return `${name} ${ages[index]} лет/годов`;
});

// Spread

const order = ["Burger", "Fries"];
const newOrder = [...order, "Cola"];

console.log(newOrder);
