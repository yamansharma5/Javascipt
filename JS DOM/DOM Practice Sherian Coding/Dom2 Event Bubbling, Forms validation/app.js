let email = document.querySelector("#email")
let pass = document.querySelector("#pass")
let error = document.querySelector("#message")
let form = document.querySelector("form");

form.addEventListener("submit", function(details){
    details.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    let echeck = emailRegex.test(email.value);
    let pcheck = passwordRegex.test(pass.value);

    if(echeck === false){
        error.textContent=" email enter again"
    }
    if(pcheck === false){
        error.textContent=" pass enter again"
    }
    else {
        error
    }
})