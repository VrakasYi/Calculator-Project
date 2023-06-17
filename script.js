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

let firstNo;
let secondNo;
let operator;

let operateSwitch = false;

del.addEventListener('mousedown', () => {
    del.classList.remove('wait');
    if (display.textContent === '0' || display.textContent === 'CASIO' || display.textContent ==='0') {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0,-1);
    }
})
buttonRelease(del)

divide.addEventListener('mousedown', () => {
    operateSelector('/');
    divide.classList.remove('wait');
})
buttonRelease(divide)

multi.addEventListener('mousedown', () => {
    operateSelector('*');
    multi.classList.remove('wait');
})
buttonRelease(multi)

minus.addEventListener('mousedown', () => {
    operateSelector('-');
    minus.classList.remove('wait');
})
buttonRelease(minus)

plus.addEventListener('mousedown', () => {
    operateSelector('+');
    plus.classList.remove('wait');
})
buttonRelease(plus)

equ.addEventListener('mousedown', () => {
    operateEqual();
    equ.classList.remove('wait');
})
buttonRelease(equ)

clear.addEventListener('mousedown', () => {
    display.textContent = '0';
    clear.classList.remove('wait');
    secondNo = undefined;
    operator = undefined;
    firstNo = undefined;
    operateSwitch = false;
})
buttonRelease(clear)

buttonBehavior(o1, '1');
buttonBehavior(t2, '2');
buttonBehavior(t3, '3');
buttonBehavior(f4, '4');
buttonBehavior(f5, '5');
buttonBehavior(s6, '6');
buttonBehavior(s7, '7');
buttonBehavior(e8, '8');
buttonBehavior(n9, '9');

z0.addEventListener('mousedown', () => {
    z0.classList.remove('wait');
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
z0.addEventListener('mouseup', () => {
    z0.classList.add('wait');
})

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
        if (operator === '-') {
            if (display.textContent === '0' || display.textContent === 'CASIO') {
                display.textContent = '-';
                firstNo = '0'
            }
        }
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
        if (firstNo === 0) {
            display.textContent = 'THAT IS NOT OK'
            secondNo = undefined;
            operator = undefined;
            firstNo = undefined;
            operateSwitch = false;
        } else {
            let divisionResult = (firstNo / secondNo).toString();
            if (divisionResult.includes('.')) {
                display.textContent = (firstNo / secondNo).toFixed(2);
            } else display.textContent = (firstNo / secondNo);
        }
    } else if (operator === '*') {
        display.textContent = firstNo * secondNo;
    } else if (operator === '-') {
         display.textContent = firstNo - secondNo;
    } else if (operator === '+') {
        display.textContent = firstNo + secondNo;
    }
}
function buttonBehavior(buttonID, digit) {
    buttonID.addEventListener('mousedown', () => {
        addDigits(digit);
        buttonID.classList.remove('wait');
    });
    buttonRelease(buttonID)
}
function buttonRelease(buttonID) {
    buttonID.addEventListener('mouseup', () => {
        buttonID.classList.add('wait');
    })
}
