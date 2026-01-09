const mHeroes = ['thor','iron man ','spiderman'];
const dcHeroes = ['superman','flash','batman'];

//mHeroes.push(dcHeroes);// this will add the complete array as a element in new array
//mHeroes.push('yaman'); // this will push only yaman element

//console.log(mHeroes);


//for merging two arrays we use the concat function

//const newArr = mHeroes.concat(dcHeroes); // merge two arrays but we hav to make a new array 
//console.log(newArr);

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






