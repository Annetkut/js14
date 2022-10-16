const aInput = document.getElementById("a")
const bInput = document.getElementById("b")
const sumBtn = document.getElementById("summ")
const minusBtn = document.getElementById("minus")
const multBtn = document.getElementById("mult")
const divBtn = document.getElementById("div")
const result = document.getElementById("result")


function calcSum(){
    const a = +(aInput.value);
    const b = +(bInput.value);
    result.innerHTML = "результат: " + (a + b);
}
sumBtn.onclick = calcSum;

function calcMinus(){
    const a = aInput.value;
    const b = bInput.value;
    result.innerHTML = "результат: " + (a - b);      
}
minusBtn.onclick = calcMinus;

function calcDiv(){
    const a = aInput.value;
    const b = bInput.value;
    if (+b === 0) {
        result.innerHTML = "делить на 0 нельзя!";
    } else {
        result.innerHTML = "результат: " + (a / b);
    }
}
divBtn.onclick = calcDiv;



function calcMult(){
    const a = aInput.value;
    const b = bInput.value;
    result.innerHTML = "результат: " + (a * b);
}
multBtn.onclick = calcMult;

let clicked = false

function select(sender){
    if (clicked === false) {
        sender.classList.add("selected");
        clicked = true;
    } else {
        sender.classList.remove("selected");
        clicked = false;
    }
}

let offset=0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.btn__slider-next').addEventListener('click',function(){
    offset = offset + 256;
    sliderLine.style.left = -offset + 'px';
    if (offset > 768) {
        offset = 0;
    }
});

document.querySelector('.btn__slider-back').addEventListener('click',function(){
    offset = offset - 256;
    sliderLine.style.left = -offset + 'px';
    if (offset < 0) {
        offset = 768;
    }
});