import page from '../node_modules/page/page.mjs';
import { loginPage } from './views/login.js';
import { homePage } from './views/home.js';
import { registerPage } from './views/register.js'
import { allCarsPage } from './views/allCars.js';
import { createPage } from './views/create.js';
import { logout } from './api/data.js';
import { detailsPage } from './views/details.js';
import { myCarsPage } from './views/myPage.js';
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';


page('/',homePage);
page('/create',createPage);
page('/all',allCarsPage);
page('/register',registerPage);
page('/login',loginPage);
page('/details/:id',detailsPage);
page('/my',myCarsPage);
page('/edit/:id',editPage);
page('/search',searchPage);

updateNav();

page();

document.getElementById('logout').addEventListener('click',signOut);

export function updateNav (){

    let userId = sessionStorage.getItem('userId');

    if (userId != null) {
        let email = sessionStorage.getItem('email');
        document.querySelector('#user a').textContent = `Welcome ${email}`;
        
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

