function sumTable() {
let selected = Array.from(document.querySelectorAll("tr td:nth-child(2)"));
let sumElement =  selected.pop();
let sum = selected.reduce((a,b) => a + Number(b.textContent) , 0);

sumElement.textContent = sum;
}