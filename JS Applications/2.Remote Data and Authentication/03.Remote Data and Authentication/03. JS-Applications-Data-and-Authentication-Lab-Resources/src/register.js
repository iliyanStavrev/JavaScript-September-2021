 document.querySelector('form').addEventListener('submit',onRegisterSubmit);

 async function onRegisterSubmit(e){

   e.preventDefault();
    let form = new FormData(e.target);
       let email =   form.get('email');
       let password =   form.get('password');
       let rePass =   form.get('rePass');

       if (email === '' || password === '') {
         return alert('All fields are required!');
       }
       if (password !== rePass) {
           alert('Password and Repeat must match!')
       }

       let response = await fetch('http://localhost:3030/users/register',{
           method:'post',
           headers:{'Content-Type':'application/json'},
           body: JSON.stringify({email,password})
       });

       if (!response.ok) {
           let error = await response.json();
           return alert(error.message);
       }

       let data = await response.json();
       console.log(data);
       sessionStorage.setItem('userToken',data.accessToken);
       window.location.pathname = 'index.html';

       

 }