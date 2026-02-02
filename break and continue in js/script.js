document.write("<h1>Break and Continue in Loops</h1>");

for(let i = 1; i <= 10; i++){
    
    document.write(i);

    document.write("<br>");

    if(i == 5){
        break;
    }
}

for(let y = 1; y <= 20; y++){
    if(y == 10){
        continue;
    }
    if(y == 15){
        continue;
    }

     if(y == 17){
        break;
    }
    document.write(y+" &nbsp;&nbsp");
}

//This is an infinite loop run it at your own risk !

// while(true){

//     let number = parseInt(prompt("Enter any number between 1 to 100"));

//     if(number <= 0){
//         document.write("Loop has been stopped Because the Number is less than zero");
//         break;
//     }

//     if(number > 100){
//         document.write("Loop has been stopped Because the Number is greater than 100");
//         break;
//     }

//     if(number > 0){
//         alert("the condition is true");
//         continue;
//     }
// }

document.write("<br>");
document.write("<br>");

// let num = parseInt(prompt("Enter your number to check is it odd our even"));

// document.write("<br>");

// if(num % 2 == 0){
//     document.write(`${num} The number is Even`);
// }
// else{
//     document.write(`${num} The number is odd`);
// }

while(true){

    let num = parseInt(prompt("Enter any number between 1 to 100 to check is it odd our even "));

    if(num % 2 == 0){
        alert(`${num} The number is Even`);
        continue;
        
    }

    else{
    alert(`${num} The number is odd`);
    continue;
 }
}