      document.querySelector('form').addEventListener('submit',loginForm);

      async function loginForm(e){
          e.preventDefault();

          let form = new FormData(e.target);
          let email = form.get('email');
          let password = form.get('password');

          if (email === '' || password === '') {
            return  alert('All fields must be filled!');
          }

        let response = await fetch('http://localhost:3030/users/login',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        });

        if (!response.ok) {
            let error = await response.json();
            return alert(error.message);
        }

        let data = await response.json();
        sessionStorage.setItem('userToken',data.accessToken);
        window.location.pathname = 'index.html';
      }