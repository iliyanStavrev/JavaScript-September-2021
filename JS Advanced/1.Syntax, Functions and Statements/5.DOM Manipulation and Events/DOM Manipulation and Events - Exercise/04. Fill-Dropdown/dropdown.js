function addItem() {
  let newItemText = document.querySelector('#newItemText');
  let newItemValue = document.querySelector('#newItemValue');

  let optionElement = document.createElement('option');
  
   optionElement.textContent = newItemText.value;
   optionElement.value = newItemValue.value;
   let parent = document.getElementById('menu');

   parent.appendChild(optionElement);
   newItemText.value = '';
   newItemValue.value = '';
   
}