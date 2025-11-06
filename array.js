// // 11/4 Sumiya bagsh Array bodlog

// #1  ["🥩", "🌾", "🥔", "🥕", "🥬"] array iin length iig ol.

// let stringArray = ["🥩", "🌾", "🥔", "🥕", "🥬"];
// console.log(stringArray.length);

// #2  10 urttai number array uusge.

// #3  5 urttai string array uusge.

// let stringArray = ["text1", "text2", "text3", "text4", "text5"];

// console.log("Array-ийн урт:", stringArray.length);

// #4  Массивын эхний ба сүүлийн элементийг харуул. [1,2,3,4,5,6,7]

// #5  Тодорхой элемент массив дотор байгаа эсэхийг шалга. (string array, ['ford', "toyota", "mercedes", " chevrolet ", "tesla", "byd"])

// for (let i = 0; i < stringArray.length; i++) {
//   console.log(stringArray[i]);
//   if (stringArray[i] === text) {
//     console.log("YES", text);
//     break;
//   } else {
//     console.log("NO");
//   }
// }

// #6  Массив дахь хамгийн их тоог ол. (number array , [1,2,3,4,5,6,7])

// let num = [1, 2, 3, 4, 5, 6, 7];
// let max = num[0];

// for (let i = 0; (i = num.length); i++) {
//   if (num[i] > max) {
//     max = num[i];
//   }
// }

// #7  Массив дахь хамгийн бага тоог ол. (number array, [1,2,3,4,5,6,7])

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log("Хамгийн бага тоо:", min);

// #8  Зөвхөн тэгш тоонуудыг шүүн гарга. (number array, [1,2,3,4,5,6,7])

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// #9  Тодорхой тоо массив дотор хэдэн удаа орсныг тоол. (number array, [ 2,3 , 1,6,7,10,11,2] , 2 )

// #10  Бүх тоонуудыг 2 дахин үржүүлсэн шинэ массив үүсгэ. (number array, [1,2,3,4,5,6,7])

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let newArray = [];

// for (let i=0;i<numbers.length; i++)
// {
//   newArray.
// }
// #11  Бүх үгсийг том үсгээр (uppercase) болго. ([a, b, c, d, e ,f])

// #12  Бүх үгсийг жижиг үсгээр (lowercase) болго. ([A,B,C,D,E,T,Y,I,O,F])

// 11/5  Array Amgaa bagsh bodlog

// #1“a” үсэг агуулсан үгсийн тоо ["apple", "pear", "grape", "kiwi"]

// let fruits = ["apple", "pear", "grape", "kiwi"];
// let check = 0;

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].includes("a")) {
//     check++;
//   }
// }

// console.log(check);

// #2 Эхний үгтэй ижил урттай бүх үгийг буцаа. ["hi", "to", "see", "me", "go"] -> ["hi", "to", "me", "go"]

// let words = ["hi", "to", "see", "me", "go"];
// let check = words[0].length;
// let sum = [];
// let j = 0;

// for (let i = 1; i < words.length; i++) {
//   if (words[i].length === check) {
//     sum[j] = words[i];
//     j++;
//   }
// }

// console.log(sum);

// #3 Массив дахь хамгийн урт үгийг ол. ["apple", "banana", "kiwi"]

// let words = ["apple", "banana", "kiwi"];
// let longest = words[0];

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > longest.length) {
//     longest = words[i];
//   }
// }

// console.log(longest);

// #4 Массив дотор байгаа "" буюу хоосон string-ийг хас. ["hi", "", "world", "", "js"]

// let words = ["hi", "", "world", "", "js"];
// let show = [];
// let index = 0;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] !== "") {
//     show[index] = words[i];
//     index++;
//   }
// }

// console.log(show);

// #5 Шинэ массив үүсгээд элементийг урвуу дарааллаар байрлуул. [1, 2, 3, 4]

const text = [1, 2, 3, 4];
let show = [];

for (let i = 0; i < text.length; i++) {
  show[i] = text[text.length - 1 - i];
}
console.log(show);

// #6 Array-ийн элементүүдийг урвуулан бичих (let nums= [1,2,5,6,9,120])

// const nums = [1, 2, 5, 6, 9, 120];
// let show = [];

// for (let i = 0; i < nums.length; i++) {
//   show[i] = nums[nums.length - 1 - i];
// }

// console.log(show);

// #7 Сөрөг тоонуудыг 0 болгон солино уу. (let nums = [1,2,5,6,9,120,-2,-3])

const nums = [1, 2, 5, 6, 9, 120, -2, -3];

// #8 Тодорхой элементийн index-ийг ол. (let nums = [1,2,5,6,9,120,-2,-3], 5)
// #9 Хоёр дахь хамгийн их тоог ол.
// #10 Үг бүрийн эхний 3 үсгийг агуулсан шинэ массив үүсгэ.
// #11 Массив дахь бүх үгний нийт тэмдэгтийн тоог тоол.
