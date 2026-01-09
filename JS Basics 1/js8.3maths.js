console.log(Math.abs(-4));

console.log(Math.round(2.644))
console.log(Math.floor(2.644));

console.log(Math.sqrt(36));
console.log(Math.pow(2,5));

//andom values
console.log(Math.random());//gives random valus between 0 and 1
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

//Formula if we want random numbers between 2 numbers
const min = 1 
const max = 6
console.log(Math.floor(Math.random()*(max - min + 1)) + min);



// | Function            | Description                     |
// | ------------------- | ------------------------------- |
// | `Math.abs(x)`       | Absolute value                  |
// | `Math.ceil(x)`      | Round **up**                    |
// | `Math.floor(x)`     | Round **down**                  |
// | `Math.round(x)`     | Round to nearest integer        |
// | `Math.trunc(x)`     | Remove decimal part             |
// | `Math.max(...nums)` | Largest value                   |
// | `Math.min(...nums)` | Smallest value                  |
// | `Math.random()`     | Random number from `0` to `<1`  |
// | `Math.pow(x, y)`    | `x` raised to power `y`         |
// | `Math.sqrt(x)`      | Square root                     |
// | `Math.cbrt(x)`      | Cube root                       |
// | `Math.log(x)`       | Natural log                     |
// | `Math.log10(x)`     | Base 10 log                     |
// | `Math.sign(x)`      | Sign of number (`-1`, `0`, `1`) |
// | `Math.PI`           | Value of π                      |
