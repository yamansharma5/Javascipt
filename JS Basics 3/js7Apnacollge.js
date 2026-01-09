//This function , try and catch, arrow function....

const student ={
    name: "yaman",
    age: 21,
    eng: 98,
    math:96,
    physics: 86,
    getAvg : function() {
        console.log(this);
        // let avg =(eng+math+physics)/3;//line will give error as it cannot recognize the values
        let avg=(this.eng + this.math + this.physics)/3; //here this is for object
        console.log(avg);
        
    }

}
student.getAvg();
student.eng = 50;
student.getAvg();//it will change bcz of "this" value print basis on current context 

function getAvg() {
        console.log(this);
        // let avg =(eng+math+physics)/3;//line will give error as it cannot recognize the values
        let avg=(this.eng + this.math + this.physics)/3; //here this is for window object all code executed inside this
        console.log(avg);
        
}

//....ex 2

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();//will change value

console.log(this); // very important inside node this will give {} but in console it will give window object
//browser ke ander global object h window object

//"this" cannnot be used in function but can be inside object function

//.............arrow function...............................
//syntax - 
//const func Name = (arg1,arg2) => {
//      }
function sum(a,b){
    console.log(a+b);
}

// chai()
const sum =  (a,b) => {
    console.log(a+b);
}

//in case of single argument () are optional
const cube = n =>{
    return n*n*n;
}

//implicit return 
const funcName =(arg1,arg2) =>(value);//when single return , no curly braces 









//this and arrow important points.........................................
// in normal functions "this" always depend on calling object 
// in arrow function it see that parent ko kisne call kia means arrow fuction scope and parent scope same 
const sstudent = {
    name : "yaman",
    marks : 95,
    prop: this,// global scope - this is for window object in student object
    getName: function(){
        console.log(this.name);// here this is student object / calling object
        console.log(this);
        
    },
    getMarks: () =>{
        console.log(this); // global - in arrow function this depend on parent scope means "this" of student object that is window object
        console.log(this.marks);

    }
};

//.....................................................................
//set timeout and set interval






//.............try and catch..............
//this works as when we have some doubt that these set of lines can have errors we can use it
//try usually identifies error and if error found catch do some alternate task.
console.log("hello ihskfskjfkjas");
console.log("hello ihskfskjfkjas");
let a= 5; let b=9;
// let c=8; //if it was not present then try catch execute otherwise normal
console.log("hello ihskfskjfkjas");
console.log("hello ihskfskjfkjas");
try{
    console.log(c);
}catch{
    console.log("error found");
    
}
console.log("hello ihskfskjfkjas");




//................................................................