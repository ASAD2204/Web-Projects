function add() {
    const num1 = Number(document.getElementById("n1").value);
    const num2 = Number(document.getElementById("n2").value);
    const result = num1 + num2;
    document.getElementById("output").innerHTML = `RESULT: `+result;
}

function subtract() {
    const num1 = Number(document.getElementById("n1").value);
    const num2 = Number(document.getElementById("n2").value);
    const result = num1 - num2;
    document.getElementById("output").innerHTML = `RESULT: `+result;
}

function multiply() {
    const num1 = Number(document.getElementById("n1").value);
    const num2 = Number(document.getElementById("n2").value);
    const result = num1 * num2;
    document.getElementById("output").innerHTML = `RESULT: `+result;
}

function divide() {
    const num1 = Number(document.getElementById("n1").value);
    const num2 = Number(document.getElementById("n2").value);
    let result;
    if (num2 === 0) {
        result = "Error: Division by zero";
    } else {
        result = num1 / num2;
    }
    document.getElementById("output").innerHTML = `RESULT: `+result;
}
