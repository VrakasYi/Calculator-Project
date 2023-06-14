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
const z0 = document.querySelector('#z0');
const dot = document.querySelector('#dot');
const equ = document.querySelector('#equ');
const plus = document.querySelector('#plus');
let display = document.getElementById('display')

clear.addEventListener('click', () => {
    display.textContent = '0';
})
s7.addEventListener('click', () => {
    if (display.textContent === '0' || display.textContent === 'CASIO') {
        display.textContent = '7';
    } else {
        display.textContent = display.textContent + '7';
    }
})
e8.addEventListener('click', () => {
    if (display.textContent === '0' || display.textContent === 'CASIO') {
        display.textContent = '8';
    } else {
        display.textContent = display.textContent + '8';
    }
})
n9.addEventListener('click', () => {
    if (display.textContent === '0' || display.textContent === 'CASIO') {
        display.textContent = '9';
    } else {
        display.textContent = display.textContent + '9';
    }
})
f4.addEventListener('click', () => {
    if (display.textContent === '0' || display.textContent === 'CASIO') {
        display.textContent = '4';
    } else {
        display.textContent = display.textContent + '4';
    }
})
f5.addEventListener('click', () => {
    if (display.textContent === '0' || display.textContent === 'CASIO') {
        display.textContent = '5';
    } else {
        display.textContent = display.textContent + '5';
    }
})
s6.addEventListener('click', () => {
    if (display.textContent === '0' || display.textContent === 'CASIO') {
        display.textContent = '6';
    } else {
        display.textContent = display.textContent + '6';
    }
})
o1.addEventListener('click', () => {
    if (display.textContent === '0' || display.textContent === 'CASIO') {
        display.textContent = '1';
    } else {
        display.textContent = display.textContent + '1';
    }
})
t2.addEventListener('click', () => {
    //t2.classList.remove('wait');
    if (display.textContent === '0' || display.textContent === 'CASIO') {
        display.textContent = '2';
    } else {
        display.textContent = display.textContent + '2';
    }
})
t3.addEventListener('click', () => {
    if (display.textContent === '0' || display.textContent === 'CASIO') {
        display.textContent = '3';
    } else {
        display.textContent = display.textContent + '3';
    }
})