//array
// array in Java script are resizable and can be mix of different datatypes 
// indexing start from 0
//() parentheses
// [] Square Brackets
// {} Curly Braces


// three methods to declare array
const arr = [0,1,2,3,4,5,6,7,8]
const hero =["yaman","shakti","Chandra"]
const arr2 = new Array(1,2,34,5);

//console.log(arr[2]);

// to add and delete values in aarray 

arr.push(9,4); //add the element to last
arr.pop(); // delete the last element & without argument


// to add in starting

//arr.unshift(1 ,5,8,9);
//arr.shift(); // delete first & without argument

//console.log(arr);

// other properties

console.log(arr.includes(7));//for checking that this lement is included in array or not
console.log(arr.indexOf(7));
console.log(arr.indexOf(22));// this give -1 as output as not present in array

// convert to string

/*const newArr = arr.join();
console.log(arr);
console.log(newArr);*/



//***************** slice / splice

// splice change or manipulate the original array but slice doesn't do so.

console.log("original array ", arr);

const newArr = arr.slice(1,3);// isme 3 include nhi hoga sirf 1st,2nd 
console.log("After slice", newArr);
console.log("Original",arr);

const newArr1 = arr.splice(1,3);// isme 3rd bhi include hoga aur ye original arry ko manipulate kar dega
console.log("after splice ",newArr1);
console.log("Original now", arr);








