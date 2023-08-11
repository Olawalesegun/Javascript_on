var body = document.body;
var firstChild = body.firstElementChild;
var h1 = firstChild.firstElementChild;
h1.innerHTML = "KuliTech Ventures"

var kuliTech = document.body.getElementsByTagName("h1");
kuliTech[0].innerText = "KuliTech Business";

var kuliBusiness = document.getElementById("compName");
kuliBusiness.innerHTML = "KuliTech Enterprise";

let groceryRow = document.createElement(tr);
let grocerydata = document.createElement(td);
let grocery = "Garri";
let price = "500";

function addGroceries(table, grocery, price){
    let groceryRow = document.createElement("tr");

    let groceryData = document.createElement("td");
    let priceData = document.createElement("td");

    groceryData.innerHTML = grocery;
    priceData.innerHTML = price;

    grocery.appendChild(groceryData);
    groceryRow.appendChild(priceData);

    table.childNodes[1].appendChild(groceryRow);
}

let priceTable = document.getElementById("priceTable");
let form = document.getElementsByTagName("input");

function add(){
    event.preventDefault();
    grocery = form[0].value;
    price = form[1].value;
    addGroceries(priceTable, grocery, price);
    clearInput();
}

function clearInput(){
    form[0].value = "";
    form[1].value = "";
}

addGroceries(priceTable, "Mongo", 300);
// console.log("First Child:", body.firstChild)
// console.log(window.document.body)
// console.log()