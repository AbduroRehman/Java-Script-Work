let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        document.write("Result = " + result);
        break;

    case "-":
        result = num1 - num2;
        document.write("Result = " + result);
        break;

    case "*":
        result = num1 * num2;
        document.write("Result = " + result);
        break;

    case "/":
        result = num1 / num2;
        document.write("Result = " + result);
        break;

    default:
        alert("Invalid operator");
}
