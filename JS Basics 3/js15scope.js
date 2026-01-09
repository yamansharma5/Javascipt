//......function scope......
let sum=54; //global scope 
function calSum(a,b){
    let sum=a+b;//function scope 
    console.log(sum);
    
}

//block scope - variable declared inside the {} cannot be accesed outside

{
    let a = 25;
    const c = 32;
    var b = 20;
}
console.log(a);
console.log(c);
  // error we should use this

console.log(b); //no error this is a big problem

//lexical scope - nested functions - a varible defined outside the function can be accesible inside the other function  
function outerfunction(){
    let x=5;
    let y=6;
    function innerFunction(){//this function must be called alags se outer wale ko call karne se nhi chalega
        console.log(x);
        
    }
    innerFunction();
}



//.......................................
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);


// ++++++++++++++++++ important Mini hoisting++++++++++++++++++
//  3. Hoisting
// Variables declared with var are hoisted with undefined

// Functions are hoisted entirely

// let and const are hoisted but not initialized

console.log(addone(5))
//no error
function addone(num){
    return num + 1
}



addTwo(5)
//here function declared inside variable therefore error
const addTwo = function(num){
    return num + 2
}

// Function Declaration (hoisted):
// function greet() {
//   console.log("Hello");
// }


// Function Expression (not hoisted): 
// const greet = function() {
//   console.log("Hi");
// };