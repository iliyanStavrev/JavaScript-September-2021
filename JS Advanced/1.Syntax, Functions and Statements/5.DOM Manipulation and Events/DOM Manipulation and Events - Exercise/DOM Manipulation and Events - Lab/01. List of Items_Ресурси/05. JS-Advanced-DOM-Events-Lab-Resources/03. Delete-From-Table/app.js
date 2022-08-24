function deleteByEmail() {
   let emailToDelete = Array.from(document.querySelectorAll('tr td:nth-child(2)'));
   let inputEmail = document.querySelector("input");
   let result = document.getElementById('result');

   emailToDelete.forEach((e) =>{
      if (e.textContent === inputEmail.value) {
         e.parentElement.remove(); 
         result.textContent = 'Deleted';
      }
      else{
          result.textContent = "Not found."
      } 
   });

}