const arr1 = ["Cat", "Rat", "Cat", "Rat"];
const arr2 = ["Fat", "Bitch", "Cat", "Rat"];
const arr3 = ["Black", "Hat", "Cat", "Rat", "monkey"];

const joinedArray = [...arr1, ...arr2, ...arr3];

console.log(joinedArray);
//  Using Concat
// console.log(arr1.concat(arr2, arr3));

// Remove Duplicate from Array

const myArray = [
  "Cat",
  "Rat",
  "Cat",
  "Fat",
  "Bitch",
  "Cat",
  "Black",
  "Hat",
  "Cat",
];

const uniqueArray = [...new Set(myArray)];

console.log("Checking unique array==>", uniqueArray);
