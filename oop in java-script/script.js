class Book{
    title = "Openhimer";
    author =  "Christophar Nolan";
    year = "2023";
}
let book1 = new Book();
document.write("<p>Book 1</p>");
document.write(`Title : ${book1.title} <br> Author : ${book1.author} <br> Year : ${book1.year}`);

document.write("<br>");
document.write("<br>");

let book2 = new Book();

document.write("<p>Book 2</p>");

book2.title = "MS office"
book2.author = "Bill Gates"
book2.year = "2013"

document.write(`Title : ${book2.title} <br> Author : ${book2.author} <br> Year : ${book2.year}`);

document.write("<br>");

// class which uses methods

class Animal{
    name;
    sound;

    Display(){
        document.write(`<p>Animal Name : ${this.name} , Animal Sound : ${this.sound} </p>`)
    }
}
document.write("<br>");

let cat = new Animal();
cat.name = "Angila";
cat.sound = "Meow";
cat.Display();

document.write("<br>");

let dog = new Animal();
dog.name = "Tommy";
dog.sound = "bark";
dog.Display();

document.write("<br>");

// class by using constructor method

class Car{
    name;
    color;

    constructor(a , b){
        this.name = a;
        this.color = b;
    }

    show(){
        document.write(`<p>Car Name : ${this.name} , Car,s Color : ${this.color} </p>`);
    }

}

let car1 = new Car("Fortuner" , "Black");
car1.show();

let car2 = new Car("BMW" , "Cyan");
car2.show();





