//ques 1
//Write a JavaScript function that return array elements larger than a number.


// let arr1=[1,2,3,9,6,4,8,3];
// function largerThan(arr,n){
//     for(let i = 0;i<arr.length ; i++ ){
//         if(arr[i]>n){
//             console.log(arr[i]);
            
//         }
//     }

// }
// largerThan(arr1,5)


//......................................................
// ques 2 - Write a JavaScript function to extract unique character from a string.
// Example : str=“abcdabcdefgggh”
// ans=“abcdefg

// let str = "abcdabcdefgggh";

// function unique(str){
//     for(let i = 0 ; i<str.length ; i++ ){
//         let isUnique=true;
//          for(let j = 1 ; j<str.length ; j++ ){
//             if(str[i] === str[j]){
//                 isUnique=false;
//                 break;

//             }
//          }
//         if(isUnique){
//             console.log(str[i])
//         }
//     }
// }
// unique(str);

//.................................
//question 5- random number between range
let start = 100;
let end = 200;
function generateRandom(start,end){
    let diff = end-start;
    return Math.floor(Math.random() * diff) + start;
}
generateRandom(start,end);