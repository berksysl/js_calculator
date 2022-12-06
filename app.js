// Getting Buttons From DOM
const numberOneBtn = document.querySelector('#one');
const numberTwoBtn = document.querySelector('#two');
const numberThreeBtn = document.querySelector('#three');
const numberFourBtn = document.querySelector('#four');
const numberFiveBtn = document.querySelector('#five');
const numberSixBtn = document.querySelector('#six');
const numberSevenBtn = document.querySelector('#seven');
const numberEightBtn = document.querySelector('#eight');
const numberNineBtn = document.querySelector('#nine');
const numberZeroBtn = document.querySelector('#zero');
const multiplySignBtn = document.querySelector('#multi');
const equalSignBtn = document.querySelector('#equalBtn');
const dotSignBtn = document.querySelector('#dot');
const addSignBtn = document.querySelector('#add');
const subsSignBtn = document.querySelector('#subs');
const clearSignBtn = document.querySelector('#clearBtn');
const divideSignBtn = document.querySelector('#divide');
const display = document.querySelector('#display')

// Adding Event Listeners To DOM Elements
numberOneBtn.addEventListener("click", function(){
    display.value += 1;
})
numberTwoBtn.addEventListener("click", function(){
    display.value += 2;
})
numberThreeBtn.addEventListener("click", function(){
    display.value += 3;
})
numberFourBtn.addEventListener("click", function(){
    display.value += 4;
})
numberFiveBtn.addEventListener("click", function(){
    display.value += 5;
})
numberSixBtn.addEventListener("click", function(){
    display.value += 6;
})
numberSevenBtn.addEventListener("click", function(){
    display.value += 7;
})
numberEightBtn.addEventListener("click", function(){
    display.value += 8;
})
numberNineBtn.addEventListener("click", function(){
    display.value += 9;
})
numberZeroBtn.addEventListener("click", function(){
    display.value += 0;
})
addSignBtn.addEventListener("click", function(){
    if(display.value[display.value.length-1] < 10)
        display.value += '+';
})
subsSignBtn.addEventListener("click", function(){
    if(display.value[display.value.length-1] < 10)
        display.value += '-';
})
multiplySignBtn.addEventListener("click", function(){
    if(display.value[display.value.length-1] < 10)
        display.value += '*';
})
divideSignBtn.addEventListener("click", function(){
    if(display.value[display.value.length-1] < 10)
        display.value += '/';
})
dotSignBtn.addEventListener("click", function(){
    if(display.value[display.value.length-1] < 10)
        display.value += '.';
})
equalSignBtn.addEventListener("click", function(){
    if(display.value == ""){
        alert("Please enter any numbers to calculate!");
    }
    else{
        display.value = eval(display.value);
    }
})
clearSignBtn.addEventListener("click", function(){
    display.value = "";
})