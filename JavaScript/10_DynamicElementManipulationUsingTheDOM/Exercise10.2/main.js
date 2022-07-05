console.log(document.getElementById("list"));
console.log(document.getElementById("secTitle"));
console.log(document.getElementById("secParagraph"));

let muList = ["Bananas", "Apples", "Milk", "Chocolate"];
document.getElementById("list").innerHTML = "";
 myList.forEach(element => {
    document.getElementById("list")
    .innerHTML += "<li>" + element + "</li>";
});
