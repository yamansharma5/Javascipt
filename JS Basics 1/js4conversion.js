let score = 33;
let score1 = "33";
let score2 = "33abc";
let score3 = null

console.log(typeof score);
console.log(typeof score1);
console.log(typeof score2);
console.log("incase of null ",typeof score3);

let valueInNumber1;
valueInNumber1 = Number(score1);

let valueInNumber2;
valueInNumber2 = Number(score2);//33abc connot be converted to number but js convert and show number as output

let valueInNumber3;
valueInNumber3 = Number(score3);


console.log(valueInNumber1);
console.log(typeof valueInNumber1);


console.log(valueInNumber2); //it will give output as NaN shich means not a number
console.log(typeof valueInNumber2);

console.log(valueInNumber3);
console.log(typeof valueInNumber3);

// 33 -> convert to number
//"33" -> convert
// "33abc" -> NaN
// null -> 0

//..for boolean
// true -> 1, False -> 0 , "" -> false , "yaman" -> true