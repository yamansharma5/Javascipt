
//singleton 
// object.create

// object literals

const s = Symbol();

const user = {
    name /*these are called keys and always in form of strings */: "Yaman",
    "fullName" : "yaman Sharma", // special case when we declare key like this we have to acces through [] only
    //s : "Coder",     // we cannot use this symbol as key directly */ if we use then typeof string
    [s] : "coder",   // we can use it as a key using []
    age :  20,
    location : "Jaipur",
    email : "yamansharma.google.com",
    isLoggedIn : true,
    lastLogged : ["Monday","tuesday","saturday"],

}
//these are the two ways to access the elements of objects but we prefer the niche wala
console.log(user.email);
console.log(user["email"]);
console.log(user["fullName"]);

//console.log(user.fullName); it will give syntax error



//*********important interview question**********//
//now for using symbol datatype we always use []
console.log(user[s]);
console.log(typeof s);


//updation in object

user.email = "yamansharma1232@microsoft.com";
console.log(user["email"])
//Object.freeze(user);// used to freeze and lock the object

user.age=21;// age not cvhanged due to freeze
console.log(user["age"]);


// concept of fuctions

user.greetings = function(){
    console.log("hello user");
} 
user.greetingsTwo = function(){
    console.log(`hello user, ${this.name}`);
} 

console.log(user.greetings());
console.log(user.greetingsTwo());




