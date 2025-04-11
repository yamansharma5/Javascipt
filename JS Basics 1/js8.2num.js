//numbers

const price =100 // automatically a number
const balance = new Number(1000.0);

console.log(balance);

//Methods Important
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));// used for fixing the numebr ofdigits after point
console.log(balance.toFixed(3));

//==============================================
//to precesion give string output
const num = 23.57
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));

const num2 = 123.57
console.log(num2.toPrecision(3));
console.log(num2.toPrecision(4));

//==================================================
const salary = 1000000;
console.log(salary.toLocaleString());//add commaas accounding to standards





