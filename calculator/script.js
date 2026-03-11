let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function addNumber(num) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function addOperator(op) {
    let lastChar = currentInput.slice(-1);
    
    if (['+', '-', '*', '/'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
    } else {
        currentInput += op;
    }
    updateDisplay();
}

function calculate() {
    try {
        let lastChar = currentInput.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            currentInput = currentInput.slice(0, -1);
        }
        
        let result = eval(currentInput);
        
        if (!isFinite(result) || isNaN(result)) {
            currentInput = 'Error';
        } else {
            currentInput = result.toString();
        }
    } catch {
        currentInput = 'Error';
    }
    updateDisplay();
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        let buttonText = this.textContent;
        
        if (display.value === 'Error' && buttonText !== 'C') {
            currentInput = '0';
        }
        
        if (buttonText === 'C') {
            clearDisplay();
        }
        else if (buttonText === '=') {
            calculate();
        }
        else if (['+', '-', '*', '/'].includes(buttonText)) {
            addOperator(buttonText);
        }
        else {
            addNumber(buttonText);
        }
    });
});

updateDisplay();