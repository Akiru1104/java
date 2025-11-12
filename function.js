// 11/10 Function bodlog

// #1
// const calculateTrianglePeremeter = (a, b, c) => {
//   return a + b + c;
// };

// const result = calculateTrianglePeremeter(41, 21, 20);

// console.log(result);

// #2

// const calculate = (a, b, c, d, e) => {
//   return a + b + c + d + e;
// };
// const result = calculate(2, 3, 5, 7, 8);
// console.log(result);

// #3
// const getArea = (a, b) => {
//   return a * b;
// };

// const getPeremeter = (a, b) => {
//   return (a + b) * 2;
// };

// const areaAndPere = (a, b) => {
//   const area = getArea(a, b);
//   const perimeter = getPeremeter(a, b);

//   return { area, perimeter };
// };

// console.log(areaAndPere(5, 6));

// #4

// const getMinAndSec = (min) => {
//   const minut = parseInt(min / 60);
//   const second = min % 60;
//   return { minut, second };
// };
// const a = getMinAndSec(98);
// console.log(a);

// #5

// const getTime = (min) => {
//   const minute = parseInt(min / 60);
//   const secound = min % 60;
//   return { minute, secound };
// };
// const a = getTime(1297);
// console.log(a);

// #6

// const getMinToSec = (min) => {
//   return min * 60;
// };

// const getSec = (sec) => {
//   return sec;
// };

// const getTottalSec = (min, sec) => {
//   const minuteToSec = getMinToSec(min);
//   const second = getSec(sec);

//   const total = minuteToSec + second;
//   return total;
// };

// const result = getTottalSec(875, 88);
// console.log(result);

// #7

// const getHourToMin = (hour) => {
//   return hour * 60;
// };

// const getMinToSec = (min) => {
//   return min * 60;
// };

// const getSec = (sec) => {
//   return sec;
// };

// const getTottalSec = (hour, min, sec) => {
//   const hourToMin = getHourToMin(hour);
//   const minuteToSec = getMinToSec(hourToMin + min);
//   const second = getSec(sec);

//   const total = minuteToSec + second;
//   return total;
// };

// const result = getTottalSec(83, 84, 85);
// console.log(result);

// #2-1

// const getDayAndHour = (hours) => {
//   const day = parseInt(hours / 24);
//   const hour = hours % 24;
//   return { day, hour };
// };
// const a = getDayAndHour(38);
// console.log(a);

// #2-2

// const getDayToHour = (day) => {
//   return day * 24;
// };

// const getHour = (hour) => {
//   return hour;
// };

// const getTottalHour = (day, hour) => {
//   const dayToHour = getDayToHour(day);
//   const hours = getHour(hour);

//   const total = dayToHour + hours;
//   return total;
// };

// const result = getTottalHour(4, 40);
// console.log(result);

// #2-3

// const getYearToMonth = (months) => {
//   const year = parseInt(months / 12);
//   const monthss = months % 12;
//   return { year, monthss };
// };
// const a = getYearToMonth(106);
// console.log(a);

// #2-4

// const getYearToMonth = (year) => {
//   return year * 12;
// };

// const getMonth = (month) => {
//   return month;
// };

// const getTottalMonth = (year, month) => {
//   const yearToMonth = getYearToMonth(year);
//   const months = getMonth(month);

//   const total = yearToMonth + months;
//   return total;
// };

// const result = getTottalMonth(90, 98);
// console.log(result);

// #2-5

// const getMinNumber = (a, b, c, d) => {
//   return Math.min(a, b, c, d);
// };
// const a = getMinNumber(9, 3, 2, 8);
// console.log(a);

// #2-6

// const getNumber = (a, b, c, d) => {
//   let number = 1;

//   if (a < 5) number *= a;
//   if (b < 5) number *= b;
//   if (c < 5) number *= c;
//   if (d < 5) number *= d;

//   return number;
// };

// const total = getNumber(2, 9, 4, 3);
// console.log(total);

// #2-7

// const getNumber = (a, b, c, d) => {
//   let number = 1;

//   if (a > 5) number *= a;
//   if (b > 5) number *= b;
//   if (c > 5) number *= c;
//   if (d > 5) number *= d;

//   return number;
// };

// const total = getNumber(11, 9, 4, 3);
// console.log(total);

// #3 heseg

// #1 2 тоог оруулж ихийг нь хэвлэх

const getNumber = (a, b) => {
  if (a > b) els;
};
// const num1 = 20;
// const num2 = 40;

// if (num1 > num2) {
//   console.log(num1 + "Ih too");
// } else {
//   console.log(num2 + "Ih too");
// }

// #2Тоог тэгш/сондгой шалгах
// #3 3 ширхэг тоон дундах хамгийн их/хамгийн бага
// #4 Стрингийн уртыг хэвлэх
// #5 Стринг эхний болон сүүлчийн тэмдгийг нийлүүлэх
// #6 Стрингийг том үсэг болгож хувиргах
// #7 Стринг дотор тодорхой тэмдэгт байгаа эсэхийг шалгах. Жишээ: "banana", "n" → true
// #8 Тоог 3-аар болон 5-аар хуваагддаг эсэхийг шалгах. 3-т хуваагдал Fizz, 5-т хуваагдал Buzz, хоюуланд нь хуваагддаг бол FizzBuzz гэх хэвлэ
// #9 Хоёр string-ийг нэгтгэх a = Hello b = World
// #10 2 тооны дундаж
// #11 Тоо эерэг эсвэл сөрөг эсэхийг шалгах - "эерэг", "сөрөг" эсвэл "тэг"
// #12 Тоог 10-аас их эсэхийг шалгах
// #13 Хоёр тоо тэнцүү эсэхийг шалгах - "тэнцүү" эсвэл "ялгаатай"
// #14 Тоог 100-аас их, 0-аас бага эсэхийг шалгах
// #15 Тоог 10%, 20% эсвэл 30% өсгөх
// #16 Тоог 100-аас хэтэрвэл 100 болгож хэвлэх
// #17 Хоёр тэмдэгт ижил эсэхийг шалгах === ашиглах
// #18 Хоёр оронтой тооны цифрүүдийг сольж урвуулах
// #19 Тоо сөрөг бол эерэг болгож, эерэг бол хэвээр үлдээх
// #20 1970.01.01 -ээс яг одоог хүртэл хэдэн он, сар, өдөр, цаг, минут, секунд, дооль, милисекунд өнгөрсөнг ол
// #21 Дугаарын хязгаарлалтаар машин чинь хэд хэд дэх өдөр явахгүйг хэвлэнэ
