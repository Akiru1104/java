// 11.13 Callback function bodlog

// #1 greet(name, callback) — “Hello, [name]!” гэж хэвлээд дараа нь callback-ийг дууд.

// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback();
// }

// const afterGreet = (text) => {
//   console.log("Function dudaj bn ", text);
// };

// greet("Zulaa", afterGreet);

// #2 add(a, b, callback) — 2 тоог нийлүүлээд үр дүнг callback-р буцаа.

// const secoundFunction = (a, b, callback) => {
//   const templateString = `${a},${b};`;
//   callback(templateString);
// };

// const print = (text) => {
//   console.log(text);
// };

// secoundFunction(5, 10, print);

// #3 processUserInput(callback) — хэрэглэгчийн оруулсан утгыг (prompt гэж төсөөлөөд) callback-д дамжуул.

// const processUserInput = (callback) => {
//   const userInput = "Zulaa";
//   callback(userInput);
// };

// const greetUser = (name) => {
//   console.log(`Hello, ${name}!`);
// };

// processUserInput(greetUser);

// #4 calculateSquare(num, callback) — тооны квадратыг тооцоод callback-д дамжуул.

// const calculateSquare = (num, callback) => {
//   const square = num * num;
//   callback(square);
// };

// const printSquare = (result) => {
//   console.log("Square is: ", result);
// };

// calculateSquare(10, printSquare);

// #5 sayGoodbye(callback) — “Goodbye!” гэж хэвлээд дараа нь callback-г ажиллуул.

// const sayGoodbye = (text, callback) => {
//   console.log("Goodbye!");
//   callback(text);
// };

// const afterGoodbye = (text) => {
//   console.log("1 heseg", text);
// };

// sayGoodbye("hii", afterGoodbye);

// #6 printMessage(callback) — 2 секунд хүлээгээд callback-г ажиллуул.

// const printMessage = (callback) => {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };

// const showMessage = () => {
//   console.log("2 sec huleegeed yvaullj baina");
// };

// printMessage(showMessage);

// #7 displaySum(a, b, callback) — нийлбэрийг тооцоод callback ашиглан хэвлэ.

// const displaySum = (a, b, callback) => {
//   const sum = a + b;
//   callback(sum);
// };

// const printSum = (result) => {
//   console.log("Niilber: ", result);
// };

// displaySum(40, 20, printSum);

// #8 checkEven(num, callback) — тоо тэгш эсэхийг шалгаад үр дүнг callback-д өг.

// const checkEven = (num, callback) => {
//   const tegshuu = num % 2 === 0;
//   callback(tegshuu);
// };
// const printTegshuu = (result) => {
//   console.log("Too Tegsh uu?", result);
// };

// checkEven(8, printTegshuu);

// #9 fetchData(callback) — setTimeout ашиглан өгөгдөл татаж байгаа мэт дүр эсгээд callback-д хуурамч дата өг.

// const fetchData = (callback) => {
//   setTimeout(() => {
//     const data = { id: 1, name: "Zulaa", age: 29 };
//     callback(data);
//   }, 2000);
// };

// const printData = (data) => {
//   console.log("Tataj avsan data: ", data);
// };

// fetchData(printData);

// #10 showAlert(callback) — confirm("Continue?") true бол callback-г ажиллуул.

// const showAlert = (callback) => {
//   const userConfirmed = confirm("Continue?");
//   if (userConfirmed) {
//     callback();
//   }
// };

// const alertConfirmed = () => {
//   console.log("User confirmed!");
// };

// showAlert(alertConfirmed);

// #11 repeatThreeTimes(callback) — callback-г 3 удаа ажиллуул.

// const repeatThreeTimes = (callback) => {
//   for (let i = 0; i < 3; i++) {
//     callback();
//   }
// };

// const sayHello = () => {
//   console.log("Hello!");
// };

// repeatThreeTimes(sayHello);

// #12 printArray(arr, callback) — массивын элемент бүрт callback-г ажиллуул.

// const printArray = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// };

// const printElement = (element) => {
//   console.log("Element: ", element);
// };

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// printArray(myArray, printElement);

// #13 getLength(str, callback) — string-ийн уртыг callback-р буцаа.

// const getLength = (str, callback) => {
//   const length = str.length;
//   callback(length);
// };

// const printLength = (result) => {
//   console.log("String urt: ", result);
// };

// #14 toUpperCase(str, callback) — үгийг том үсэг болгон callback-д өг.

// const toUpperCase = (str, callback) => {
//   const uppercased = str.toUpperCase();
//   callback(uppercased);
// };

// const printUppercase = (result) => {
//   console.log("Tom usgiin: ", result);
// };
// toUpperCase("zulaa", printUppercase);

// #15 randomNumber(callback) — 1–10 хооронд санамсаргүй тоо гаргаад callback-д өг.

// const randomNumber = (callback) => {
//   const randomNum = Math.floor(Math.random() * 100) + 1;
//   callback(randomNum);
// };
// const printRandomNumber = (number) => {
//   console.log("Sanamsargui too: ", number);
// };
// randomNumber(printRandomNumber);

// #16 checkLogin(username, password, callback) — зөв хэрэглэгчийг шалгаад callback-д функцээр true false хэвлэ.
// #17 isAdult(age, callback) — нас 18-аас дээш бол true-г callback-д өг.
// #18 checkNumberType(num, callback) — тоо сондгой эсвэл тэгш гэдгийг callback-д өг.
// #19 printEach(arr, callback) — массивын элемент бүрт callback-г ажиллуул.
// #20 repeatNTimes(n, callback) — callback-г n удаа ажиллуул.
// #21 countToFive(callback) — 1-ээс 5 хүртэл тоо хэвлээд дараа нь callback-г дуудаж “Done” гэж хэл.
// #22 sumArray(arr, callback) — нийлбэрийг тооцоод callback-д дамжуул.
