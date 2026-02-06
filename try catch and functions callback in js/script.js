console.log("Before Try catch");

try{
    conole.log("Try catch error handling");
}
catch(error){
    console.log(error)
}

console.log("After Try");

try{
    let num_1 = 0;
    let num_2 = 0;

    if(num_1 == 0 && num_2 == 0){
        throw "Error : Result is undefined";
    }

    if(num_2 == 0){
        throw "Error : Cannot Divide by Zero";
    }

    console.log(num_1/num_2);
}
catch(er){
    console.log(er);
}

// Function callback work

function display(a){
    document.write(a);
}

display("<h1>Hello World</h1>");

function sum(a,b){
    let total = a+b;
    display(total)
}

sum(2,8);

// another example of functions callback


function output(result){
    document.getElementById("output").innerHTML = result
}

// output("Hello again");

function calculator(num1, num2, operator ){
    
    switch (operator) {
        case "+":
            let total = num1 + num2;
            return total;
        break;

        case "-":
            let minus = num1 - num2;
            return minus;
        break;

        case "*":
            let multiply = num1 * num2;
            return multiply;
        break;

        case "/":
            let divide = num1 / num2;
            return divide;
        break;

        default:
            return "Invalid operator";
            break;
    }
}

let data = calculator(2,7,"*");

output(data);