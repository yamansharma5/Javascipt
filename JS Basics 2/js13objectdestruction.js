const course = {
    name: "js hindi",
    instructor: "yaman",
    price : 4000,
}
// we can use these methods to acces key values of an object
//1
course.instructor
//2
console.log(course["price"]);
//3
const{instructor} = course
console.log(instructor);

const{instructor: ins} = course// we can change the name of key or value pairs
console.log(ins);


//APIs
// older values come in xml which was very complex to handle nowadays value come in Json
/*what is Json = json is object without name 
{ 
    "name": "js hindi",
    "instructor": "yaman",
    "price" : "4000",
}*/
