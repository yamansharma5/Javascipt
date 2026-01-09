const mHeroes = ['thor','iron man ','spiderman'];
const dcHeroes = ['superman','flash','batman'];

//mHeroes.push(dcHeroes);// this will add the complete array as a element in new array
//mHeroes.push('yaman'); // this will push only yaman element

//console.log(mHeroes);


//for merging two arrays we use the concat function

const newArr = mHeroes.concat(dcHeroes); // merge two arrays but we hav to make a new array 
console.log(newArr);

// ** Note ** push add value to the exixting array but concat returns a new array


// another and most used method for merging

const newArr1 =[...dcHeroes,...mHeroes];//... change the array to single elements 
console.log(newArr1);

// Array in array
const arr =[1,2,3,4,[5,6,7],8,[9,10,[11,12]]]

const usableArr = arr.flat(Infinity);// flat returns a new array with all the elements of subarrays recursively until the depth and (this  is used fpr the depth)
console.log(usableArr);


const a = Array.isArray("yaman");
console.log(a);
const b = Array.from("yaman");// used to make array from any string
console.log(b);
const c = Array.from({name : "yaman"})// Important Case it will give empty array as output
console.log(c);

//.........................................................

let s1 = 10000;
let s2 = 200;
let s3 = 2323;

const d = Array.of(s1,s2,s3);

console.log(d); 
console.log(Array.of(s1,s2,s3));





// | Function                      | Description                            |
// | ----------------------------- | -------------------------------------- |
// | `arr.length`                  | Number of elements                     |
// | `arr.push(x)`                 | Add to end                             |
// | `arr.pop()`                   | Remove from end                        |
// | `arr.shift()`                 | Remove from start                      |
// | `arr.unshift(x)`              | Add to start                           |
// | `arr.slice(start, end)`       | Copy part of array                     |
// | `arr.splice(start, del, ...)` | Remove/replace elements                |
// | `arr.indexOf(x)`              | First index of x                       |
// | `arr.includes(x)`             | Check if x exists                      |
// | `arr.reverse()`               | Reverse array in-place                 |
// | `arr.sort()`                  | Sort (lexical by default)              |
// | `arr.map(fn)`                 | Return new array with function applied |
// | `arr.filter(fn)`              | Filter elements using condition        |
// | `arr.reduce(fn, init)`        | Reduce array to single value           |
// | `arr.forEach(fn)`             | Loop through array                     |
// | `arr.find(fn)`                | First element that matches condition   |
// | `arr.findIndex(fn)`           | First index where condition is true    |
// | `arr.every(fn)`               | All elements satisfy condition?        |
// | `arr.some(fn)`                | Any element satisfies condition?       |
// | `arr.join(",")`               | Join elements into string              |
// | `Array.isArray(obj)`          | Check if object is array               |
// | `[...arr]` / `arr.concat()`   | Clone or merge arrays                  |
// | `arr.flat()`                  | Flatten nested arrays                  |
// | `arr.fill(value, start, end)` | Fill array with a value                |

