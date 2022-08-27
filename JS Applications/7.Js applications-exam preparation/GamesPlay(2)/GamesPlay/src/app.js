import page from '../node_modules/page/page.mjs';
import { logout } from './api/data.js';
import { allGamesPage } from './views/all.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';



page('/',homePage);
page('/create',createPage);
page('/all',allGamesPage);
page('/register',registerPage);
page('/login',loginPage);
page('/details/:id',detailsPage);
page('/edit/:id',editPage);

updateNav();

page();

document.getElementById('logout').addEventListener('click',signOut);

export function updateNav (){

    let userId = sessionStorage.getItem('userId');

    if (userId != null) {
        
         document.querySelector('#user').style.display = 'inline-block';
        document.querySelector('#guest').style.display = 'none';
    }
    else{
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'inline-block';
    }
}

export async function signOut(e){
    e.preventDefault();
    await logout();
    updateNav();
    page.redirect('/');
}
