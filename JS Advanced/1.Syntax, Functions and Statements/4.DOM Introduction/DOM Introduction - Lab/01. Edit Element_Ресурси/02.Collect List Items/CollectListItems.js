function extractText() {
   let list = document.getElementById("items").textContent;
   let result = document.getElementById("result");
   result.textContent = list;
}