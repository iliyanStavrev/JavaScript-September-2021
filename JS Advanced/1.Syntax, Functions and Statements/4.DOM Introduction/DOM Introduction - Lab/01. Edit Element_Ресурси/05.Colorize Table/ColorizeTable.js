function colorize() {
  let tableRows = document.querySelectorAll("table tr:nth-child(even)");
for (const iterator of tableRows) {
    iterator.style.backgroundColor = "Teal"
}  
}