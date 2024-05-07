// MASALALAR

// 1-masala

// function getLevel2(n) {
//   let arr = [];
//   let k = 1;

//   for (let i = 1; i <= n; i++) {
//     arr.push((k *= 2));
//   }
//   return arr;
// }

// console.log(getLevel2(5));

// 2-masala
// let n = 5;
// let A = 2;
// let B = 3;

// function add(n, A, B) {
//   let arr = [];
//   arr.push(A, B);
//   for (let i = 2; i < n; i++) {
//     let sum = arr.reduce((acc, curVal) => {
//       return acc + curVal;
//     });
//     arr.push(sum);
//   }
//   return arr;
// }

// console.log(add(n, A, B));

// 3-masala

// function negative(n) {
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     arr.unshift(i);
//   }
//   return arr;
// }
// console.log(negative(9));

// 4-masala

// let sum = 0;

// function oddElements(odd) {
//   for (let i = 1; i < odd.length; i++) {
//     if (i % 2 == 1) {
//       sum++;
//       console.log(odd[i]);
//     }
//   }
//   return sum;
// }

// oddElements([4, 5, 7, 8, 6, 9]);
// console.log(sum + " ta");

// 5-masala
// let arr = [];
// let odd = []

// function oddElements(evenodd) {
//   for (let i = 0; i < evenodd.length; i++) {
//     if (evenodd[i] % 2 == 0) {
//       arr.push(evenodd[i]);
//     }
//     if (evenodd[i] % 2 == 1) {
//       odd.unshift(evenodd[i]);
//     }
//   }
//   return arr.concat(odd)

// }

// console.log(oddElements([4, 5, 7, 8, 6, 9]));

// 6-masala

// function evenIndex(even) {
//   for (let i = 0; i < even.length; i += 2) {
//     console.log(even[i]);
//   }
// }

// evenIndex([4, 5, 7, 8, 6, 9]);

// 7-masala

// function evenIndex(even) {
//   for (let i = even.length - 1; i > 0; i -= 2) {
//     console.log(even[i]);
//   }
// }

// evenIndex([4, 5, 7, 8, 6, 9]);

// 8-masala
// let arr = [];

// function evenIndex(even) {
//   for (let i = 0; i < even.length; i += 2) {
//     arr.push(even[i]);
//   }
//   for (let i = even.length - 1; i > 0; i -= 2) {
//     arr.push(even[i]);
//   }
//   return arr;
// }

// console.log(evenIndex([4, 5, 7, 8, 6, 9]));

// 9-masala

// let arr = [];
// let odd = [];

// function evenIndex(even) {
//   for (let i =1 ; i < even.length; i += 2) {
//     odd.push(even[i]);
//   }
//   for (let i = 0; i < even.length; i += 2) {
//     arr.unshift(even[i]);
//   }
//   return odd.concat(arr);
// }

// console.log(evenIndex([4, 5, 7, 8, 6, 9]));

// 10-masala

// let newArr = [];

// function dobleStep(arr) {
//   for (let i = 0; i < arr.length / 2; i += 2) {
//     newArr.push(
//       arr[i],
//       arr[i + 1],
//       arr[arr.length - 1 - i],
//       arr[arr.length - 2 - i]
//     );
//   }

//   return newArr;
// }

// console.log(dobleStep([4, 5, 7, 8, 6, 9]));

// 11-masala
// let sum = 0;
// function rangeOutSum(arr, K, L) {
//   arr.splice(K, L - K);
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }

// rangeOutSum([4, 5, 7, 8, 6, 9, 3, 6, 7], 2, 5);

// 12-masala
// 1-usul
// let arr = [10, false, "", "Abdulaziz", null];
// let truthy = arr.filter((item) => Boolean(item) == true);
// let falsy = arr.filter((item) => Boolean(item) == false);
// console.log(truthy, falsy)

// 2-usul
// let truthy = []
// let falsy = []

// function newMethod(arr) {
//  truthy.push(arr.filter((item) => Boolean(item) == true))
//  falsy.push(arr.filter((item) => Boolean(item) == false))
//  console.log(truthy, falsy)
// }

// newMethod([10, false, "", "Abdulaziz", null])

// 13-masala

// const getOddMin = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return Math.min(...newArr);
// };

// console.log(getOddMin([9, 8, 3, 4, 5, 6, 7, 8, 9]));

// 14-masala

// const getOddMin = (arr) => {
//   let newArr = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     newArr.push(arr[i]);
//   }
//   return Math.max(...newArr);
// };

// console.log(getOddMin([9, 8, 3, 4, 5, 6, 7, 9, 10]));

// 15-masala

// function findLastLocalMaxIndex(array) {
//   let lastIndex = -1;
//   for (let i = 1; i < array.length - 1; i++) {
//     if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
//       lastIndex = i;
//     }
//   }
//   return lastIndex;
// }

// let numbers = [3, 5, 2, 8, 6, 10, 7];

// let lastIndex = findLastLocalMaxIndex(numbers);
// console.log("Oxirgi lokal maksimum element indeksi: " + lastIndex + " ga teng");
