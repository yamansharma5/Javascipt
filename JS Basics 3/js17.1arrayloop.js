//condition and loop
const arr =[1,2,3,4,5,6,7,8]

//1 all are same use any one
const newArr= arr.filter((i) => i > 4);
console.log(newArr);

//2
const newArr2 = arr.filter((i) => {
    //i>4 - it will give error when ever scope start kia always use return
    return i>4;
})
console.log(newArr2);

//3
const newArr3=[];
arr.forEach((i) =>{
    if(i>4){
        newArr3.push(i);
    }
})
console.log(newArr3)







