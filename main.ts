// tsc --init tsconfig.json
//  tsc main.ts
// npm i -g ts-node
// npm i -g ts-node

//TypeScript это строго типизированный язык программирования, фактически это альтернативный синтаксис JS или обертка над ним, а это значит что в основе по прежнему лежит обычный JS. Для каждой переменной, константы, для каждого аргумента функции и результата функции, для каждого класса, свойства , метода можно задать тип. Если задать типизацию для всех элементов, еще на стадии написания кода, можно легко оследить где конкретно произошла ошибка

// var thisBoolean: boolean = true;
// thisBoolean = false;

// let num: void;
//  Данный тип предназначен для определения отсутсвующих типов. Как мы видем в функции нету return, значит она не возвращает какое-либо значение, следовательно результат выполнения функции это отсутвуюший тип, который мы указали.
// function abc(a, b, c) {
//   a + b + c;
// }
// abc(1, 2, 3);
// any
// var num2;
// ! Типизация объектов

// type TypeUser = {
//   name: string;
//   age: number;
// };
// let user: TypeUser;
// var user: TypeUser = {
//   name: "Max",
//   age: 23,
// };

// type TypeAddress = {
//   city: string;
//   country: string;
// };
// const address: TypeAddress = {
//   city: "Almata",
//   country: "Kazakhstan",
// };

// let common = {
//   ...user,
//   ...address,
// };

// let common: TypeUser & TypeAddress;
// common = {
//   ...address,
//   ...user,
// };
// ! Типизация массивов

// let arr: string[];
// let arr2: Array<string>;
// arr = ["3222"];
// Массив который можно только прочитать, но нельзя изменить
// const arr2: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// arr2[0];
// кортежи нужны тогда, когада мы четко знаем, сколько элементов в массиве у нас будет лежать
// type TypeArr = [number, string, null];
// const arr3: TypeArr = [1, "2", null];

// type TypeGetNameReturn = {
//   name: string;
// };

// function getName(name: string): TypeGetNameReturn {
//   return { name };
// }
// типизация стрелочной функции
// const getName2 = (name: string): TypeGetNameReturn => {
//   return { name };
// };

// type TypeGetNameFunction = (name: string) => TypeGetNameReturn;
// const getName3: TypeGetNameFunction = (name) => {
//   return { name };
// };

// console.log("sss");

// todo

// type Animal = {
//   name: string;
//   makeSound: () => void;
// };

// function createAnimal(name: string, sound: string): Animal {
//   return {
//     name,
//     makeSound() {
//       console.log(sound);
//     },
//   };
// }
// const dog: Animal = createAnimal("Лайка", "Woof!");
// dog.makeSound();

// TypeScript
//Задание 1. Типизированный массив:
//Создайте массив, содержащий несколько имен, и объявите тип для этого массива. Затем напишите функцию, которая принимает этот массив и выводит каждое имя в консоль.

// Задание 2.Типизированный объект:
// Создайте объект, представляющий информацию о пользователе (имя, возраст, email и т. д.), и объявите тип для этого объекта. Затем напишите функцию, которая принимает этот объект и выводит его данные в консоль.

// type TypeArr = [number, string, null];
// const arr3: TypeArr = [1, "2", null];

// type TypeArr = [string, string, string];
// const arr: TypeArr = ["John", "Alex", "Max"];

// function Arrr(name) {
//   for (let i of name) {
//     console.log(i);
//   }
// }
// Arrr(arr);

// let string = "aba";
// type TypePalindromReturn =  (str: boolean)
// type TypeFunctionPalindrom = (str: string) => TypePalindromReturn;

// const isPalendrom2 = (TypeFunctionPalindrom) = (str) => {
//   let str1 = string.split("").join("");
//   let str2 = str1.split("").reverse().join("");
//   return str1.includes(str2);
// };
// console.log(isPalendrom2(string));

// let arr: number[];

// type TypeNumberInfo = {
//   numMin: number;
//   numMax: number;
// };
// function findMinMAx(arr: number[]): TypeNumberInfo {
//   let numMin = 0;
//   let numMax = 0;
//   // let numMin = Math.min(...arr);
//   // let numMax = Math.max(...arr);

//   let arr1 = arr.reverse();
//   arr.sort((a, b) => b - a);

//   numMin = arr[0];
//   numMax = arr1[0];

//   // let obj = {
//   //   numMin: numMin,
//   //   numMax: numMax,
//   // };
//   // return obj;
//   return { numMin, numMax };
// }
// console.log(findMinMAx([1, 2, 3, 4, 5]));
// type Numbers = {
//   sum: number;
//   average: number;
// };

// type FunctionNum = (arr: number[]) => Numbers;
// const findMiddleSumNum: FunctionNum = (arr) => {
//   let sum = arr.reduce((acc, current) => acc + current, 0);
//   let average = sum / arr.length;
//   return { sum, average };
// };
// console.log(findMiddleSumNum([1, 2, 3, 4, 5]));

// 1) Создайте любые переменные с такими типами как number, string и boolean;
// 2) Создайте такие функции как:
// - calculateArea которая в качестве аргумента будет принимать радиус. Вот
// формула:

// Функция должна возвращать число.
// - calculateDensity - которая должна вычислять плотность объекта (масса/объем).
// Принимать функция должна массу и объем в качестве аргументов и возвращать
// результат как число.

// 3) Создайте тип Product использую type со следующими свойствами:
// id(number), title(string), description(string), price(number), colors(string[])
// Далле создайте массив Product[], с несколькими продуктами.

// !РЕШЕНИЕ ЗДЕСЬ
// !=================================================================
let number1: number = 15;
let string1: string = "";
let boolean1: boolean = true;

type infoReturn = {
  radius: number;
  area: number;
};
type FunctionArea = (radius: number) => infoReturn;

const calculateArea: FunctionArea = (radius) => {
  let area = Math.PI * Math.pow(radius, 2);
  return { radius, area };
};
console.log(calculateArea(23));

type numReturn = number;
type FunctionNum = (weight: number, volume: number) => numReturn;

const calculateDensity: FunctionNum = (weight, volume) => {
  let density = weight / volume;

  return density;
};
console.log(calculateDensity(23, 21));

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};

const product: Product[] = [
  {
    id: 1,
    title: "Aplle",
    description: "Apple is Apple",
    price: 50,
    colors: ["red", "green"],
  },
  {
    id: 2,
    title: "grape",
    description: "grape is grape",
    price: 100,
    colors: ["green", "black"],
  },
  {
    id: 3,
    title: "banana",
    description: "banana is banana",
    price: 213,
    colors: ["yellow"],
  },
];
console.log(product);
