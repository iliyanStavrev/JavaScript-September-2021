import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { register } from '../api/data.js';
import { updateNav } from '../app.js';


let template = () => html`
<section id="register-page" class="content auth">
    <form @submit=${onSubmit} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>`;

let container = document.querySelector('main');

async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');
    let rePass = form.get('confirm-password');

    if (email == '' || password == '') {
        return alert('All fields are required!');
    }
    if (password != rePass) {
        return alert('Passwords don\'t match!');
    }

    await register(email,password);
    updateNav();
    page.redirect('/');
}

export async function registerPage() {

render (template(),container);
}