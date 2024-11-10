"use strict";
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
let value = prompt("soz kiriting");
let list = ["what", "spell", "grand"];
function findValue(newValue, arr) {
    let count = 0;
    arr.forEach((item) => {
        if (item === newValue) {
            count++;
        }
    });
    console.log(count > 0 ? true : false);
}
findValue(value, list);
/* 4 */
let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findNumber() {
}
