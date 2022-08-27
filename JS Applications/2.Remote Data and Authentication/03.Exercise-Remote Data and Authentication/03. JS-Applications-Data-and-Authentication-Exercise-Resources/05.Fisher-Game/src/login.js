function solution(){
    let formData = document.querySelector('form');
   
    formData.addEventListener('submit',registration);
   ;

    if (sessionStorage.getItem('token') !== null) {
        
         document.getElementById('logout').addEventListener('click',logout)
        let userEmail = document.querySelector('.email span');
      userEmail.textContent = sessionStorage.getItem('userEmail');
 }
 }
    async function registration(e){
     e.preventDefault();
     let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');
    
    if (email == '' || password == '') {
       return alert('All fields are required!');
    }

 let response = await fetch('http://localhost:3030/users/login',{
     method:'post',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({email,password})
 });
  if (!response.ok) {
      let err = await response.json();
      return alert(err.message);
  }
  let data = await response.json();
    sessionStorage.setItem('token',data.accessToken);
    sessionStorage.setItem('userEmail',email);
    sessionStorage.setItem('userId',data._id);
   // window.location.pathname = './index.html';
   location.assign('./index.html');
    }
 function logout(){
    sessionStorage.clear();
    let userEmail = document.querySelector('.email span');
    userEmail.textContent = 'guest';

    location.assign('./index.html');
  }
solution();