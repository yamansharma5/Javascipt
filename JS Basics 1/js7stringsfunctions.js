//strings can be declared in two ways
let name = "yaman" 
const gameName = new String("Yaman Sharma");
let anotherName = name;


console.log(name);
console.log(anotherName);
console.log(gameName);

//adding two strings 
console.log(name + gameName + "sharma");// old syntax
console.log(`hello my name is ${name} and I play ${gameName}`);//this is more preferable

//string methods
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4);//last wali include nhi hoti
console.log(newString);

const newString2 = gameName.slice(-3,4);//We can use negative values here
console.log(newString2);

