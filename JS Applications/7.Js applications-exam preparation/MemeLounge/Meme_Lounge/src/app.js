import page from '../node_modules/page/page.mjs';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { myPage } from './views/myPage.js';
import { allMemesPage } from './views/allMemes.js';
import { logout } from './api/api.js';

updateNav();

page('/',homePage);
page('/index.html',homePage);
page('/login',loginPage);
page('/register',registerPage);
page('/details/:id',detailsPage);
page('/create',createPage);
page('/edit/:id',editPage);
page('/my',myPage);
page('/all',allMemesPage);

page();

export function updateNav (){

    let userId = sessionStorage.getItem('userId');

    if (userId != null) {
        let email = sessionStorage.getItem('email');
        document.querySelector('.user span').textContent = `Welcome ${email}`;
         document.querySelector('.user').style.display = 'inline-block';
        document.querySelector('.guest').style.display = 'none';
    }
    else{
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline-block';
    }
}
  document.getElementById('logout').addEventListener('click',signOut);

async function signOut(e){
    e.preventDefault();

    await logout();
    updateNav();
    page.redirect('/');

}