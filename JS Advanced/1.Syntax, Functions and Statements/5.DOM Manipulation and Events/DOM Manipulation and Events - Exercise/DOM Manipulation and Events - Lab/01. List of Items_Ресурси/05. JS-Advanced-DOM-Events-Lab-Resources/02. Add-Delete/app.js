function addItem() {
    let parentElement = document.getElementById('items');
    let element = document.createElement('li');
    let input = document.getElementById('newItemText');
    element.textContent = input.value;
    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('href','#');
    deleteButton.textContent = '[Delete]';

    deleteButton.addEventListener('click',(e) =>{
    e.target.parentElement.remove();
    });
    element.appendChild(deleteButton);
    parentElement.appendChild(element);
    input.value = '';
}