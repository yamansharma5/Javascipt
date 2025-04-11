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
