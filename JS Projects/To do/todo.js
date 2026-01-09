let inp =document.querySelector("input");
let btn =document.querySelector("button");
let ul =document.querySelector("ul");

btn.addEventListener("click", function(){
    let item =document.createElement("li")
    item.innerText=inp.value;
   

    let dlt = document.createElement("button")
    dlt.innerText= "Remove";
    dlt.classList.add("delete");
    item.appendChild(dlt);

    ul.appendChild(item);
    inp.value = "";
});



// let dltbtns =document.queryvfSelectorAll(".delete")
// for (dlt of dltbtns){
//     dlt.addEventListener('click',function(){
//         let parent = this.parentElement;
//         parent.remove();
//     })
// } 

ul.addEventListener("click",function(e){
    e.target

})