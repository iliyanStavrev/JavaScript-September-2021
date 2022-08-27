import { showHome } from "./homePage.js";

let main = undefined;
let section = undefined;

async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');
    let repass = form.get('repeatPassword');
   console.log(password.length);
    if (email == '' || password == '') {
        return alert('All fields are required!')
    }
    if (password.length < 6) {
        return alert('Password should be at least 6 charachter')
    }
    if (password != repass) {
        return alert('Passwords must match!')
    }

    let response = await fetch('http://localhost:3030/users/register',{
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

           document.querySelector('#form-sign-up input[name="email"]').value = '';
           document.querySelector('#form-sign-up input[name="password"]').value = '';
           document.querySelector('#form-sign-up input[name="repeatPassword"]').value = '';

           showHome();
        }
    
}

export function setUpRegister(mainTarget,sectionTarget){
 main = mainTarget;
 section = sectionTarget;

 section.querySelector('form').addEventListener('submit',onSubmit);
}
export async function showRegister(){
 main.innerHTML = '';
 main.appendChild(section);
}