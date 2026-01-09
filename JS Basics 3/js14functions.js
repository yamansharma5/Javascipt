let a = 15 , b= 16
function addition(){
    console.log(`sum of two numbers is ${a+b}`);
    

    console.log("yaman")
}
//addition -> name of Function/ reference
//addition() -> Execution of function

addition();

function sum(num1 ,num2){//num1 and num2 are parameters of a function
    console.log(num1 + num2);

}
//sum() this will give NaN as output bcz we have not given arguments
sum(12,67);
sum(23,a);
sum(23,"a");


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2, c){

    // let result = number1 + number2
    // return result
    return number1 + number2+c;
}

const result = addTwoNumbers(3, 5,4);
let o=addTwoNumbers(addTwoNumbers(1,3),6)

console.log("Result: ", result);
// console.log(o);




//..........................................
//Function Expresions - store function in variable
let sum= function(a,b){
    return a+b;
}


//...........................................
//High order Function

function countofgreet(func, n){
    for(let i = 1; i<=n;i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}

countofgreet(greet , 6);// we passed greet as argument which prints greet 6 times
countofgreet(function(){console.log("hello");}); // also possible


//..........high order function returns - factory............................
// 7. Higher Order Functions & Callbacks
// Functions as first-class citizens

// map(), filter(), reduce()

// Passing functions as arguments

function check(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong request");
    }
}
let request = "odd";
let odd = check(request);
odd(9);


//..................object function..........
const calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a+b;
    },
    mul: function(a,b){
        return a+b;
    }
};

calculator.add(1,3);
Math.random();// same as this above but math function already defined in js







//................................................................ 

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("hitesh"))
// // console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));