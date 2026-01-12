let username = "Admin"

let password = "6767"

let result = username == "Admin" && password == "6767" ? "Login Succesfully" : "invalid data"

document.write(result);

document.write("<br>")

document.write("<h1>Table Using Loops</h1>")

let table_of_numbers = parseInt(prompt("Enter The Number Which Table You Want."));

for(let i = 1 ; i <=10 ; i++){
    document.write("<br>");
    document.write("<br>")
    
    document.write("<tr><td>"+table_of_numbers+"</td><td>*</td><td>"+i+"</td><td>=</td><td>"+i*table_of_numbers+"</td></tr>")
}
document.write("</table>")