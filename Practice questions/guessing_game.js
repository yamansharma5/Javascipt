const max = prompt("enter the max number");
console.log(max);

let random = Math.floor(Math.random() * max) + 1;
let guess= prompt("guess the number");
if(guess == random){
    console.log("congrax");
    
}
while(1){

if(guess=="quit"){
    console.log("you quit");
    break;
}
if(guess == random){
    console.log("congraxffffffffffffffffff");
    break;
    
}
else{
    guess=prompt("wrong guess");
    
}}