let searchBox = document.getElementById("searchbox");

searchBox.addEventListener("input", function () {
    let searchdata = searchBox.value.toLowerCase();
    console.log(searchdata);

    let items = document.querySelectorAll("#List li");

    console.log(items);

    items.forEach(function (item) {

        let list = item.innerHTML.toLowerCase();
        console.log(list)

        if(list.includes(searchdata , list)){
            item.style.display = "block"
        }
        else{
            item.style.display = "none"
        }
    })
})