// const aaa = "aaa";
// const bbb = 123;

// const hours = 2;
// console.log(hours * 60);

// const hours = 12;
// console.log(hours * 60);

// const hours = 2.5;
// console.log(hours * 60);

// const number = 2;
// console.log(2 % 2 === 0 && "even");
// console.log(2 % 2 === 1 && "odd");

// const tegsh = 7;
// console.log(7 % 2 === 0 && "even");
// console.log(7 % 2 === 1 && "odd");

// const sondgoi = 1;
// console.log(1 % 2 === 0 && "even");
// console.log(1 % 2 === 1 && "odd");

// let a = 1,
//   b = 8,
//   c = 3;

// console.log(a < b && b < c && c);
// console.log(b < c && c < a && a);
// console.log(c < a && a < b && b);
// console.log(c < b && b < a && a);

// let q = 9;
// w = 4;
// e = 3;
// console.log(q <= w && <= e && e);
// console.log(w >= q && q >= q && q);

// 10/28

// #1

// const hours = 38;
// const honog = Math.floor(hours / 24);
// console.log(honog);
// const tsag = hours - honog * 24;
// console.log(tsag);

// ＃2

// const days = 4;
// console.log(days * 24);
// const hours = 40;
// const total = hours + days * 24;
// console.log(total);

// #3

// const sar = 106;
// const jil = Math.floor(sar / 12);
// const uldsensar = sar % 12;
// console.log(jil, "jil", uldsensar, "sar");

// #4

// const jil = 90;
// const sar = 98;
// const jileessar = Math.floor(jil / 12);
// console.log(jileessar);
// const uldsensar = jil % 12;
// console.log(uldsensar);
// console.log(jileessar, "jil", uldsensar, "sar");

// // #5
// const num1 = 9;
// const num2 = 3;
// const num3 = 2;
// const num4 = 8;

// let min = num1;

// if (min > num2) {
//   min = num2;
// }
// if (min > num3) {
//   min = num3;
// }
// if (min > num4) {
//   min = num4;
// }
// console.log(min);

// // #6

// const num1 = 2;
// const num2 = 9;
// const num3 = 4;
// const num4 = 3;

// let max = 1;

// if (num1 < 5) {
//   max = max * num1;
// }

// if (num2 < 5) {
//   max = max * num2;
// }
// if (num3 < 5) {
//   max = max * num3;
// }
// if (num4 < 5) {
//   max = max * num4;
// }
// console.log(max);

// //  #7

// const num1 = 11;
// const num2 = 9;
// const num3 = 4;
// const num4 = 3;

// let total = 1;

// if (num1 > 5) {
//   total = total * num1;
// }
// if (num2 > 5) {
//   total = total * num2;
// }
// if (num3 > 5) {
//   total = total * num3;
// }
// if (num4 > 5) {
//   total = total * num4;
// }

// console.log(total);

//#1-1. 2 тоог оруулж ихийг нь хэвлэх

// const num1 = 20;
// const num2 = 40;

// if (num1 > num2) {
//   console.log(num1 + "Ih too");
// } else {
//   console.log(num2 + "Ih too");
// }

// #1-2 Тоог тэгш/сондгой шалгах

// const too = 11;

// if (too / 2 === 0) {
//   console.log("Тэгш тоо");
// } else {
//   console.log("Сондгой тоо");
// }

// #1-3 3 ширхэг тоон дундах хамгийн их/хамгийн бага

// const a = 3;
// const b = 8;
// const c = 5;

// if (a > b && a > c) {
//   console.log("Хамгийн их тоо: " + a);
// } else if (b > a && b > c) {
//   console.log("Хамгийн их тоо: " + b);
// } else {
//   console.log("Хамгийн их тоо: " + c);
// }

// // #1-4 Стрингийн уртыг хэвлэх

// const text = "sodnomariunzul";
// console.log(text.length);

// #1-5  Стринг эхний болон сүүлчийн тэмдгийг нийлүүлэх

// const text = "sodnomariunzul";
// const first = text[0];
// const last = text[text.length - 1];

// console.log(first + last);

// #1-6 Стрингийг том үсэг болгож хувиргах

// const text = "sodnomariunzul";
// console.log(text.toUpperCase());

// #1-7 Стринг дотор тодорхой тэмдэгт байгаа эсэхийг шалгах. Жишээ: "banana", "n" → true

// const text = "pineapple";
// const check = "p";

// if (text.includes(check)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// #1-8 Тоог 3-аар болон 5-аар хуваагддаг эсэхийг шалгах. 3-т хуваагдал Fizz,
// 5-т хуваагдал Buzz, хоюуланд нь хуваагддаг бол FizzBuzz гэх хэвлэ

// const a = 1;
// const b = 2;
// const c = 3;
// const d = 4;
// const e = 5;
// const f = 6;
// const g = 7;
// const h = 8;

// let num = 15;

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (num % 3 === 0) {
//   console.log("Fizz");
// } else if (num % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log(num);
// }

// #1-9 Хоёр string-ийг нэгтгэх a = Hello b = World

// const name1 = "Hello";
// const name2 = "World";

// console.log(name1, name2);

// // #1-10 2 тооны дундаж

// const a = 1;
// const b = 2;
// const c = 3;
// const d = 4;
// const e = 5;
// const f = 6;
// const g = 7;
// const h = 8;
// const i = 9;
// const j = 10;

// const dundaj = (a + b + c + d + e + f + g + h + i + j) / 2;

// console.log("Dundaj n", dundaj);

// #1-11 Тоо эерэг эсвэл сөрөг эсэхийг шалгах - "эерэг", "сөрөг" эсвэл "тэг

// const a = 1;
// const b = -2;
// const c = 3;
// const d = 4;
// const e = 5;
// const f = 6;
// const g = 7;
// const h = 8;
// const i = 9;
// const j = 10;
// const k = 11;

// const num = b;

// if (num > 0) {
//   console.log("эерэг");
// } else if (num < 0) {
//   console.log("сөрөг");
// } else {
//   console.log("тэг");
// }

// #1-12 Тоог 10-аас их эсэхийг шалгах

// const a = 1;
// const b = 2;
// const c = 3;
// const d = 4;
// const e = 5;
// const f = 6;
// const g = 7;
// const h = 8;
// const i = 9;
// const j = 10;
// const k = 11;
// const l = 12;

// const numb = d;
// if (numb > 10) {
//   console.log("10-aas ih too");
// } else {
//   console.log("10-aas baga");
// }

// #1-13 Хоёр тоо тэнцүү эсэхийг шалгах - "тэнцүү" эсвэл "ялгаатай"

// const a = 1;
// const b = 2;
// const c = 3;
// const d = 4;
// const e = 5;
// const f = 6;
// const g = 7;
// const h = 8;
// const i = 9;
// const j = 10;
// const k = 11;
// const l = 12;
// const m = 13;

// const numb1 = f;
// const numb2 = f;

// if (numb1 === numb2) {
//   console.log("tentsuu");
// } else {
//   console.log("yalgaataia");
// }

// #1-14 Тоог 100-аас их, 0-аас бага эсэхийг шалгах

// const numb = 101;

// if (numb > 100) {
//   console.log("100aas ih");
// } else if (numb < 0) {
//   console.log("0aas baga");
// } else {
//   console.log("o ba 100-iin horoond baina");
// }

// // #1-15 Тоог 10%, 20% эсвэл 30% өсгөх

// const num = 55;

// const num10 = num + num * 0.1;
// const num20 = num + num * 0.2;
// const num30 = num + num * 0.3;
// console.log("10%", num10);
// console.log("20%", num20);
// console.log("30%", num30);

// #1-16 Тоог 100-аас хэтэрвэл 100 болгож хэвлэх

// const num = 102;

// if (num > 100) {
//   console.log(100);
// } else {
//   console.log(num);
// }

// #1-17 Хоёр тэмдэгт ижил эсэхийг шалгах === ашиглах

// const a = "@";
// const b = "!";

// if (a === b) {
//   console.log("Ijil temdegt");
// } else {
//   console.log("Yalgatai temdegt");
// }

// #1-18 Хоёр оронтой тооны цифрүүдийг сольж урвуулах

// const num = 87;

// const ones = num % 10;
// const tens = Math.floor(num / 10);

// const reversed = ones * 10 + tens;

// console.log("Urvuu too", reversed);

#1-19 Тоо сөрөг бол эерэг болгож, эерэг бол хэвээр үлдээх

// const num = -30;

// if (num < 0) {
//   console.log(-num);
// } else {
//   console.log(num);
// }

#1-20 1970.01.01 -ээс яг одоог хүртэл хэдэн он, сар, өдөр, цаг, минут, секунд, дооль, милисекунд өнгөрсөнг ол

// const now = new Date();
// const start = new Date(1970, 0, 1);

// const diff = now - start;

// const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
// const days = Math.floor(diff / (1000 * 60 * 60 * 24));
// const hours = Math.floor(diff / (1000 * 60 * 60));
// const minutes = Math.floor(diff / (1000 * 60));
// const seconds = Math.floor(diff / 1000);
// const milliseconds = diff;

// console.log("jil:", years);
// console.log("udur:", days);
// console.log("tsag:", hours);
// console.log("minute:", minutes);
// console.log("sec:", seconds);
// console.log("milsec:", milliseconds);

#1-21 Дугаарын хязгаарлалтаар машин чинь хэд хэд дэх өдөр явахгүйг хэвлэнэ

// const carnumber = 2690;

// const lastdigit = carnumber % 10;

// if (lastdigit === 1 || lastdigit === 2) {
//   console.log("Davaa garig");
// } else if (lastdigit === 3 || lastdigit === 4) {
//   console.log("Myagmar garig");
// } else if (lastdigit === 5 || lastdigit === 6) {
//   console.log("Lhavag garig");
// } else if (lastdigit === 7 || lastdigit === 8) {
//   console.log("Purev garig");
// } else if (lastdigit === 9 || lastdigit === 0) {
//   console.log("Baasan garaig");
// }

// 10/29   Sumiya Bagsh bodlogo part1

// #1 Өгөгдсөн 3 тооны ихийг ол (if ашиглана.)

// const num1 = 300;
// const num2 = 22;
// const num3 = 55;

// if (num1 > num2 && num1 > num3) {
//   console.log(num1 + "hamgiiin ih too");
// } else if (num2 > num1 && num2 > num3) {
//   console.log(num2 + "hamgiiin ih too");
// } else {
//   console.log(num3 + "hamgiiin ih too");
// }

// #2 Өгөгдсөн 3 тооны багыг ол. (if ашиглана.)

// const num1 = 7;
// const num2 = 22;
// const num3 = 55;

// if (num1 < num2 && num1 < num3) {
//   console.log(num1 + "hamgiiin baga too");
// } else if (num2 < num1 && num2 < num3) {
//   console.log(num2 + "hamgiiin baga too");
// } else {
//   console.log(num3 + "hamgiiin baga too");
// }

// #3 Дурын дүн өгөгдөхөд үнэлгээг нь хэвлэж харуул. (Example: 100 оноо -> A үнэлгээ гэх мэт)

// const numb = 40;

// if (numb >= 95) {
//   console.log("A unelgee");
// } else if (numb >= 75) {
//   console.log("C unelgee");
// } else if (numb >= 50) {
//   console.log("D unelgee");
// } else {
//   console.log("F unelgee");
// }

// #4 Өгөгдсөн 2 оронтой тооны цифрүүдийн үржвэрийг ол. (Example: 23, Result: 6)

// const num = 66;

// const ones = num / 10;
// const tens = Math.floor(num / 10);

// const total = ones * tens;
// console.log("urjver", total);

// #5 Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол. (Example: 125, Result: 8)

// const num = 456;

// const ones = num % 10;
// const tens = Math.floor((num % 100) / 10);
// const hunds = Math.floor(num / 100);

// const total = ones + tens + hunds;
// console.log("Nilber", total);

// #6 Өгөгдсөн жил, сарыг сард шилжүүл. (Example: 2 7. Result:31)

// const jil = 6;
// const sar = Math.floor(jil * 12);

// console.log("sar", sar);

// #7 Өгөгдсөн 4 тооны 50-аас их тоонуудын нийлбэрийг ол. (Example: 55 15 66 89. Result:210)

// const num1 = 104;
// const num2 = 45;
// const num3 = 59;
// const num4 = 12;

// let sum = 0;

// if (num1 > 50) {
//   sum = sum + num1;
// }
// if (num2 > 50) {
//   sum = sum + num2;
// }
// if (num3 > 50) {
//   sum = sum + num3;
// }
// if (num4 > 50) {
//   sum = sum + num4;
// }
// console.log("50-aas ih tooon nilber ", sum);

// #8 Өгөгдсөн 3 тоон дахь тэгш тоонуудын нийлбэрийг ол. (Example: 2, 6, 7. Result: 8 )

// const num1 = 10;
// const num2 = 9;
// const num3 = 6;
// const num4 = 7;

// let sum = 0;

// if (num1 % 2 === 0) {
//   sum = sum + num1;
// }
// if (num2 % 2 === 0) {
//   sum = sum + num2;
// }
// if (num3 % 2 === 0) {
//   sum = sum + num3;
// }
// if (num4 % 2 === 0) {
//   sum = sum + num4;
// }

// console.log("tegsh tooon nilber", sum);

// #9 Өгөгдсөн 3 тоон дахь сондгой тоонуудын үржвэрийг ол. (Example: 1, 3, 6. Result:3)

// const num1 = 10;
// const num2 = 11;
// const num3 = 7;

// let numbers = 1;

// if (num1 % 2 !== 0) {
//   numbers = numbers * num1;
// }
// if (num2 % 2 !== 0) {
//   numbers = numbers * num2;
// }
// if (num3 % 2 !== 0) {
//   numbers = numbers * num3;
// }

// console.log("sondgoi tooon urjver", numbers);

// 10/29   Sumiya Bagsh bodlogo part2

// #1 Өндөр жил шалгах - (Example: 2000, Result: Өндөр жил.
//    Example-1: 2001, Result: Өндөр жил биш.) Шалгах нөхцөл: 4-т хуваагддаг, 400 -т хуваагддаг, 100 хуваагдахгүй.

// const year = 2000;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Undur jil");
// } else {
//   console.log("Undur jil bish");
// }

// #2 Өгөгдсөн 3 тоогоор талаа хийсэн гурвалжинг байгуулж болох бол YES үгүй бол NO гэж хэвлэ. (Example: 3 4 5, Result: YES)

// #3 Долоо хоногийн дугаар өгөгдөхөд харгалзах гарагийг англиар хэвлэ. Эхний үсгийг л томоор бичнэ. (Example: 5: Result: Friday)
