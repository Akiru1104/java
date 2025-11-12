// 2025.11.12 hicheeliin Array method bodlogo

// #1 Өөрийн дуртай 5 жимсний жагсаалт үүсгээд, хамгийн эхний болон хамгийн сүүлийн жимсийг хэвлэ.

// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// #2 ['apple', 'banana'] массивын төгсгөлд 'mango' нэм.

// const fruits2 = ["apple", "banana"];
// fruits2.push("mango");
// console.log(fruits2);

// #3 [1, 2, 3, 4] массиваас сүүлийн элементийг pop() ашиглан устга.

const numbers = [1, 2, 3, 4];
numbers.pop();
console.log(numbers);

// #4 [10, 20, 30] массивын эхэнд 5 нэм.

// const numbers = [10, 20, 30];
// numbers.unshift(5);
// console.log(numbers);

// #5 [100, 200, 300] массиваас эхний элементийг shift() ашиглан устга.

// const numbers = [100, 200, 300];
// numbers.shift();
// console.log(numbers);

// #6 [1, 2, 3] ба [4, 5, 6] массивуудыг нэгтгэж шинэ массив үүсгэ.

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = a.concat(b);
// console.log(c);

// #7 ['apple', 'banana', 'orange'] массив дотор 'banana' байгаа эсэхийг шалга.

// const fruits = ["apple", "banana", "orange"];
// const hasBanana = fruits.includes("banana");
// console.log(hasBanana);

// #8 ['cat', 'dog', 'bird'] массив дотор 'dog' хэддэх индекст байгааг ол.

// const animals = ["cat", "dog", "bird"];
// const index = animals.indexOf("dog");
// console.log(index);

// #9 ['I', 'love', 'JavaScript'] массивыг join() ашиглан нэг мөр болгон холбож хэвлэ.

// const words = ["I", "love", "JavaScript"];
// const sentence = words.join(" ");
// console.log(sentence);

// #10 [10, 20, 30, 40, 50] массиваас эхний 3 элементийг slice() ашиглан аваад шинэ массив үүсгэ.

// const numbers = [10, 20, 30, 40, 50];
// const sliced = numbers.slice(0, 3);
// console.log(sliced);

// #11 [1, 2, 3, 4] массиваас хоёр дахь элементийг splice() ашиглан устга.

// const numbers = [1, 2, 3, 4];
// numbers.splice(1, 1);
// console.log(numbers);

// #12 [1, 2, 3, 4, 5] массивыг reverse() ашиглан урвуугаар эргүүл.

// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers);

// #13 ['banana', 'apple', 'cherry'] массивыг sort() ашиглан үсгийн дарааллаар эрэмбэл.

// const fruits = ["banana", "apple", "cherry"];
// fruits.sort();
// console.log(fruits);

// #14 Өгөгдсөн хувьсагч массив мөн эсэхийг Array.isArray() ашиглан шалга.

// const data = [1, 2, 3];
// const isArray = Array.isArray(data);
// console.log(isArray);

// #15 ['red', 'blue', 'green'] массивын нийт уртыг хэвлэ.

// const colors = ["red", "blue", "green"];
// console.log(colors.length);

// #16 [10, 20, 30] массивын дундах элемент (20)-ийг 25 болгож солино уу.

// const numbers = [10, 20, 30];
// numbers[1] = 25;
// console.log(numbers);

// #17 ['HTML', 'CSS'] ба ['JavaScript', 'React'] массивуудыг нэгтгээд нийт хэдэн элементтэй болохыг хэвлэ.

// const a = ["HTML", "CSS"];
// const b = ["JavaScript", "React"];
// const combined = a.concat(b);
// console.log(combined.length);

// #18 [1, 2, 3, 4, 5] массиваас сүүлийн 2 элементийг splice() ашиглан устга.

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(-2, 20);
// console.log(numbers);

// #19 [5, 10, 15, 20] массиваас гурав дахь элементийг splice() ашиглан хас.

// const numbers = [5, 10, 15, 20];
// numbers.splice(2, 1);
// console.log(numbers);

// #20  [100, 200, 300] массиваас 200 байгаа эсэхийг шалгаад, байвал “байна”, байхгүй бол “байхгүй” гэж хэвлэ.

// const numbers = [100, 200, 300];
// if (numbers.includes(200)) {
//   console.log("baina");
// } else {
//   console.log("baihgui");
// }

//  2025.11.12 hicheeliin Object method bodlogo

// #1 Хүний нэр, нас, хот гэсэн 3 properties объект үүсгэ.

// const person = {
//   name: "Zulaa",
//   age: 29,
//   city: "Ulaanbaatar",
// };

// #2 Объект дотор байгаа name шинж чанарын утгыг хэвлэ.

// const person = {
//   name: "Zulaa",
//   age: 29,
//   city: "Ulaanbaatar",
// };
// console.log(person.name);

// #3 person.age утгыг шинэчлээд 30 болго.

// const person = {
//   name: "Zulaa",
//   age: 29,
//   city: "Ulaanbaatar",
// };
// person.age = 30;
// console.log(person.age);

// #4 person объектод шинэ job шинж чанар нэмээд 'developer' гэж оноо.

// const person = {
//   name: "Zulaa",
//   age: 29,
//   city: "Ulaanbaatar",
// };
// person.job = "developer";
// console.log(person);

// #5 delete ашиглан person объектын city propertyg устга.

// const person = {
//   name: "Zulaa",
//   age: 29,
//   city: "Ulaanbaatar",
// };
// delete person.city;
// console.log(person);

// #6 Хоёр объект (user1, user2)-ийг Object.assign() ашиглан нэгтгэ.

// const user1 = { name: "Zulaa", age: 29 };
// const user2 = { email: "zulaa.1104@gmail.com", city: "Ulaanbaatar" };
// const mergedUser = Object.assign({}, user1, user2);
// console.log(mergedUser);

// #7 Object.keys() ашиглан объектын бүх түлхүүрүүдийг массив болгон ав.

// const user1 = { name: "Zulaa", age: 29 };
// const keys = Object.keys(user1);
// console.log(keys);

// #8 Object.values() ашиглан бүх утгуудыг массив болгон ав.

// const user1 = { name: "Zulaa", age: 29 };
// const values = Object.values(user1);
// console.log(values);

// #9 Object.entries() ашиглан түлхүүр-утгын хосуудыг массив болгон ав.

// const user1 = { name: "Zulaa", age: 29 };
// const entries = Object.entries(user1);
// console.log(entries);

// #10 Объект дотор тодорхой түлхүүр ("email") байгаа эсэхийг 'email' in user хэлбэрээр шалга.

// const user = { name: "Zulaa", age: 29, email: "zulaa.1104@gmail.com" };
// const hasEmail = "email" in user;
// console.log(hasEmail);

// #11 for...in давталт ашиглан объектын бүх түлхүүр болон утгуудыг хэвлэ.

// const user = { name: "Zulaa", age: 29, email: "zulaa.1104@gmail.com" };
// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// #12 Object.freeze() ашиглан объектын утгыг өөрчлөх боломжгүй болгож оролдоод турш.

// const user = { name: "Zulaa", age: 29 };
// Object.freeze(user);
// user.age = 50;
// console.log(user);

// #13 Хоёр объектын утгуудыг spread (...) ашиглан нэг шинэ объект үүсгэ.

// const user1 = { name: "Zulaa", age: 29 };
// const user2 = { email: "zulaa.1104@gmail.com", city: "Ulaanbaatar" };
// const mergedUser = { ...user1, ...user2 };
// console.log(mergedUser);

// #14 Хоосон объект үүсгээд дараалан өөрийн хүссэн 3 properties g  нэм.

// const obj = {};
// obj.firstName = "Ariunzul";
// obj.lastName = "Sodnom";
// obj.age = 29;
// obj.city = "Ulaanbaatar";
// console.log(obj);

// #15 Нэг объектын тодорхой утгыг өөр объект руу хуулах (clone) үйлдэл хийгээрэй.

// const original = { name: "Zulaa", age: 29 };
// const clone = { ...original };
// console.log(clone);

// #16 Объектын бүх түлхүүрийг length-ээр тоол.

// const user = { name: "Zulaa", age: 29, email: "zulaa.1104@gmail.com" };
// const keys = Object.keys(user);
// console.log(keys.length);

// #17 Object.hasOwnProperty() ашиглан user объектод password байгаа эсэхийг шалга.

// const user = { name: "Zulaa", age: 29 };
// const hasPassword = user.hasOwnProperty("password");
// console.log(hasPassword);

// #18 JSON.stringify() ашиглан объектоо string болгон хөрвүүл.

// const user = { name: "Zulaa", age: 29 };
// const jsonString = JSON.stringify(user);
// console.log(jsonString);

// #19 JSON.parse() ашиглан string-ийг буцааж объект болгож хөрвүүл.

// const jsonString = '{"name":"Zulaa","age":29}';
// const pObject = JSON.parse(jsonString);
// console.log(pObject);
