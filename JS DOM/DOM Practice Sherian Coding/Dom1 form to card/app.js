// let ul = document.querySelector("ul")
// let newList = document.createElement("li")
// newList.textContent = "yaman";

// ul.appendChild(newList);

// let input = document.querySelector("#yaman");

// input.addEventListener("input", function(details){
//     let valueOfInput = details.data
//     console.log(valueOfInput)


// })

// let h1 = document.querySelector("h1");
// let selected = document.querySelector("#options");

// selected.addEventListener("change", function(details){
    
//     console.log(details.target.value)
//     let selectedValue = details.target.value;

//     h1.innerText = `You selected ${selectedValue}`;
//     // h1.append(selectedValue)
// })

let inputs = document.querySelectorAll("input")
let form = document.querySelector("form")
let main = document.querySelector(".container")

form.addEventListener("submit",function(details){
    details.preventDefault();
    
    
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img")
    img.setAttribute("src",inputs[4].value)

    let name = document.createElement("h3");
    name.textContent= inputs[0].value;
    let  gender= document.createElement("h4");
    gender.textContent= inputs[2].value;
    let uniqueId = document.createElement("h4");
    uniqueId.textContent= inputs[1].value;
    let  info = document.createElement("p");
    info.textContent= inputs[3].value

    profile.appendChild(img)
    card.appendChild(profile)
    card.appendChild(name)
    card.appendChild(gender)
    card.appendChild(uniqueId)
    card.appendChild(info)

    main.append(card)
    console.log(details.target)

  
});

