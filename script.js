const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const s7 = document.querySelector('#s7');
const e8 = document.querySelector('#e8');
const n9 = document.querySelector('#n9');
const divide = document.querySelector('#divide');
const f4 = document.querySelector('#f4');
const f5 = document.querySelector('#f5');
const s6 = document.querySelector('#s6');
const multi = document.querySelector('#multi');
const o1 = document.querySelector('#o1');
const t2 = document.querySelector('#t2');
const t3 = document.querySelector('#t3');
const minus = document.querySelector('#minus');
const z0 = document.querySelector('#zero');
const dot = document.querySelector('#dot');
const equ = document.querySelector('#equ');
const plus = document.querySelector('#plus');
let display = document.getElementById('display')
let operatorBlinker = document.getElementById('operatorBlinker');
let firstNo;
console.log(firstNo);
let secondNo;
let operator;

let operateSwitch = false;
let equalSwitch = false;
//let displayAfterOperator = false;
del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0,-1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
})

divide.addEventListener('click', () => {
    operateSelector('/');
})
multi.addEventListener('click', () => {
    operateSelector('*');
})
minus.addEventListener('click', () => {
    operateSelector('-');
})
plus.addEventListener('click', () => {
    operateSelector('+');
})
equ.addEventListener('click', () => {
    operateEqual();
})
clear.addEventListener('click', () => {
    display.textContent = '0';
})
s7.addEventListener('click', () => {
    addDigits('7');
});
e8.addEventListener('click', () => {
    addDigits('8');
});
n9.addEventListener('click', () => {
    addDigits('9');
});
f4.addEventListener('click', () => {
    addDigits('4');
});
f5.addEventListener('click', () => {
    addDigits('5');
});
s6.addEventListener('click', () => {
    addDigits('6');
});
o1.addEventListener('click', () => {
     addDigits('1');
});
t2.addEventListener('click', () => {
    addDigits('2');
});
t3.addEventListener('click', () => {
    addDigits('3');
});
z0.addEventListener('click', () => {
    console.log('0')
    if (!operateSwitch) {
        if (display.textContent === '0' || display.textContent === 'CASIO') {
            display.textContent = '0';
        } else {
            display.textContent = display.textContent + '0';
        }
    } else {
        display.textContent = '0';
        operateSwitch = false;
    }
});

function addDigits(no) {
    if (!operateSwitch) {
        if (display.textContent === '0' || display.textContent === 'CASIO') {
            display.textContent = no;            
        } else {
            display.textContent = display.textContent + no;
        }
    } else {
        display.textContent = no;
        secondNo = +display.textContent;
        operateSwitch = false;
    }   
}
function operateSelector(x) {
    if (!operateSwitch) {
        if (firstNo === undefined) {
            firstNo = +display.textContent;       
            operateSwitch = true;        
        } else if (secondNo === undefined) {
            secondNo = +display.textContent;
            operateSwitch = true;
        } else operateEqual();
        operator = x;
    } else operator = x;
}
function operateEqual() {
    if (firstNo !== undefined && secondNo !== undefined) {
        secondNo = +display.textContent;
        operate();
        firstNo = +display.textContent;
        secondNo = undefined;
        operator = undefined;      
    }
    operateSwitch = true;
}

function operate() {
    if (operator === '/') {
        display.textContent = (firstNo / secondNo).toFixed(2);
    } else if (operator === '*') {
        display.textContent = firstNo * secondNo;
    } else if (operator === '-') {
        display.textContent = firstNo - secondNo;
    } else if (operator === '+') {
        display.textContent = firstNo + secondNo;
    }
}