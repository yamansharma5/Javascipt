// scope - apne created variable and function kha tak use kar sakte ho 
// Execution Context ka matlab hota hai wo environment jahan JavaScript code execute hota hai.
// Jab bhi JS code run hota hai, JS engine ek execution context create karta hai.

// 🔹 Types of Execution Context..................................
// 1️⃣ Global Execution Context (GEC)

// 2️⃣ Function Execution Context (FEC)

// Har function call par naya execution context banta hai

// Ek function ko jitni baar call karoge, utni baar naya EC banega

// Isme hote hain:

// Function ke local variables

// Arguments

// Inner functions

// function add(x, y) {
//   let sum = x + y;
//   return sum;
// }
// add(2, 3);


// 👉 add() call hone par Function Execution Context bana

// 3️⃣ Eval Execution Context (Rare)

// eval() use karne par banta hai

// Real projects me use nahi karte (unsafe + slow)



// 🔹 Execution Context ke 2 Phases.............................
// 🟡 1. Memory Creation Phase (Hoisting Phase)

// Variables → undefined

// Functions → pura function memory me store

// this ko value milti hai

// console.log(a); // undefined
// var a = 5;


// 👉 Variable hoist ho gaya, value baad me assign hui

// 🟢 2. Execution Phase

// Code line by line execute hota hai

// Variables ko actual value milti hai

// Functions execute hote hain

// var a = 5;
// console.log(a); // 5

// 🔹 Call Stack (Most Important 🔥)

// JS execution contexts ko Call Stack ke through manage karta hai
// Call Stack LIFO principle follow karta hai
// (Last In, First Out)

// Example:
// function one() {
//   two();
// }
// function two() {
//   console.log("Hello");
// }
// one();

// Call Stack Flow:

// 1️⃣ Global Execution Context
// 2️⃣ one() ka EC push hua
// 3️⃣ two() ka EC push hua
// 4️⃣ two() complete → pop
// 5️⃣ one() complete → pop

// Call Stack Diagram:
// | two() |
// | one() |
// | GEC   |




//....................
// 🔹 Lexical Scoping (Short + Hinglish)

// Lexical Scoping ka matlab hai:
// 👉 Variable ka scope code likhte time decide hota hai, na ki function call hone par.

// Example:
// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }

//   inner();
// }
// outer();


// ✅ Output: 10
// 👉 inner() ko x mil gaya kyunki wo outer() ke andar likha hai.


// 🔹 Dynamic Scope (Short + Hinglish)

// Dynamic Scoping ka matlab hai:
// 👉 Variable ka scope function call ke time decide hota hai, na ki code likhte time.

// Example (Conceptual – JS me nahi hota):
// let x = 10;

// function foo() {
//   console.log(x);
// }

// function bar() {
//   let x = 20;
//   foo();
// }

// bar();


// 👉 Dynamic Scoping hoti to output hota:

// 20


// 👉 Kyunki foo() ko bar() ke andar se call kiya gaya hai.

// ❌ JavaScript me Dynamic Scope nahi hota

// JavaScript Lexical Scoping follow karta hai, isliye actual output hota hai:

// 10

// Comparison (Quick):
// Scope Type	Scope Decide Kab Hota Hai
// Lexical Scope	Code likhte time
// Dynamic Scope	Function call ke time



//...........................................
// Closure ka matlab hai:
// 👉 Jab ek function apne outer function ke variables ko “yaad” rakhta hai, even after outer function execute ho chuka ho.