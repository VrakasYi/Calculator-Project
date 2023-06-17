function operate() {
    if (operator === '/') {
        if (firstNo === 0) {
            display.textContent = 'THAT IS NOT OK'
            secondNo = undefined;
            operator = undefined;
            firstNo = undefined;
            operateSwitch = false;
        } else {
            result = (firstNo / secondNo).toString();
            accountForDot(result);
        }
    } else if (operator === '*') {
        result = (firstNo * secondNo).toString();
        accountForDot(result);
    } else if (operator === '-') {
        result.textContent = firstNo - secondNo;
        accountForDot(result);
    } else if (operator === '+') {
        result.textContent = firstNo + secondNo;
        accountForDot(result);
    }
}

function accountForDot(result) {
    if (result.toString().includes('.')) {
        display.textContent = result.toFixed(2);
    } else display.textContent = result;
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
            result = (firstNo / secondNo).toString();
            if (result.includes('.')) {
                display.textContent = (firstNo / secondNo).toFixed(2);
            } else display.textContent = (firstNo / secondNo);
        }
    } else if (operator === '*') {
        result = (firstNo * secondNo).toString();
        if (result.includes('.')) {
            display.textContent = (firstNo * secondNo).toFixed(2);
        }
        display.textContent = (firstNo * secondNo)
    } else if (operator === '-') {
         display.textContent = firstNo - secondNo;
    } else if (operator === '+') {
        display.textContent = firstNo + secondNo;
    }
}