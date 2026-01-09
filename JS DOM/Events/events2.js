//this in event listners
let btn =document.querySelector("button")
btn.addEventListener("click", function(){
    console.log(this);//here "this" is the element on which event listner added that is btn in this case
    console.log(this.innerText);//this will give test
})

//suppose multiple elements on html page
//h1,h3,p,button
function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundcolor= 'blue'//this can be used in multiple elements
} 

h1.addEventListener("click",changeColor);
btn.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor)