function search() {
  let text = Array.from(document.querySelectorAll("#towns li"));
  let matches = 0;
  let input = document.getElementById("searchText").value;
  for (const i of text) {
    
     if (i.textContent.match(input)) {
        i.style.textDecorationLine = "underline";
        i.style.fontWeight = "bold";
        matches++;
     }
  }
 document.getElementById("result").textContent = `${matches} matches found`;
}
