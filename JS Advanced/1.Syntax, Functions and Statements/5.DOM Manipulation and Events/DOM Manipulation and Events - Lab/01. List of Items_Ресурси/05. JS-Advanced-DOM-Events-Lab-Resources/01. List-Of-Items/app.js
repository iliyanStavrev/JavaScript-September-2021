function addItem() {
   let parentElement = document.getElementById('items');
   let element = document.createElement('li');
   let input = document.getElementById('newItemText');
   
   element.textContent = input.value;
   parentElement.appendChild(element);
   input.value = '';
   
}