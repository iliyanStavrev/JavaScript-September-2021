
import page from '../../node_modules/page/page.mjs';
//import page from "//unpkg.com/page/page.mjs";
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { myPage } from "./views/myFurniture.js";

import { logout } from './api/api.js';

page('/index.html', dashboardPage);
page('/', dashboardPage);
page('/create', createPage);
page('/details/:id',detailsPage);
page('/edit/:id',editPage);
page('/login',loginPage);
page('/register', registerPage);
page('/my-furniture',myPage);

updateNav();
page();

export function updateNav(){
    let token = sessionStorage.getItem('token');
    if (token !== null) {
    document.getElementById('guest').style.display = 'none';
    document.getElementById('user').style.display = 'inline-block';
}
else{
    document.getElementById('guest').style.display = 'inline-block';
    document.getElementById('user').style.display = 'none';
 }


}

export function setButtonsActive(element){
    document.querySelectorAll('nav a').forEach(a => a.removeAttribute('class'));
    element.classList.add('active');
}

document.getElementById('logoutBtn').addEventListener('click',signOut);


async function signOut(){
   await  logout();
   updateNav();
  page.redirect('/');
}

