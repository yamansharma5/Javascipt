// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,21);// month in Js starts from 0 in array and this format goes from year to time
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2023-01-22");// in this format month start from 1
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate2.getTime());





