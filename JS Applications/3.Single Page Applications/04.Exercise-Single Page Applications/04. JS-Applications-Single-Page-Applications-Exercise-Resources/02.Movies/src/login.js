import { showHome } from "./homePage.js";

 
let main = undefined;
let section = undefined;
  
async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');

    let response = await fetch('http://localhost:3030/users/login',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
    });
        if (response.ok) {
            let data = await response.json();
            sessionStorage.setItem('token',data.accessToken);
            sessionStorage.setItem('userId',data._id);
            sessionStorage.setItem('email',data.email);
           

            document.getElementById('welcome').textContent = `Welcome, ${email}`;
           Array.from(document.querySelectorAll("nav .user")).forEach(l => l.style.display = 'block');
           Array.from(document.querySelectorAll("nav .guest")).forEach(l => l.style.display = 'none');
          
           document.querySelector('#form-login input[name="email"]').value = '';
           document.querySelector('#form-login input[name="password"]').value = '';
           showHome();

        }else{
            let err = await response.json();
            alert(err.message);
        }

    
}

export function setUpLogin(mainTarget,sectionTarget){
 main = mainTarget;
 section = sectionTarget;

 section.querySelector('form').addEventListener('submit',onSubmit);

   
}
export async function showLogin(){
 main.innerHTML = '';
 main.appendChild(section);
}