let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (/\d/.test(key) || ['/', '*', '-', '+', '%', '.', 'Enter', 'Backspace', 'Escape'].includes(key)) {
        if (key === 'Enter') {
            handleInput('=');
        } else if (key === 'Backspace') {
            handleInput('C');
        } else if (key === 'Escape') {
            handleInput('AC');
        } else {
            handleInput(key);
        }
    }
});

function handleInput(value) {
    if (value === 'AC') {
        // Clear all
        expression = "";
        input.value = "0";
    } else if (value === 'C') {
        // Clear last entry
        expression = expression.slice(0, -1);
        input.value = expression || "0"; // Display 0 if empty
    } else if (value === '=') {
        // Evaluate the expression
        try {
            expression = eval(expression).toString();
            input.value = expression;
        } catch (error) {
            input.value = "Error";
            expression = "";
        }
    } else {
        // Append button value to expression
        expression += value;
        input.value = expression;
    }
}
