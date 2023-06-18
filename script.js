const table = document.getElementById("table");
const arr = (document.querySelectorAll("td[data-ns-test]"));

let numArr = [];

for(let i = 0; i < arr.length; i++){
    numArr.push(Number(arr[i].innerHTML.trim()));
}

let sum = 0;
for(let i = 0; i < numArr.length; i++){
    sum = sum + numArr[i];
}

//data-ns-test="grandTotal"
let newRow = document.createElement("tr");
newRow.setAttribute("data-ns-test", "grandTotal");
newRow.innerText = sum;

table.appendChild(newRow);

console.log(table);

