function lockedProfile() {
   
   
   let buttonsElement = Array.from(document.querySelectorAll('button'));
   
   buttonsElement.forEach(e =>{
      e.addEventListener('click',toggle)
   })
   
   function toggle(e){
    let button = e.target;
    let profile = button.parentElement;
    let radioButton = profile.querySelector('input:checked');

    if (radioButton.value === 'unlock') {
                         //Select previous element 
        let hidden = button.previousElementSibling;

        hidden.style.display = hidden.style.display === 'block'
        ?'none'
        :'block';

        button.textContent = button.textContent === 'Show more'
        ?'Hide it'
        :'Show more';
    }
   }
}