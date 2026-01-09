//events means some actions

let btn =document.querySelector("button")
console.dir(btn)//all the enent properties are inside this object usually starts from on.... on click,etc


//method 1
btn.onclick =function(){
    console.log("clicked");
};

//method 2
function onclk(){
    console.log("hello");
    
}
btn.onclick = onclk;

//for changing properties of all the buttons
let btns = document.querySelectorAll("button")
for(btn of btns){
    alert("hello");
};


//....................................................................
//Event Listners ; inki jaroorat isliye padi bcz by using onclick etc we can only set one property but using listners multiple
// syntax : element.addEventListner(event,callback)

let btns2 = document.querySelectorAll("button")
for(btn of btns2){
    btn.addEventListener("click" , //callback as function 
        function onclk(e){

            //type ,timestamp , preventdefault , target , srcElement , value
            console.log("hello");
    })
}



//.............................................
//enent listerner can also be applied on multiple elements 


