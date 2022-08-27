
  import { setUpHome, showHome } from "./homePage.js";
  import { setUpAddMovie, showAddMovie } from "./addMoviePage.js";
  import { setUpDetails } from "./details.js";
  import { setUpEdit } from "./edit.js";
  import { setUpLogin, showLogin } from "./login.js";
  import { setUpRegister, showRegister } from "./register.js";

  let main = document.querySelector('main');

    

  setUpHome(main,document.getElementById('home-page'));
  setUpAddMovie(main,document.getElementById('add-movie'));
  setUpDetails(main,document.getElementById('movie-details'));
  setUpEdit(main,document.getElementById('edit-movie'));
  setUpLogin(main,document.getElementById('form-login'));
  setUpRegister(main,document.getElementById('form-sign-up'));

  showHome();
setupNavigation();

   let links = {
       'homeLink':showHome,
       'loginLink':showLogin,
       'registerLink':showRegister,
   }
    document.querySelector('nav').addEventListener('click',navigation);
    
    function setupNavigation(){
          let email = sessionStorage.getItem('email');
       console.log(email);
       if (email !== null) {
           document.getElementById('welcome').textContent = `Welcome, ${email}`;
        Array.from(document.querySelectorAll("nav .user")).forEach(l => l.style.display = 'block');
        Array.from(document.querySelectorAll("nav .guest")).forEach(l => l.style.display = 'none');
     
       }
       else{
        Array.from(document.querySelectorAll("nav .user")).forEach(l => l.style.display = 'none');
        Array.from(document.querySelectorAll("nav .guest")).forEach(l => l.style.display = 'block');

       }
    }

    function navigation(e){
       e.preventDefault();
     
       let view = links[e.target.id];
       if (view == undefined) {
           return;
       }
         view();
    }
  document.getElementById('addMovieBtn').addEventListener('click',(e) =>{
      e.preventDefault();
         showAddMovie();
  });
     document.getElementById('logoutBtn').addEventListener('click',signOut);
     
     async function signOut(e){
         e.preventDefault();
         let token = sessionStorage.getItem('token');
         if (token == null) {
             return;
         }

         const response = await fetch('http://localhost:3030/users/logout', {
            method: 'get',
            headers: {
                'X-Authorization': sessionStorage.getItem('token')
            },
        });
        if (response.status == 204) {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('userId');
            document.getElementById('welcome').textContent = `Welcome, guest`;
            Array.from(document.querySelectorAll("nav .user")).forEach(l => l.style.display = 'none');
            Array.from(document.querySelectorAll("nav .guest")).forEach(l => l.style.display = 'block');
            showHome();
        } else {
            let err = await response.json();
           alert (err.message);
        }
     }