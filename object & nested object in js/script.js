
let object = {
    "Name" : "Abdur",
    "City" : "Frankfurt",
    "Country" : "Germany",
    "Skills" : "Front end",
}

document.getElementById("output").innerHTML = object.Name

for(let key in object){
    document.write( key+":"+object[key]+"<br>")
}

let data = {
    "Student1":{
        "name": "Abdur",
        "City" : "Frankfurt"
        
    },

    "Student2":{
        "name": "Ali",
        "City" : "Amsterdam"
        
    },

     "Student3":{
        "name": "Musayb",
        "City" : "New York"
        
    },
};

for(let x in data){
    console.log(x)
    console.log(data[x])

    for(let y in data[x]){
        console.log(obj[x][y])

    }
}