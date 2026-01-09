//Memory 
//........................
//primitive data types
//for primitive datatypes - Stack , for non premitive datatype - Heap 

let name = "yaman" // saved in stack
let anotherName = name;
anotherName = "Ymn";

console.log(anotherName);
console.log(name);

//in stack memory a copy of value is given to us and it remains same until we change


let user ={
    name: "yaman",
    email: "yamanshatma1232@gmail.com",
}

let user2 = user;
user2.email = "yasakjdsfsfbsf";

console.log(user.email);
console.log(user2.email);

// in heap memory it will point towards same referenve 





