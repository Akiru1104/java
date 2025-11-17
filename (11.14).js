// 2025.11.14 Bodlogo String method

// 1. Доторх үгсийг урвуу болгох
// Эхний болон сүүлийн үгийг өөрчлөхгүй.
// Жишээ:
// Оролт: "JavaScript бол үнэхээр сонирхолтой хэл"
// Гаралт: "JavaScript лоб рээхнеүн йотлохронис хэл"

// const reverseInnerWords = (str) => {
//   const words = str.split(" ");
//   for (let i = 1; i < words.length - 1; i++) {
//     words[i] = words[i].split("").reverse().join("");
//   }
//   return words.join(" ");
// };

// const input = "JavaScript бол үнэхээр сонирхолтой хэл";
// const output = reverseInnerWords(input);
// console.log(output);

// 2. Өгүүлбэр дэх давтагдахгүй үсгүүдийг тоолох (том жижиг ялгахгүй)
// Зөвхөн a–z үсгийг тоолно.
// Оролт: "Сайн уу?"
// Гаралт: 4

// const countUniqueLetters = (str) => {
//   const lowerStr = str.toLowerCase();
//   const uniqueLetters = new Set();
//   for (let char of lowerStr) {
//     if (char >= "a" && char <= "z") {
//       uniqueLetters.add(char);
//     }
//   }
//   return uniqueLetters.size;
// };

// const input = "Sain uu?";
// const result = countUniqueLetters(input);
// console.log(result);

// 3. Давхардсан үсгүүдийг арилгаж дарааллыг хадгалах
// Оролт: "aabbccddeeff"
// Гаралт: "abcdef"

// 4. kebab-case → camelCase болгох
// Оролт: "hello-world-example"
// Гаралт: "helloWorldExample"

// 5. Урт нь 4-өөс их бол дундах үсгүүдийг “*” болгох
// Эхний 2 ба сүүлийн 2 үлдэнэ.
// Оролт: "mongolia"
// Гаралт: "mo****ia"

// 2025.11.14 Bodlogo Object method

// 1. Объектын бүх key-үүдийг camelCase руу хөрвүүлэх
// Дотроо объект байвал тэрийг ч хөрвүүлнэ.

// 2. Объект доторх утгуудын төрлийг тоолох
// Тоо, стринг, boolean, массив, объект – тус бүр хэд байгааг тооцно.

// 3. Объектыг Deep Freeze хийх
// Object.freeze()-ийг ашигла.

// 4. Тодорхой утгатай бүх key-ийг олох
// Давхар объектууд дундаас ч хайна.
// Жишээ: утга нь "admin" бол "role": "admin" гэх бүх key-г буцаах.

// 5. Объектын key ба value-г сольж шинэ объект үүсгэх
// Жишээ: { a: 1, b: 2 } → { 1: "a", 2: "b" }

// 2025.11.14 Bodlogo Array method

// 1. Массив доторх сөрөг тоонуудыг устгаж шинэ массив гаргах
// for, while г.м callback бус аргаар.

// 2. Массивыг дахин давтагдахааргүй болгох
// Set ашиглаж болохгүй.

// 3. Хоёр массивыг нийлүүлээд давхардлыг арилгах
// callback function (map/filter) ашиглахгүй.

// 4. Массив доторх хамгийн урт стрингийг олох

// 5. Массивыг эрэмбэлэх sortl

// 11.15aas ehelj baina 2025.11.14 Bodlogo Array method with callback

// 1. Тооноос бүрдэх массивыг квадрат болгон буцаах (map)
// Оролт: [1, 2, 3] → [1, 4, 9]

// let numbers = [1, 2, 3];
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);

// 2. Сөрөг тоонуудыг шүүх (filter)
// Оролт: [1, -3, 4, -2] → [1, 4]

// let nums = [1, -3, 4, -2];
// const positiveNums = nums.filter((num) => num >= 0);
// console.log(positiveNums);

// 3. Массивын нийлбэрийг олох (reduce)
// Оролт: [5, 10, 3] → 18

// let arr = [5, 10, 3];
// const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// 4. Объектуудын массивыг нэрcийн жагсаалт болгож хувиргах
// map ашиглана.
// Жишээ:
// [{name: "Bold"}, {name: "Suren"}] → ["Bold", "Suren"]

// let people = [{ name: "Bold" }, { name: "Suren" }];
// const names = people.map((person) => person.name);
// console.log(names);

// 5. Массив доторх үгсийн уртын нийлбэрийг ол (reduce)
// Оролт: ["hi", "hello", "mongolia"]
// Гаралт: 2 + 5 + 8 = 15

// let words = ["hi", "hello", "mongolia"];
// const totalLength = words.reduce((acc, word) => acc + word.length, 0);
// console.log(totalLength);

// 2025.11.14 Bodlogo

// Array methods with callback (Өөрсдөө dataгаа зохио)
// MAP (10 бодлого)

// #1 Тоон массивыг квадратласан шинэ массив болго.
// let numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);

// let numbers = [3, 4, 6, 7, 13, 14, 24, 25, 59, 66, 77, 104, 200];
// const squarNumb = numbers.map((num) => num * num);
// console.log(squarNumb);

// #2 Тоонуудыг “тэгш” эсвэл “сондгой” гэсэн стринг болгон хувирга.

// let numbers = [1, 4, 7, 8, 9, 12, 13, 16, 18, 29, 38, 41, 67, 72, 85, 90, 100];
// const evenStrings = numbers.map((num) => (num % 2 === 0 ? "тэгш" : "сондгой"));
// console.log(evenStrings);

// #3 Объектын массив дотроос зөвхөн name утгуудын массив үүсгэ.
// const users = [
//   {
//     name: "Zulaa",
//     age: "29",
//     adress: "Ulaanbaatar",
//   },
//   {
//     name: "Bold",
//     age: "35",
//     adress: "Erdenet",
//   },
//   {
//     name: "Suren",
//     age: "22",
//     adress: "Darkhan",
//   },
// ];

// const names = users.map((user) => user.name);
// console.log(names);

// #4 Наснуудын массиваас 2025 он дээр үндэслэн төрсөн жилүүдийн массив гарга.

// const ages = [28, 25, 29, 33, 40, 56, 60, 87, 100];
// const birthYears = ages.map((ages) => 2025 - ages);
// console.log(birthYears);

// #5 Стринг бүрийн эхний үсгийг том болго.

// const strings = ["zulaa", "michee", "tok", "hulan", "darga", "teku", "bata"];
// const tomUseg = strings.map(
//   (strings) => strings[0].toUpperCase() + strings.slice(1)
// );
// console.log(tomUseg);

// #6 Стринг массивыг тэдгээрийн уртын массив болгон хувирга.

// const words = ["hello", "mongolia", "javascript", "developer", "array"];
// const lengths = words.map((word) => word.length);
// console.log(lengths);

// #7 Бүтээгдэхүүний массив дахь бүх үнэд 10% нэмсэн шинэ массив гарга.

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 },
// ];

// const increasedPrices = products.map((product) => ({
//   ...product,
//   price: product.price * 1.1,
// }));
// console.log(increasedPrices);

// #8 Тоонуудыг “₮1,200” гэх мэт форматтай мөнгөн дүнгийн стринг болго.

// const amounts = [1200, 4500, 78900, 1500000, 32000];
// const formattedAmounts = amounts.map((amount) => `₮${amount.toLocaleString()}`);
// console.log(formattedAmounts);

// #9 Boolean утгуудыг “ТИЙМ” эсвэл “ҮГҮЙ” стринг болгон хувирга.

// const booleans = [true, false, true, true, false, false, true];
// const stringBooleans = booleans.map((bool) => (bool ? "ТИЙМ" : "ҮГҮЙ"));
// console.log(stringBooleans);

// #10 firstName, lastName талбартай объектуудыг “lastName, firstName” стринг болгон хувирга.

const people = [
  { firstName: "Zulaa", lastName: "Sodnom" },
  { firstName: "Teku", lastName: "Michee" },
  { firstName: "Tok", lastName: "Munuu" },
];

const fullNames = people.map(
  (person) => `${person.lastName}, ${person.firstName}`
);
console.log(fullNames);

// FILTER (10 бодлого)

// #11 Массив дахь бүх сөрөг тоонуудыг шүүж хая.
// #12 Урт нь 5-аас дээш бүх стрингийг үлдээ.
// #13 Хэрэглэгчдийн массиваас 18+ настай хэрэглэгчдийг шүүнэ.
// #14 Үнэ нь 5000-аас дээш бүтээгдэхүүнүүдийг шүүнэ.
// #15 Массив дотроос зөвхөн тэгш тоонуудыг үлдээгээрэй.
// #16 Оноо нь 80-аас дээш оюутнуудыг шүүнэ.
// #17 “а” үсэг агуулсан бүх үгийг шүүнэ.
// #18 filter ашиглан массивын давхардсан утгуудыг устга.
// #19 Үнэн (truthy) утгуудыг үлдэж, бусдыг хая.
// #20 isActive = true объектуудыг шүүнэ.

// REDUCE (10 бодлого)

// #21 Тоон массивын нийлбэрийг ол.
// #22 Тоон массивын дунджийг reduce ашиглан ол.
// #23 Үгсийн массиваас үгийн давтамжийн объект үүсгэ.
// #24 Худалдан авалтын массивын нийт үнийг ол.
// #25 Массивын хамгийн том утгыг reduce ашиглан ол.
// #26 Массив дахь хамгийн урт стрингийг ол.
// #27 Объектын массивыг ID-ээр нь объект болгон хувирга (id-тэй map).
// #28 Тоонуудаас нийлбэр, хамгийн их, хамгийн бага утгуудыг нэг reduce-ээр гарга.
// #29 Стринг массивыг нэг мөр болгон хооронд нь таслалтайгаар нэгтгэ.
// #30 Массив дахь эерэг ба сөрөг тоонуудын тоог нэг reduce дээр тоол.

// FIND (5 бодлого)

// #31 Массив дотроос анхны сөрөг тоог ол.
// #32 Хэрэглэгчдийн массиваас email таарах хэрэглэгчийг ол.
// #33 Бүтээгдэхүүний массиваас id тохирох бүтээгдэхүүнийг ол.
// #34 Урт нь 10-аас их анхны стрингийг ол.
// #35 Үнэ нь 10000-аас дээш анхны бүтээгдэхүүнийг ол.

// SOME (5 бодлого)

// #36 Массив дотор сөрөг тоо байгаа эсэхийг шалга.
// #37 Нэрсийн массив дотор “Admin” нэр байгаа эсэхийг some ашиглан шалга.
// #38 Бүтээгдэхүүнүүдийн дунд үнэгүй (price = 0) зүйл байгаа эсэх.
// #39 Оюутнуудын дунд 90-аас дээш оноо авсан хүн байгаа эсэх.
// #40 Стринг массив дотор хоосон стринг байгаа эсэх.

// EVERY (5 бодлого)

// #41 Бүх тоонууд эерэг эсэхийг шалга.
// #42 Бүх хэрэглэгчид 18-аас дээш настай эсэх.
// #43 Бүх бүтээгдэхүүн price талбартай эсэх.
// #44 Бүх стрингүүдийн урт 3-аас дээш эсэх.
// #45 Бүх boolean утга true эсэх.

// SORT (5 бодлого)

// #46 Тоон массивыг өсөхөөр эрэмбэл.
// #47 Стринг массивыг цагаан толгойн дарааллаар эрэмбэл.
// #48 Объектын массивыг price-ээр нь өсөхөөр эрэмбэл.
// #49 Хэрэглэгчдийг name талбараар нь A–Z дарааллаар эрэмбэл.
// #50 Огноонуудын массивыг earliest → latest дарааллаар эрэмбэл.
