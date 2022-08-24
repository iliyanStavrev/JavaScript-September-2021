function create(words) {
  words.forEach(element => {
   let divElement = document.createElement('div'); 
   let parentElement = document.getElementById('content');
   let pElement = document.createElement('p');
   pElement.textContent = element;
   pElement.style.display = 'none';
   divElement.appendChild(pElement);
   parentElement.appendChild(divElement);
    
   divElement.addEventListener('click',function(){
      pElement.style.display = 'block';
   })
  });

}