function validate() {
    let inputEl = document.getElementById('email');
    let regex = /^\w+@\w+\.\w+$/;
    inputEl.addEventListener('change',checkMail);
        
    function checkMail(e){
        if(regex.test(e.target.value)){
        e.target.removeAttribute('class');
          return;
        }
  e.target.className = 'error';
    }
        
}