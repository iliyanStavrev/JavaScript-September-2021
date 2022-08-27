import { html,render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { login } from "../api/data.js";
import { updateNav } from "../app.js";
import { notify } from "./notify.js";

let template = () => html`
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`;

let container = document.querySelector('main');

async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');

    if (email == '' || password == '') {
        return notify('All fields are required!');
    }

   await login(email,password);
   updateNav();
    page.redirect('/');

}

export async function loginPage(){
    render(template(),container);
}