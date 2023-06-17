
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
})