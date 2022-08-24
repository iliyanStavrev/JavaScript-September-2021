function focused() {
  let inputs = Array.from(document.querySelectorAll('input'));
  
    inputs.forEach(e =>{
        e.addEventListener('focus',onfocus);
        e.addEventListener('blur',blur);
    });

    function onfocus(event){
      event.target.parentElement.className = 'focused'; 
    }
    function blur(event){
        event.target.parentElement.className = '';
    }
}