//for of
//array of object
// [{},{},{}]

const arr =[1,2,3,4,5,6];
//automatically loop khud hi size wagera kar lega can applied on any string ,array
for (const num of arr) {
    console.log(num);
}

const str =" hello Yaman";
for (const alphabet of str) {
    console.log(`each character is ${alphabet}`);
    
}

//.......................................
//map : hold key value pairs
const map = new Map()
map.set("IN","india");
map.set("KN","Kenya");
map.set("US","USA");
map.set("IN","india");//it will not print as map only contain unique values

console.log(map);//return object

for (const key of map) {
    console.log(key);//it will give array
    
    
}

for (const [key, value] of map) {
    console.log(key,":",value);//it will give individual values
    
}


//........................................
//for in loop (objects)
 const shortform ={
    cpp: "c++",
    js: "javascript",
 }

 for (const key in shortform) {
    console.log(`${key} is for ${shortform[key]}`);
    
}

//array in for in loop key gives index of the array

const arr2 = ["ymn","gfgf","sds"];
for (const key in arr2) {
    console.log(key);//give index
    
}
for (const key in arr2) {
    console.log(arr2[key]);
    
}




//........................................................
//callback function and foreach loop
const coding=["c++","java","python"]
coding.forEach(function(i){
    console.log(i);
    
})

//array of object.........................very imp
const arr3=[
    {name :"yaman",
     class:10   
    },
    {name :"yaman",
     class:10  
    },
    {name :"yaman",
     class:10  
    }
]
arr3.forEach(function(i){
    console.log(i.name);
    
})

arr3.forEach((i) =>{
    console.log(i.name);
    
})