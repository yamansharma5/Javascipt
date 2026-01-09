//operations

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b); remainder
// console.log(a ** b); power

// operator precidence 
// () > ** > {* / %} > +,-  left to right 
//....................................................................

str1 = "yaman";
str2 = " sharma1";
fullName = str1 + str2;
console.log(fullName);
console.log(typeof fullName);

console.log(1 + 2);
sum = console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");

console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); // 32 output bcz standard in ecma script

//...............................comparisons in datatypes...........................

// console.log(2 == 1);
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 != 1);

//while using compasison operators must ensure same datatype bcz sometime js gives unpredictable outcomes


console.log("2" > 1);//js automatically convert "2"string to number here
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null != 0);

