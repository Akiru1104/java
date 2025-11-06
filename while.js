// 25-11-03 shine hicheeliin bodlogo

// While

// 1. Тооны цифрийн нийлбэрийг олох. (let n = 1234)

// let num = 1234;
// let sum = 0;

// while (num > 0) {
//   const last = num % 10;
//   sum += last;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// 2. Тоог урвуулан бичих (let num = 12345 -> 54321)

// let num = 12345;
// let a = 0;

// while (num > 0) {
//   let last = num % 10;
//   a = a * 10 + last;
//   num = Math.floor(num / 10);
// }
// console.log("Urvuu too" + a);

// 3. Цифрийн тоо ол (let a = 98765 -> 5)

// let a = 98765;
// let num = 0;

// while (a > 0) {
//   num++;
//   a = Math.floor(a / 10);
// }

// console.log(num);

// // 4. Зэрэг (power) бодох (let base = 3; let exp = 4

// let base = 3;
// let exp = 4;
// let power = 0;
// let a = 0;

// while (exp > a) {
//   power = base ** exp;
//   a++;
// }
// console.log(power);

// 5. Палиндром тоо эсэхийг шалгах (let num = 1221)

// let num = "1221";
// let urt = num.length;
// let i = 0;
// let isPal = true;

// while (i < urt) {
//   const first = num[i];
//   const last = num[urt - 1 - i];

//   if (first !== last) {
//     isPal = false;
//     break;
//   }
//   i++;
// }

// console.log(isPal);

// 6. Фибоначчийн дараалал  (let n1 = 0, n2 = 1, n = 7, i = 0;)

// let n1 = 0;
// let n2 = 1;
// let n = 7;
// i = 0;

// while (i <= n) {
//   console.log(n1);
//   let n3 = n1 + n2;
//   n1 = n2;
//   n2 = n3;
//   i++;
// }

// // 7. Факториал олох (let num1 = 5;)

// let n = 5;
// let i = 0;
// const num = 0;

// while (i <= n) {
//   num += i;
//   i++;
// }
// console.log(num);

// // Do while

// 1. 1–10 хооронд тоо авах (Math.random -> 1-100)

// console.log(Math.floor(Math.random() * 10) + 1);

// 2. Сөрөг input орох хүртэл нийлбэр гаргах (let sum3 = 0; let input = 5;)

// let sum3 = 0;
// let input;

// do {
//   input = parseInt(prompt("Tooo oruulna uu"));
//   if (input >= 0) {
//     sum3 += input;
//   }
// } while (input >= 0);

// console.log("Total", sum3);

// 3. 3-ийн хүрд хэвлэх

// let i = 1;
// let num = 3;

// do {
//   console.log(`${num} * ${i} = ${num * i}`);
//   i++;
// } while (i <= 10);

//  orhiih // 4. Үгийн эгшиг тоолох (let word = "mongolia”,  let vowels = "aeiou") includes ашиглах, prompt ашиглах

// 5. Нууц үг шалгах (3 оролдлого) (let password = "your name“, let attempt; let tries = 0; const maxTries = 3;) prompt ашиглах








