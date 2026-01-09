let form =document.querySelector("form")

//event argument is imp
form.addEventListener("submit", function(event){
    event.preventDefault();//used to stop the default tasks
    alert("submitted");
})

//extracting form data
form.addEventListener("submit", function(event){
    event.preventDefault();

    let inp = document.querySelector("input")
    // console.log(inp.innerText);..............not work
    console.log(inp.value);//use value keyword
    

    let user = form.elements[0];//we can access each element of form using form obj
    // let user = this.elements[0]; using this
    let pass =form.elements[1];

    console.log(user.value);
    

    
})

