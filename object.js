// 2025.11.06 Bodlogo
// #1 false-г true болгох массив үүсгээрэй. booleans = [false, false, true, true]

// const { useLayoutEffect } = require("react");

// const booleans = [false, false, true, true];
// let result = [];

// for (let i = 0; i < booleans.length; i++) {
//   result[i] = !booleans[i];
// }

// console.log(result);

// #2 Бүх оюутны насны нийлбэрийг ол. students = [{name: "Бат", age: 20}, {name: "Сара", age: 22}]

// const students = [
//   { name: "Бат", age: 20 },
//   { name: "Сара", age: 22 },
// ];
// let age = 0;

// for (let i = 0; i < students.length; i++) {
//   age = age + students[i].age;
// }
// console.log(age);

// #3 600-с их үнэтэй бүтээгдэхүүнийг хэвлэ. products = [{title: "Уут", price: 500}, {title: "Сав", price: 800}]

// const products = [
//   { title: "Уут", price: 500 },
//   { title: "Сав", price: 800 },
// ];
// let price = 0;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > 600) {
//     console.log(products[i]);
//   }
// }

// #4 Бүх ажилтны нэрийг хэвлэ. employees = [{name: "Амгалан", department: "IT"}, {name: "Номин", department: "HR"}]

// const employees = [
//   { name: "Амгалан", department: "IT" },
//   { name: "Номин", department: "HR" },
// ];

// for (let i = 0; i < employees.length; i++)
//     console.log(employees[i].name);

// #5 Хамгийн их хуудастай номыг ол. books = [{title: "Монгол түүх", pages: 120}, {title: "Газар зүй", pages: 150}]

// const books = [
//   { title: "Монгол түүх", pages: 120 },
//   { title: "Газар зүй", pages: 150 },
// ];

// let maxBook = books[0];

// for (let i = 1; i < books.length; i++) {
//   if (books[i].pages > maxBook.pages) {
//     maxBook = books[i];
//   }
// }

// console.log(maxBook.title);

// #6 90-с их оноотой оюутны нэрийг хэвлэ. students = [{name: "Бат", score: 85}, {name: "Сара", score: 92}]

const students = [
  { name: "Бат", score: 85 },
  { name: "Сара", score: 92 },
];
let name = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].score > name.score) {
    name = students[i];
  }
}

// #7 stock нь 0 биш бүтээгдэхүүнийг ол. products = [{title: "Уут", stock: 5}, {title: "Сав", stock: 0}]

// #8 Бүх цалингийн нийлбэр ол. employees = [{name: "Амгалан", salary: 1000}, {name: "Номин", salary: 1500}]

// #9 2005 оноос хойш хэвлэгдсэн номыг ол. books = [{title: "Монгол түүх", year: 2000}, {title: "Газар зүй", year: 2010}]

// #10 Насны дундажийг ол. students = [{name: "Бат", age: 20}, {name: "Сара", age: 22}]

// #11 Бүх үнэ 10%-иар нэмэгдүүлсэн шинэ array үүсгэ. products = [{title: "Уут", price: 500}, {title: "Сав", price: 800}

// #12 students = [{name: "Бат", math: 85, english: 90, science: 95}, {name: "Сара", math: 92, english: 88, science: 100}]
// Хамгийн өндөр үндсэн дүн (math + english + science) бүхий оюутны нэрийг ол.

// #13 employees = [{name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1}, {name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2}]
// Цалин + bonus - tax хамгийн их ажилтны нэрийг ол.

// #14 products = [{title: "Уут", price: 500, sold: 10, discount: 0.1}, {title: "Сав", price: 800, sold: 5, discount: 0.2}]
// Борлуулалтын нийт орлого (price * sold * (1 - discount)) хамгийн их бүтээгдэхүүнийг ол.

// #15 books = [{title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5}, {title: "Газар зүй", pages: 150, year: 2010, rating: 4.8}]
// Pages * rating хамгийн их утгатай номыг ол.

// #16 students = [{name: "Бат", math: 70, english: 80, science: 90}, {name: "Сара", math: 60, english: 85, science: 95}, {name: "Наран", math: 100, english: 90, science: 80}]
// Хамгийн их дүнтэй оюутны нэрийг ол.

// #17 employees = [{name: "Амгалан", salary: 1000, active: true, department: "IT"}, {name: "Номин", salary: 1500, active: false, department: "HR"}, {name: "Баяр", salary: 1200, active: true, department: "IT"}]
// Active = true ажилтнуудын дундаж цалинг ол.

// #18 products = [{title: "Уут", price: 500, sold: 10, category: "Plastic"}, {title: "Сав", price: 800, sold: 5, category: "Metal"}, {title: "Савх", price: 600, sold: 12, category: "Plastic"}]
// Category бүрийн нийт орлогыг ол.

// #19 students = [{name: "Бат", math: 85, english: 90, science: 95}, {name: "Сара", math: 92, english: 88, science: 100}]
// Нийт дүн 270-с их оюутны нэрийг ол.

// #20 books = [{title: "Монгол түүх", price: 1200, sold: 10, discount: 0.1}, {title: "Газар зүй", price: 1500, sold: 5, discount: 0.05}]
// Total revenue хамгийн их номыг ол.

// #21 employees = [{name: "Амгалан", salary: 1000, bonus: 200, department: "IT"}, {name: "Номин", salary: 1500, bonus: 300, department: "HR"}, {name: "Баяр", salary: 1200, bonus: 100, department: "IT"}]
// Department = “IT” ажилтнуудын дундаж цалинг ол.

// #22 students = [{name: "Бат", math: 70, english: 80, science: 90}, {name: "Сара", math: 60, english: 85, science: 95}, {name: "Наран", math: 100, english: 90, science: 80}]
// Хамгийн бага дүнтэй оюутны нэрийг ол.

// #23 products = [{title: "Уут", price: 500, sold: 10, discount: 0.1}, {title: "Сав", price: 800, sold: 5, discount: 0.2}, {title: "Савх", price: 600, sold: 12, discount: 0.15}]
// Total revenue хамгийн бага бүтээгдэхүүнийг ол.

// #24 books = [{title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5}, {title: "Газар зүй", pages: 150, year: 2010, rating: 4.8}, {title: "Улс төр", pages: 200, year: 2005, rating: 4.2}]
// (2025 - year) * rating хамгийн их номыг ол.

// #25 students = [{name: "Бат", age: 20, math: 70, english: 80}, {name: "Сара", age: 22, math: 60, english: 85}, {name: "Наран", age: 21, math: 90, english: 95}]
// Age 21-аас их оюутны дундаж дүнг ол.

// #26 employees = [{name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1}, {name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2}, {name: "Баяр", salary: 1200, bonus: 100, taxRate: 0.15}]
// Tax хассан нийт цалин хамгийн их ажилтны нэрийг ол.

// #27 products = [{title: "Уут", price: 500, sold: 10, category: "Plastic"}, {title: "Сав", price: 800, sold: 5, category: "Metal"}, {title: "Савх", price: 600, sold: 12, category: "Plastic"}]
// Category = “Plastic” орлогын нийлбэрийг ол.

// #28 books = [{title: "Монгол түүх", price: 1200, sold: 10, discount: 0.1}, {title: "Газар зүй", price: 1500, sold: 5, discount: 0.05}, {title: "Улс төр", price: 1000, sold: 20, discount: 0.2}]
// Total revenue 10000-с их номыг ол.

// #29 students = [{name: "Бат", math: 70, english: 80, science: 90}, {name: "Сара", math: 60, english: 85, science: 95}, {name: "Наран", math: 100, english: 90, science: 80}]
// 80-с дээш оноотой бүх subject-ийг массив болгож ав.

// #30 employees = [{name: "Амгалан", salary: 1000, active: true, department: "IT"}, {name: "Номин", salary: 1500, active: false, department: "HR"}, {name: "Баяр", salary: 1200, active: true, department: "IT"}]
// Active = true ажилтнуудын нэрийг department-гээр групп үүсгээрэй.

// #31 products = [{title: "ут", price: 500, sold: 10, category: "Plastic"}, {title: "Сав", price: 800, sold: 5, category: "Metal"}, {title: "Савх", price: 600, sold: 12, category: "Plastic"}]
// Price / sold харьцаа хамгийн бага бүтээгдэхүүнийг ол.

// #32 books = [{title: "Монгол түүх", pages: 120, rating: 4.5}, {title: "Газар зүй", pages: 150, rating: 4.8}, {title: "Улс төр", pages: 200, rating: 4.2}]
// Rating * pages дундаж хамгийн их номыг ол.

// #33 students = [{name: "Бат", math: 70, english: 80, science: 90}, {name: "Сара", math: 60, english: 85, science: 95}, {name: "Наран", math: 100, english: 90, science: 80}]
// Хамгийн их оноотой subject-тай оюутны нэрийг ол.

// #34 employees = [{name: "Амгалан", salary: 1000, bonus: 200, department: "IT"}, {name: "Номин", salary: 1500, bonus: 300, department: "HR"}, {name: "Баяр", salary: 1200, bonus: 100, department: "IT"}]
// Department бүрийн хамгийн их цалинг ол.

// #35 products = [{title: "Уут", price: 500, sold: 10}, {title: "Сав", price: 800, sold: 5}, {title: "Савх", price: 600, sold: 12}]
// Total revenue хамгийн бага болон хамгийн их бүтээгдэхүүнүүдийг ол.

// #36 books = [{title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5}, {title: "Газар зүй", pages: 150, year: 2010, rating: 4.8}]
// Rating > 4.6 номын pages нийлбэрийг ол.

// #37 students = [{name: "Бат", math: 85, english: 90, science: 95}, {name: "Сара", math: 92, english: 88, science: 100}]
// 90-с дээш score бүхий оюутнуудын нэрийг массив хэлбэрээр ав.

// ＃38 employees = [{name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1}, {name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2}]
// Tax хассан дараах цалингаар эрэмбэлсэн массив үүсгэ.

// #39 products = [{title: "Уут", price: 500, sold: 10, discount: 0.1}, {title: "Сав", price: 800, sold: 5, discount: 0.2}]
// Борлуулалтын орлого хамгийн бага бүтээгдэхүүнээс эхлэн массив үүсгэ.

// #40 books = [{title: "Монгол түүх", pages: 120, rating: 4.5}, {title: "Газар зүй", pages: 150, rating: 4.8}]
// Pages / rating харьцаа хамгийн бага номыг ол.

// #41 students = [{name: "Бат", math: 70, english: 80, science: 90}, {name: "Сара", math: 60, english: 85, science: 95}, {name: "Наран", math: 100, english: 90, science: 80}]
// Хамгийн бага оноотой subject бүхий оюутны нэрийг ол.

//  Bodlogo 2
//  Объект ашиглан үндсэн үйлдлүүд (Basic Object Manipulation)
// #1 Сурагчийг төлөөлөх объект үүсгэж дараах шинж чанаруудыг өгөх: name, age, grade, subject. Объектыг console дээр хэвлэнэ үү.
// #2 Үүсгэсэн объект дээр email шинж чанарыг нэмнэ үү.
// #3 Сурагчийн нас 18-с доош бол "not allowed" гэж console дээр хэвлэнэ үү.

// Объект дээр давталт ба нөхцөл (Loops & Conditions with Objects)
// #1 Давталт ашиглан объектын зөвхөн key-г хэвлэнэ үү.
// #2 Давталт ашиглан объектын зөвхөн value-г хэвлэнэ үү.
// #3 Object.keys(obj).length ашиглан объект хоосон эсэхийг шалгаж, нөхцөлөөр console дээр хэвлэнэ үү.
// #4 Давталт ашиглан бүх тоон утгыг 10-р нэмнэ үү.
// #5 let items = { apple: 100, banana: 50, orange: 80 } объектын бүх үнэ нийлбэрийг олно уу.

// for, do-while ба нөхцөлтэй ашиглах (Using for, do-while, and Conditions)
// #1 Давталт ашиглан объектын бүх тоон утгыг 10-р нэмнэ үү.
// #2 Объект ашиглан хэрэглэгчийн нэвтрэх мэдээллийг төлөөлөх. if-else ашиглан оруулсан нэр ба нууц үг объектын мэдээлэлтэй таарч байгаа эсэхийг шалгана уу.
