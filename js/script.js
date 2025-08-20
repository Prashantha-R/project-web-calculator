//ACCESSING THE DOM ELEMENTS
let input = document.getElementById("input");
let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");
 
// To get access for all button items

for (const item of btn) {
    item.addEventListener("click", (event) => {
    let btnText = event.target.innerText;

    //condition to erase sreen if AC is clicked

    if (btnText === "AC") {
        btnText = "";
        screen.value = "";
        input.value = "";
        
    }
    if (btnText === "÷") {
        btnText = "⁄";
    }
    if (btnText === "×") {
        btnText = "*";
    }
    screen.value = screen.value + btnText;
    
    })
}

const returnEval = (args) =>{
return eval(args)
//return eval(`"use strict; (${args})`")
}
const getresult = () =>{
    input.value = screen.value;
    //Never use direct eval()
    //screen.value = eval(screen.value);

    screen.value = returnEval(screen.value);
}

const backspace = () =>{
    // included            excluded
    //substring(start index value, end index value)

    screen.value = screen.value.substring(0, screen.value.length-1)
}



   

