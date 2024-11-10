"use strict";
/* -----------1------------ */
/* 1 */
// let newValue: string | null = prompt("Kiriting"); 
// let list: string[] = [];
// function collectList(value: string | null): void {
//     if (value) {
//         list.push(value);
//     }
// }
// collectList(newValue);
// console.log(list);
/* 2 */
// let numberList:number[] = [21,44,22,77,33,777,4]
// function findMaxNumber(arr:number[]):number{
//     let maxNum:number = arr[0]
//     for(let num of arr){
//         if(num >= maxNum){
//             maxNum = num
//         }
//     }
//     return maxNum
// }
//  const result:number = findMaxNumber(numberList)
//  console.log(result)
/* 3 */
// let value: string | null = prompt("soz kiriting");
// let list: string[] = ["what", "spell", "grand"];
// function findValue(newValue: string | null, arr: string[]): void {
//     let count: number = 0;
//     arr.forEach((item: string) => {
//         if (item === newValue) {
//             count++;
//         }
//     });
//     console.log(count > 0 ? true : false);
// }
// findValue(value, list);
/* 4 */
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = EvenNumbers(numbers);
// function EvenNumbers(arr: number[]): number[] {
//     return arr.filter((num) => num % 2 === 0);
// }
// console.log(evenNumbers); 
/* 5 */
// let numbers: number[] = [5, 10, 17, 45, 25, 37, 35,];
// let sum = getAll(numbers);
// function getAll(arr: number[]): number {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sum); 
/* 6 */
// type UsersType = {
//     id: number
//     name: string
//     email: string
//     address: string
//     password: string | number
// }
// type ResultType = {
//     name: string
//     email: string
// }
// let userList: Array<UsersType> = [
//     {
//         id: 1,
//         name: "Botir",
//         address: "Tashkent",
//         email: "botir@gmail.com",
//         password: "botir123"
//     },
//     {
//         id: 2,
//         name: "Jasur",
//         address: "Samarqand",
//         email: "jasur@gmail.com",
//         password: "jasur123"
//     },
//     {
//         id: 3,
//         name: "Dilshod",
//         address: "Tashkent",
//         email: "dilshod@gmail.com",
//         password: "dilshod123"
//     }
// ]
// function fn(arr: Array<UsersType>): Array<ResultType> {
//     let resultList: Array<ResultType> = []
//     arr.forEach((item: UsersType) => {
//         const data: ResultType = { name: item.name, email: item.email }
//         resultList.push(data)
//     })
//     return resultList
// }
// const data: Array<ResultType> = fn(userList)
// console.log(data)
/* 7 */
// type UsersType = {
//     id: number
//     name: string
//     email: string
//     address: string
//     password: string | number
// }
// let userList: Array<UsersType> = [
//     { 
//         id: 1,    
//         name: "Botir", 
//         address: "Tashkent", 
//         email: "botir@gmail.com", 
//         password: "botir123" },
//     { 
//         id: 2, 
//         name: "Jasur", 
//         address: "Samarqand", 
//         email: "jasur@gmail.com", 
//         password: "jasur123" },
//     { 
//         id: 3, 
//         name: "Dilshod", 
//         address: "Tashkent", 
//         email: "dilshod@gmail.com", 
//         password: "dilshod123" },
//     { 
//         id: 4, 
//         name: "Aziz", 
//         address: "Namangan", 
//         email: "aziz@gmail.com", 
//         password: "aziz123" },
//     { 
//         id: 5, 
//         name: "Ziyod", 
//         address: "Bukhara", 
//         email: "ziyod@gmail.com", 
//         password: "ziyod123" },
//     { 
//         id: 6, 
//         name: "Ali", 
//         address: "Kokand", 
//         email: "ali@gmail.com", 
//         password: "ali123" },
//     { 
//         id: 7, 
//         name: "Karim", 
//         address: "Andijan", 
//         email: "karim@gmail.com", 
//         password: "karim123" },
//     { 
//         id: 8, 
//         name: "Yusuf", 
//         address: "Khiva", 
//         email: "yusuf@gmail.com", 
//         password: "yusuf123" },
//     { 
//         id: 9, 
//         name: "Bobur", 
//         address: "Shakhrisabz", 
//         email: "bobur@gmail.com", 
//         password: "bobur123" },
//     { 
//         id: 10, 
//         name: "Sherzod", 
//         address: "Fergana", 
//         email: "sherzod@gmail.com", 
//         password: "sherzod123" }
// ]
// function getUserAddressById(id: number, arr: Array<UsersType>): string | undefined {
//     const user = arr.find((item) => item.id === id);
//     return user ? user.address : undefined;
// }
// const address = getUserAddressById(3, userList);
// console.log(address); 
/* 8 */
// type UsersType = {
//     id: number;
//     name: string;
//     email: string;
//     address: string;
//     password: string | number;
// };
// let userList: Array<UsersType> = [
//     { 
//         id: 1,
//         name: "Botir", 
//         address: "Tashkent", 
//         email: "botir@gmail.com", 
//         password: "botir123" },
//     { 
//         id: 2, 
//         name: "Jasur", 
//         address: "Samarqand", 
//         email: "jasur@gmail.com", 
//         password: "jasur123" },
//     { 
//         id: 3, 
//         name: "Dilshod", 
//         address: "Tashkent", 
//         email: "dilshod@gmail.com", 
//         password: "dilshod123" },
//     { 
//         id: 4, 
//         name: "Aziz", 
//         address: "Namangan", 
//         email: "aziz@gmail.com", 
//         password: "aziz123" },
//     { 
//         id: 5, 
//         name: "Ziyod", 
//         address: "Bukhara", 
//         email: "ziyod@gmail.com", 
//         password: "ziyod123" }
// ];
// function getNames(arr: Array<UsersType>): string[] {
//     return arr.map((item) => item.name);
// }
// let names = getNames(userList);
// console.log(names);
/* 9 */
// let array1 = [3, 5, 7, 2, 9];
// let array2 = [10, 4, 6, 8, 12];
// function findMaxArr(arr1: number[], arr2: number[]): string[] {
//     let max1 = -Infinity;
//     let max2 = -Infinity;
//     for (let num of arr1) {
//         if (num > max1) {
//             max1 = num;
//         }
//     }
//     for (let num of arr2) {
//         if (num > max2) {
//             max2 = num;
//         }
//     }
//     return [max1.toString(), max2.toString()];
// }
// let largestNumbersAsString = findMaxArr(array1, array2);
// console.log(largestNumbersAsString);
/* 10 */
// let numbers = [3, -4, 7, -2, 8, -5, 10, 1, -9, 6];
// let result = separateEvenAndOdd(numbers);
// function separateEvenAndOdd(arr: number[]): { even: number[], odd: number[] } {
//     let even: number[] = [];
//     let odd: number[] = [];
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             even.push(num);
//         } else {
//             odd.push(num);
//         }
//     }
//     return { even, odd };
// }
// console.log("Even numbers:", result.even);
// console.log("Odd numbers:", result.odd);
/* ------------------2------------- */
/* 1 */
// function reverseNumber(num: number): number {
//     if (num < 100 || num > 999) {
//       throw new Error("Son 3 xonali bo'lishi kerak");
//     }
//     let reversedNum = Number(num.toString().split('').reverse().join(''));
//     return reversedNum;
//   }
//   let reversed = reverseNumber(123);
//   console.log(reversed); 
/* 2 */
// function factorial(n: number): number {
//     if (n < 0) {
//       throw new Error("Son manfiy bo'la olmaydi");
//     }
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
//   let input = prompt("Son kiriting: ");
//   if (input !== null) {
//     let num = parseInt(input, 10);
//     if (!isNaN(num)) {
//       console.log(`Sonning faktoriali: ${factorial(num)}`);
//     } 
//     else {
//       console.log("Iltimos, to'g'ri son kiriting.");
//     }
//   }
/* 5 */
// let user = { name: "Shaxzod" };
// let age = { age: 25 };
// let userJob = { job: "Developer" };
// let combinedUser = { ...user, ...age, ...userJob };
// console.log(combinedUser);
/* 6 */
// let salaries = {
//     aXodim: 150,
//     bXodim: 180,
//     cXodim: 210
//   };
//   function totalSalaries(salaries: { [key: string]: number }): number {
//     return Object.keys(salaries).reduce((sum, key) => sum + salaries[key], 0);
//   }
//   let total = totalSalaries(salaries);
//   console.log(total); 
/* 7 */
// let numbers = [10, 20, 35, 50, 5];
// function findMax(arr: number[]): number {
//   return Math.max(...arr);
// }
// let maxNumber = findMax(numbers);
// console.log(maxNumber); 
