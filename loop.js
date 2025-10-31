// 10/30 Sumiya bagsh Luup bodlog

// #1 Pinecone гэж 1 удаа хэвлэ.

// let text = "";

// for (let index = 1; index <= 1; index++) {
//   console.log("Pinecone" + index);
// }

// #2 Pinecone гэж 10 удаа хэвлэ.

// let text = "";
// for (let i = 1; i <= 10; i++) {
//   console.log("Pinecone" + i);
// }

// #3 Pinecone гэж n удаа хэвлэ.

// let text = "";

// const n = 50;

// for (let i = 1; i <= n; i++) {
//   console.log("Pinecone" + i);
// }

// #4 20 хүртэлх сондгой тоонуудыг хэвлэ

// let sum = 0;

// for (let i = 0; i <= 20; i += 3) {
//   sum += i;
// }
// console.log(sum);

// #5 40 хүртэлх тэгш тоонуудыг хэвлэ.

// let sum = 0;

// for (let i = 0; i <= 40; i += 2) {
//   sum += i;
// }

// console.log(sum);

// #6 20 хүртэлх тэгш тоонуудын нийлбэрийг ол.

// let sum = 0;
// for (let i = 0; i < 20; i += 2) {
//   sum = sum + i;
// }

// console.log(sum);

// #7 40 хүртэлх сондгой тоонуудын нийлбэрийг ол.

// let sum = 0;

// for (let i = 1; i < 40; i += 2) {
//   sum = sum + i;
// }
// console.log(sum);

// #8 Өгөгдсөн n тооны нийлбэрийг ол.

// const a = 20;
// let sum = 0;

// for (let i = 0; i <= a; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// #9 100 гийн тоог n удаа нэм. (Example: 10, Result:1000)
// const n = 10;
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum = sum + n;
// }
// console.log(sum);

// #10 125 хүртэлх тооны үржвэрийг ол.

// const a = 125;
// let sum = 1;

// for (let i = 1; i <= a; i++) {
//   sum = sum * i;
// }
// console.log(sum);

// #11 125 хүртэлх сондгой тооны үржвэрийг ол.

// const a = 125;
// let sum = 1;

// for (let i = 1; i <= a; i += 2) {
//   sum = sum * i;
// }

// console.log(sum);

// #12 n тооны factorial ийг ол.

// const n = 6;
// let sum = 1;

// for (let i = 1; i <= n; i++) {
//   sum = sum * n;
// }

// console.log(sum);
// Sumiya bagsh Luup bodlog Part2

// #1 10 аас 1 рүү буурах дарааллаар хэвлэ.

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// #2 Өгөгдсөн n тооны хүрдийг харуул.
// Example:
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30

// const n = 10;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} * ${i} = ${n * i}`);
// }

// #3 2 ийн n зэргийг ол. (Example: 5. Result:32)

// const n = 5;
// let zereg = 1;

// for (let i = 1; i <= n; i++) {
//   zereg = zereg * 2;
// }

// console.log("2-ийн " + n + " зэрэг нь:", zereg);

// #4 Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол. (Example: 234. Relt:9)

// const num = 123;

// const ones = num % 10;
// const tens = Math.floor((num % 100) / 10);
// const hunds = Math.floor(num / 100);

// const total = ones + tens + hunds;
// console.log("Цифрүүдийн нийлбэр:", total);

// #5 987654 дээрх тоо хэдэн оронтой тоо гэдгийг тоол. Result:6

// const num = 987654;
// const length = num.toString().length;
// console.log("Оронгийн тоо:", length);

// #6 Өгөгдёөн тооны квадратыг ол . Example: 5 . Result: 25

// const num = 5;
// const square = num * num;
// console.log("Квадрат нь:", square);

// #7 Эхний N  тооны кубын нийлбэр. Example: 4 . Result:100

// const n = 4;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum = sum + i ** 3;
// }

// console.log("Кубын нийлбэр:", sum);

// // #8 1–30 хүртэлх тоонууд дундаас 2 болон 3-т зэрэг хуваагддаг тоонуудыг хэвлэх#Хэрвээ тоо 3-т хуваагдвал “Fizz”, 5-т хуваагдвал “Buzz” гэж хэвлэх
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(i + " → 2 ба 3-т зэрэг хуваагдана");
//   }

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// #9 1–100 хүртэлх 7-д хуваагддаггүй тоонуудыг хэвлэх'

// for (let i = 1; i <= 100; i++) {
//   if (i % 7 !== 0) {
//     console.log(i);
//   }
// }

// #10 1–50 хүртэлх тоонууд дундаас сондгой бөгөөд 5-ын үржвэр тоонуудыг олох

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// #11 1–100 хүртэлх тоонуудын дундаас 50–60 хооронд байгаа тоонуудын нийлбэрийг гарга.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i >= 50 && i <= 60) {
//     sum = sum + i;
//   }
// }

// console.log("50–60 хоорондох тоонуудын нийлбэр:", sum);

// // #12 1–20 хүртэлх тоонууд дундаас анхны тоонуудыг (prime numbers) ол.

// for (let i = 2; i <= 20; i++) {
//   let Prime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       Prime = false;
//       break;
//     }
//   }

//   if (Prime) {
//     console.log(i);
//   }
// }

// #13 1–50 хүртэлх бүх сондгой тооны кубын нийлбэрийг ол.

// let sum = 0;

// for (let i = 1; i <= 50; i += 2) {
//   sum += i ** 3;
// }

// console.log("Кубын нийлбэр:", sum);

// #14 1–100 хүртэлх тоо бүрийг шалгаад 2-т болон 5-т зэрэг хуваагддаг бол тоог хэвлэ.

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// 10.31 Amga bagsh bodlog part 1

// #1 1-ээс 10 хүртэлх тооны квадратуудыг хэвлэ

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}² = ${i * i}`);
// }

// #2 Өөрийн нэрийг бичиж эсрэгээр нь хэвлэ. Жишээ нь: Сүх -> Хүс

// const name = "Ariunzul";

// const reversed = name.split("").reverse().join("");

// console.log(reversed);

// #3 Өгөгдсөн жил зуны олимпийн жил мөн эсэхийг ол. 1896 онд эхэлсэн.

// const startyear = 1896;
// const checkyear = 2024;

// if ((startyear - checkyear) % 4 === 0) {
//   console.log(checkyear + " zunii olimp jil");
// } else {
//   console.log(checkyear + " zunii olipm baihgu ");
// }

// // #4 Өгөгдсөн жил өвлийн олимпийн жил мөн эсэхийг ол. 1924, 1994 онд эхэлсэн

// const checkyear = 2026;

// let winterolympic = false;
// if (checkyear >= 1924 && checkyear <= 1992) {
//   if ((checkyear - 1924) % 4 === 0) {
//     winterolympic = true;
//   }
// }
// if (checkyear >= 1994) {
//   if ((checkyear - 1994) % 4 === 0) {
//     winterolympic = true;
//   }
// }

// if (winterolympic) {
//   console.log(checkyear + " uvliin olimp");
// } else {
//   console.log(checkyear + " uvliin olimp bish ");
// }

// #5 Хэрэглэгчээс сарын дугаар (1-12) аваад, улирал хэвлэнэ:
//  • 12, 1, 2: "Өвөл"
//  • 3, 4, 5: "Хавар"
//  • 6, 7, 8: "Зун"
//  • 9, 10, 11: "Намар"

// let sar = 6;
// for (i = 1; i <= 12; i++)
//   if (i === sar)
//     if (i >= 3 && i <= 5) {
//       console.log(sar + "havriin uliral");
//     } else if (i >= 6 && i <= 8) {
//       console.log(sar + "zunii uliral");
//     } else if (i >= 9 && i <= 11) {
//       console.log(sar + "namriin uliral");
//     } else console.log(sar + "uvliiin urliral");

// #6. Хэрэглэгчээс шаахууны төрлийг (92, 95, D) болон литр авах бөгөөд үнийг тооцно:
// 	•	92: 2500₮/литр
// 	•	95: 3000₮/литр
// 	•	D: 2200₮/литр

let litr = 6;
let turul = "D";

if (turul === "D") {
  litr = litr * 2200;

  console.log(turul + "turul" + litr + "₮");
} else if (turul === "95") {
  litr = litr * 3000;

  console.log(turul + "turul" + litr + "₮");
} else if (turul === "92") {
  litr = litr * 2500;
}
console.log(turul + "turul" + litr + "₮");

// #7. yearOfBirth гэсэн хувьсагчид гараас төрсөн оныг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
// 0 <= old <= 1 үед "Infant"
// 1 < old <= 3 үед "Toddler"
// 3 < old <= 5 үед "Preschool"
// 5 < old <=12 үед "Gradeschooler"
// 12 <old <= 18 үед "Teen"
// 18 < old <=21 үед "Young adult"
// 21 < old үед "Adult"

// Amgaa bagsh bodlog Part2

// #1 Armstrong тоо мөн үгүйг шалгах. 153 -> 1**3 + 5**3 + 3**3 = 153
// #2 N хүртэлх бүх тоог * дүрсээр график үүсгэх
// *
// **
// ***
// ****
// *****
// #3 1-ээс N хүртэл бүх тоог хэвлэх, тэгш, сондгой ялгах, нийлбэрийг тооцоолох
// 1-ээс N хүртэлх бүх тоог хэвлэх, тэгш болон сондгойг ялгаад, эцэст нь тэгшийн нийлбэр, сондгойгийн нийлбэр-ийг хэвлэх.
