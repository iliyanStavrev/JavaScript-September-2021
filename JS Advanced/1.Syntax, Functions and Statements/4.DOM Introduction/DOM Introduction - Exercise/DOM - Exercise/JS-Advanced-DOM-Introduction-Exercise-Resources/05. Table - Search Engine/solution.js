function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let rowsElement = Array.from(document.querySelectorAll("tbody tr"));
        rowsElement.forEach(el =>{
           el.className = '';
        });
      
        let input = document.getElementById("searchField").value;
        rowsElement.forEach(el =>{
          if (el.textContent.match(input)) {
            el.className = "select";
          } 
        });     
   }
}