
//arrays
// map, filter, reduce, find, some, every



// | Method             | Syntax                       | Purpose / What it does                                                    | Common Use Case                      | Example                                                    |
// | ------------------ | ---------------------------- | ------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------------- |
// | `.map()`**       | `arr.map(callback)`          | Creates a **new array** by applying a function to **each element**        | Transform elements                   | `[1,2,3].map(x => x*2)` → `[2,4,6]`                        |
// | **`.filter()`**    | `arr.filter(callback)`       | Creates a new array with **elements that pass** a test                    | Filtering items                      | `[1,2,3,4].filter(x => x % 2 === 0)` → `[2,4]`             |
// | **`.reduce()`**    | `arr.reduce(callback, init)` | Reduces array to a **single value** by accumulating results               | Sum, product, or custom aggregations | `[1,2,3].reduce((acc, cur) => acc + cur, 0)` → `6`         |
// | **`.forEach()`**   | `arr.forEach(callback)`      | Calls a function **on each element**, but **does not return** a new array | Side effects (e.g., logging)         | `[1,2,3].forEach(x => console.log(x))`                     |
// | **`.find()`**      | `arr.find(callback)`         | Returns the **first element** that passes a condition                     | Find a specific object/value         | `[3,5,7].find(x => x > 4)` → `5`                           |
// | **`.findIndex()`** | `arr.findIndex(callback)`    | Returns the **index** of first element that passes a condition            | Find position in array               | `[4,5,6].findIndex(x => x === 5)` → `1`                    |
// | **`.some()`**      | `arr.some(callback)`         | Returns `true` if **at least one element** passes the test                | Check partial validity               | `[1,2,3].some(x => x > 2)` → `true`                        |
// | **`.every()`**     | `arr.every(callback)`        | Returns `true` if **all elements** pass the test                          | Check full validity                  | `[2,4,6].every(x => x % 2 === 0)` → `true`                 |
// | **`.flat()`**      | `arr.flat(depth)`            | Flattens nested arrays into a **single-level** array                      | Merge nested arrays                  | `[1, [2, 3]].flat()` → `[1, 2, 3]`                         |
// | **`.flatMap()`**   | `arr.flatMap(callback)`      | Like `.map()` followed by `.flat(1)`                                      | Map & flatten in one step            | `["a", "b"].flatMap(x => [x, x])` → `["a", "a", "b", "b"]` |
// | **`.sort()`**      | `arr.sort(compareFn)`        | Sorts the array **in-place**. Needs compare function for numbers          | Alphabetic or numeric sort           | `[4, 2, 9].sort((a, b) => a - b)` → `[2,4,9]`              |
// | **`.every()`**     | `arr.every(callback)`        | Check if **all** elements pass the test                                   | Validation rules                     | `[1, 2, 3].every(x => x < 4)` → `true`                     |






//filter done in 17.1
//map
const arr=[1,2,3,4,5,6,7]
let newArr= arr
        .map((i) => i+10)// it will return the result in array
        .map ((i) => i+1)// when chaining of map it will use the values retured by above chain
        .filter((i) => i>15)
console.log(newArr);

// for each

//every - return true or false

arr.every((i) => 
     i%2 ==0
);

//reduce...........................................

const arr2 =[1,2,3,4,5,6]
let finalVal = arr2.reduce((acc, currval) => {
    console.log(`acc =${acc} val=${currval}`)
    return acc+currval},0/*stating value of accumlator*/); 



console.log(finalVal);

//ex 2
const shoppingCart =[
    {
        item : "js course",
        price:999,
    },
    {
        item : "data science",
        price:10000,
    }
]
let totalPrice=shoppingCart.reduce((acc , item) => acc + item.price,0)//items refers to objects of array
console.log(totalPrice);
