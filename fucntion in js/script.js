function check(){
    document.write("<h1>All in one Calculator</h1>");
}
check();
document.write("<br>")

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: cannot divide by zero";
    }
    return a / b;
}

function power(a, b) {
    return a ** b;   
}


let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enter the second number")); ;

document.write("Addition:", add(num1, num2));

document.write("<br>")
document.write("<br>")

document.write("Subtraction:", subtract(num1, num2));

document.write("<br>")
document.write("<br>")

document.write("Multiplication:", multiply(num1, num2));

document.write("<br>")
document.write("<br>")

document.write("Division:", divide(num1, num2));

document.write("<br>")
document.write("<br>")

document.write("Power:", power(num1, num2));
